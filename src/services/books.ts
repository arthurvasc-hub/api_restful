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
// Criação de um novo book através de upsert (Caso eu tente criar um livro já existente, ele vai me retorna-lo, caso não exista, ele cria.)
export const createNewBook = async (data: Prisma.BooksCreateInput) =>{
    try {
        const book = await prisma.books.upsert({ 
        where: {
            title: data.title
        }, update: {},
        create: data
        })
        return book;
    } catch(error){
        return false;
        }};
// Criação de vários books (post)
export const createManyBooks = async (books: Prisma.BooksCreateInput[]) => {
    try {
        const manyBooks = await prisma.books.createMany({
            data: books, 
            skipDuplicates: true 
        });
        return manyBooks
    } catch (error){
        return false
    }};

    // Atualizar pelo ID do livro
export const updateBook = async (id: number, data: Prisma.BooksUpdateInput ) => {
   try {
    const updatedBook = await prisma.books.update({
        where: { id },
        data: data
    });
    return updatedBook;
} catch (error){
    console.log("Falha ao atualizar o livro", error)
    throw error
    }
};
    // Deletar um livro do BD 
export const deleteBook = async (id: number) => {
    try {
        const deletedBook = await prisma.books.delete({
            where: { id }
        });
        return deletedBook;
    } catch (error) {
        console.error(error);
        return null;
    }
}