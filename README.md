# Livros REST API

Uma API RESTful para gerenciamento de livros, construída com Node.js, TypeScript, Express, e Prisma.

## Tecnologias Utilizadas

- **Backend**: Node.js, TypeScript, Express
- **Banco de Dados**: PostgreSQL, Prisma
- **Validação**: Zod

## Funcionalidades

- **Busca de Livros**: Permite buscar livros pelo título.
- **Criação de Livros**: Adiciona novos livros ao banco de dados.
- **Atualização de Livros**: Atualiza informações de livros existentes.
- **Deleção de Livros**: Remove livros do banco de dados.

## Instalação e Configuração

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [PostgreSQL](https://www.postgresql.org/) (para o banco de dados)

### Configuração do Backend

1. **Clone o repositório**

   ```bash
   git clone https://github.com/arthurvasc-hub/api_restful
   cd api_restful
2. **Instale as dependências**
   ```bash
   cd server
   npm install
3. **Configure as variáveis de ambiente**
   - Crie um arquivo .env na pasta server com a configuração do banco de dados:
     ```bash
     DATABASE_URL=postgresql://user:password@localhost:5432/database_name
     PORT=3000
4. **Execute as migrações do Prisma**
   ```bash
   npx prisma migrate dev
5. **Inicie o servidor**
   ```bash
   npm run dev
 O servidor estará rodando em http://localhost:3000.


**Estrutura do Projeto**

*server/*
src/: Código fonte do backend
validation/: Contém as configurações zod para validação de dados.
libs/: Configuração do Prisma Client.
routes/: Definições das rotas da API.
services/: Lógica de interação com o banco de dados.
prisma/: Configuração do Prisma e esquema do banco de dados.
index.ts: Arquivo principal para iniciar o servidor.

   
**USO**

1. Buscar um livro: Envie um GET request para /api/book com a query do título desejado.
2. Adicionar um livro: Envie um POST request para /api/book com o corpo da requisição no formato JSON:
   ```bash
   {
     "title": "Título do Livro",
     "author": "Autor do Livro",
     "synopsis": "Sinopse do Livro"
   }
3. Atualizar um livro: Envie um PUT request para /api/book/:id com os dados atualizados.
4. Deletar um livro: Envie um DELETE request para /api/book/:id para remover um livro pelo ID.

**Contribuindo**
Sinta-se à vontade para abrir issues e pull requests para melhorias e correções. Seu feedback é muito bem-vindo!

**Licença**
Este projeto está licenciado sob a MIT License.

**Contato**
Se você tiver alguma dúvida, pode entrar em contato comigo através do email: arthurvasc2@gmail.com






