// Definições de rotas.
import express from "express";
import { createNewBook, createManyBooks, getAllBooks } from "../services/books";
import { error } from "console";


const router = express.Router()

// Rota onde vou exibir todos os Livros no DB
router.get('/books', async (req, res) => {
const result = await getAllBooks()
res.json({ result })
});

// Rota para adicionar um livro 
router.post('/books', async (req, res) => {
const book = await createNewBook({
    title: "", author:"", synopsis:""});
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


