// Definições de rotas.
import express from "express";

const router = express.Router()

// Rota onde vou exibir todos os Livros no DB
router.get('/books', (req, res) => {
res.json('Olá mundo')
});
// Rota para atualizar um livro 
router.post('/books', (req, res) => {
res.json('')
});
// Rota para adicionar um livro 
router.put('/books', (req, res) => {
res.json('')
});
// Rota para deletar um livro 
router.delete('/books', (req, res) => {
res.json('')
});



export default router;


