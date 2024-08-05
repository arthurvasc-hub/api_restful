// Definições de rotas para o CRUD.
import express, { Request, Response, NextFunction } from "express";
import { createNewBook, deleteBook, updateBook, getBooksByTitle} from "../services/books";

const router = express.Router()


// Rota onde vou exibir um livro no DB, pelo título
router.get('/book', async (req: Request, res: Response) => {
    const { title } = req.query;
    if (typeof title === 'string') {
        const books = await getBooksByTitle(title);
        if (books.length > 0) {
            res.json(books);
        } else {
            res.status(404).json({ error: 'Nenhum livro encontrado com esse título.' });
        }
    } else {
        res.status(400).json({ error: 'Título inválido.' });
    }
});

// Rota para adicionar um livro 
router.post('/book', async (req: Request, res: Response) => {
    try {
        const book = await createNewBook(req.body);
        if (book) {
            res.send({ book });
        } else {
            res.status(422).send({ error: 'Não foi possível criar o livro. Verifique os dados enviados.' });
        }
    } catch (error) {
        res.status(500).send({ error: 'Erro interno do servidor' });
    }
});


// Rota para atualizar o livro
type BookParams = {
    id: string // ID VEM COMO STRING NA URL
};
router.put('/book/:id', async (req: Request<BookParams>, res: Response) => {
    const bookId = parseInt(req.params.id);
    if (isNaN(bookId)) {
        return res.status(400).json({ error: 'ID inválido.' });
    };
    const updatedData = req.body;
    try {
        const updatedBook = await updateBook(bookId, updatedData);
        res.json(updatedBook);
    } catch (error) {
        res.status(500).json({ error: 'Falha ao atualizar o livro' });
    }
    });  


// Rota para DELETAR um livro através do ID
router.delete('/book/:id', async (req: Request<BookParams>, res: Response) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
        return res.status(400).json({ error: 'ID inválido fornecido.' });
    };
    const result = await deleteBook(id);
    if (result) {
        res.status(200).json({ result });
    } else {
        res.status(404).json({ error: 'Não existe um livro com esse ID para ser deletado.' });
    }
})



export default router;                            
