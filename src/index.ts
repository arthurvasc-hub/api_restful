import express, { Router } from "express";
import * as dotenv from 'dotenv'
import router from "./routes/routes"

dotenv.config()
// Criação do servidor
const server = express()
const port = process.env.PORT || 3000

// Configurações do servidor 
server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use('/', router)



server.listen(port, () => {
  console.log(`O servidor esta rodando na porta ${port} ou no link http://localhost:${port}`)
})
