# Livros REST API

Uma API RESTful para gerenciamento de livros, construída com Node.js, TypeScript, Express, e Prisma. O projeto inclui um frontend em React para a busca de livros pelo título.

## Tecnologias Utilizadas

- **Frontend**: React, HTML, CSS
- **Backend**: Node.js, TypeScript, Express
- **Banco de Dados**: PostgreSQL, Prisma
- **Validação**: ZOD

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

 ### Configuração do Frontend
 
1. **Instale as dependências**
   ```bash
   cd client
   npm install
2. **Inicie o servidor de desenvolvimento**
   ```bash
   npm start
O frontend estará acessível em http://localhost:3001.

**Estrutura do Projeto**

*server/*
src/: Código fonte do backend
validation/: Contém as configurações zod para validação de dados.
libs/: Configuração do Prisma Client.
routes/: Definições das rotas da API.
services/: Lógica de interação com o banco de dados.
prisma/: Configuração do Prisma e esquema do banco de dados.
index.ts: Arquivo principal para iniciar o servidor.

*client/*
public/: Arquivos estáticos e HTML.
src/: Código fonte do frontend
App.js: Componente principal do React.
index.js: Ponto de entrada do React.
styles.css: Estilos CSS.
   
**USO**

1. Buscar um livro: No frontend, digite o título do livro na caixa de pesquisa e clique em "Buscar".
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
Se você tiver alguma dúvida, pode entrar em contato comigo através do arthurvasc2@gmail.com






