// Definições de rotas.
import express from "express";
import { createNewBook } from "../services/books";
import { error } from "console";

const router = express.Router()

// Rota onde vou exibir todos os Livros no DB
router.get('/books', (req, res) => {
res.json('Olá mundo')
});

// Rota para adicionar um livro 
router.post('/books', async (req, res) => {
const book = await createNewBook({
    title: "Introduction to Web Security",
    author:"Chris Evans",
    synopsis:"Este livro aborda os conceitos fundamentais de segurança web, incluindo práticas recomendadas para proteger suas aplicações contra as ameaças mais comuns da internet.", 
})
if(book){
    res.status(201).json({book})
} else {
    res.status(500).json({error: "Título já cadastrado"})
}
});


// Rota para atualizar um livro 
router.put('/books', (req, res) => {
res.json('')
});


// Rota para deletar um livro 
router.delete('/books', (req, res) => {
res.json('')
});



export default router;


