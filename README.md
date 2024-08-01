# API RESTful para Catálogo de Livros

## Descrição

Este projeto é uma API RESTful simples para gerenciar um catálogo de livros. Ele foi desenvolvido com Node.js, Express e TypeScript, e utiliza o PostgreSQL como banco de dados. O principal objetivo deste projeto é o aprendizado e a prática de desenvolvimento de APIs, bem como a construção de um portfólio pessoal para conseguir um emprego na área de desenvolvimento web.

## Funcionalidades

A API possui as seguintes funcionalidades:

- **Create**: Adicionar um novo livro ao catálogo.
- **Read**: Recuperar informações de livros do catálogo.
- **Update**: Atualizar informações de um livro existente.
- **Delete**: Remover um livro do catálogo.
- **Autenticação**: Garantir que apenas usuários autenticados possam manipular os dados.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento para o backend.
- **Express**: Framework web para Node.js.
- **TypeScript**: Superconjunto de JavaScript que adiciona tipagem estática.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.
- **Prisma**: ORM para facilitar a interação com o banco de dados.
- **DBeaver**: Ferramenta de gerenciamento de banco de dados.

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado
- PostgreSQL instalado e rodando
- DBeaver (opcional, para gerenciamento visual do banco de dados)

### Passos para execução

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/api_restful.git
   cd api_restful
   
2. Instale as dependências:
   ```bash
    npm install
3. Configure as variáveis de ambiente:
   - Crie um arquivo .env na raiz do projeto e defina as variáveis de ambiente necessárias, como o URL do banco de dados PostgreSQL.
4. Migrate o banco de dados:
   ```bash
   npx prisma migrate dev
5. Inicie o servidor:
   ```bash
   npm run dev

   Rotas da API
GET /books : Recupera todos os livros do catálogo.
GET /book : Recupera um livro específico pelo Título.
POST /book: Adiciona um novo livro ao catálogo.
POST /manyBooks: Adiciona mais de um livro ao catálogo.
PUT /bookTitle: Atualiza o Título do livro.
PUT /bookAuthor: Atualiza o Autor do livro.
PUT /bookSynopsis: Atualiza a sinopse do livro.
DELETE /book: Remove um livro do catálogo pelo Título.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

## Licença
Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.
