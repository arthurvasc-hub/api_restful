import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma"
// Pasta para serviços do prisma.

// Listar todos os livros do DB
export const getAllBooks = async () => {
// Paginação FAKE //
let page = 0; // Paginação de uma Query OU requisição
let perPage = 2
let skip = page * perPage

    const allBooks = await prisma.books.findMany({
        skip: skip,
        take: perPage,
        select: {
            id: true,
            title: true,
            author: true
        }});
        return allBooks
};
// Listar um livro do DB pelo título
export const getByTitle = async (title: string) => {
    const oneBook = await prisma.books.findUnique({
        where: { title },
        select:{id: true, author: true, title: true}
    }) 
    return oneBook;
} 
// Criação de um novo book (post)
export const createNewBook = async (data: Prisma.BooksCreateInput) =>{
    try {
        const book = await prisma.books.create({ data })
        return book;
    } catch(error){
        return false;
        }};

export const createManyBooks = async (books: Prisma.BooksCreateInput[]) => {
    try {
        const manyBooks = await prisma.books.createMany({data: books, skipDuplicates: true })
        return manyBooks
    } catch (error){
        return false
    }};
