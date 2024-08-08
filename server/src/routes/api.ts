// Definições de rotas para o CRUD.
import express, { Request, Response } from "express";
import { createNewBook, deleteBook, updateBook, getBooksByTitle} from "../services/books";
import { bookSchema, titleSchema } from "../validation/zod";



const router = express.Router()


// Rota onde vou exibir um livro no DB, pelo título
router.get('/book', async (req: Request, res: Response) => {
    // Validação Zod
try {
    const validation = titleSchema.safeParse(req.query);
   if(!validation.success){
    return res.status(400).json({error: 'Título inválido.'})
   };
   const { title } = validation.data;
   const books = await getBooksByTitle(title);
   if (!books){
    return res.status(422).json({ error: 'Dados inválidos para exibição do livro'})
   } 
    return res.json(books);
} catch (error) {
        res.status(500).send({ error: 'Erro interno do servidor' });
   };
});

// Rota para adicionar um livro 
router.post('/book', async (req: Request, res: Response) => {
    // Validação Zod
try {
    const validation = bookSchema.safeParse(req.body)
    if(!validation.success){
        return res.status(422).json({ error: 'Dados inválidos para o livro. Verifique os dados enviados.'})
    };
        const book = await createNewBook(validation.data);
        if (!book) {
        return res.status(422).send({ error: 'Não foi possível criar o livro. Verifique os dados enviados.' });
        } 
        return res.json(book);
} catch (error) {
        res.status(500).send({ error: 'Erro interno do servidor' });
    };
});


// Rota para atualizar o livro
type BookParams = {
    id: string // ID VEM COMO STRING NA URL
};
router.put('/book/:id', async (req: Request<BookParams>, res: Response) => {
try {
    const bookId = parseInt(req.params.id);
    if(isNaN(bookId)) {
        return res.status(400).json({ error: 'ID inválido.' });
    };
    // Validação Zod
    const validation = bookSchema.safeParse(req.body);
    if(!validation.success) {
        return res.status(400).json({ error: 'Não foi possível atualizar o livro. Verifique os dados enviados.' });
    };
    const updatedData = validation.data;
        const updatedBook = await updateBook(bookId, updatedData);
        return res.json(updatedBook);
} catch (error) {
        return res.status(500).json({ error: 'Erro interno do servidor' });
    } 
});


// Rota para DELETAR um livro através do ID
router.delete('/book/:id', async (req: Request<BookParams>, res: Response) => {
try {
    const id = parseInt(req.params.id, 10);
    if(isNaN(id)) {
        return res.status(400).json({ error: 'ID inválido fornecido.' });
    };
    const result = await deleteBook(id);
    if(!result) {
        res.status(404).json({ error: 'Não existe um livro com esse ID para ser deletado.' })
    };  
        return res.status(200).json({ result });
} catch {
        return res.status(500).send({ error: 'Erro interno do servidor' })};
});

export default router;                            

