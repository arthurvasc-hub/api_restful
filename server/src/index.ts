import express, { Router } from "express";
import * as dotenv from 'dotenv'
import cors from "cors"
import routes from "./routes/api"


dotenv.config()
// Criação do servidor
const server = express()
const port = process.env.PORT || 3000



// Configurações do servidor 
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(express.static('public'));
// Iniciar rotas
server.use('/api', routes);



server.listen(port, () => {
  console.log(`O servidor esta rodando na porta ${port} ou no link http://localhost:${port}`)
})
