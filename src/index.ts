import express, { Router } from "express";
import * as dotenv from 'dotenv'
import routes from "./routes/api"
import bodyParser from "body-parser";

dotenv.config()
// Criação do servidor
const server = express()
const port = process.env.PORT || 3000

// Configurações do servidor 
server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use(bodyParser.json())
// Iniciar rotas
server.use('/api', routes)



server.listen(port, () => {
  console.log(`O servidor esta rodando na porta ${port} ou no link http://localhost:${port}`)
})
