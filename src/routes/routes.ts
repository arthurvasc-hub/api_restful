// Definições de rotas.
import express from "express";
import { createNewBook, createManyBooks, getAllBooks, getByTitle } from "../services/books";
import { error } from "console";


const router = express.Router()

// Rota onde vou exibir todos os Livros no DB
router.get('/books', async (req, res) => {
const result = await getAllBooks()
res.json({ result })
});

// Rota onde vou exibir um livro no DB, pelo título
router.get('/book', async (req, res) => {
    const result = await getByTitle('TypeScript for JavaScript Developers')
if(result){
    res.status(200).json({ result })
} else {
    res.status(500).json({ error: "Não existe livro com esse título" })}
});

// Rota para adicionar um livro 
router.post('/book', async (req, res) => {
const book = await createNewBook({
    title: "Aprendendo a Linguagem R", author:"Milene Guimarães", synopsis:""});
if(book){
    res.status(201).json({book});
} else {
    res.status(500).json({error: "Título já cadastrado"});
}
});
// Rota para adicionar muitos livros
router.post('/manyBooks', async (req, res) => {
    const manyBooks = await createManyBooks ([
        {title: "", author: "", synopsis: ""}, 
        {title: "", author: "", synopsis: ""},
        {title: "", author: "", synopsis: ""}]);
    if(manyBooks){
        res.status(201).json({manyBooks});
    } else {
        res.status(500).json({error});
    }
});


export default router;


