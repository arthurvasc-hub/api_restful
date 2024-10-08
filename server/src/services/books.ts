import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma"
// Pasta para serviços do prisma.

// Listar todos os livros do DB
export const getAllBooks = async () => {

    const allBooks = await prisma.books.findMany({
        select: {
            id: true,
            title: true,
            author: true
        }});
        return allBooks
};
// Listar livros do DB pelo título
export const getBooksByTitle = async (title: string) => {
    try {
        const books = await prisma.books.findMany({
        where: {
                title: {
                contains: title,
                mode: 'insensitive' } // Ignora maiúsculas/minúsculas
    },  select: {
                id: true,
                title: true,
                author: true,
                synopsis: true, 
    }});
        return books;
    } catch (error) {
        return false; 
    }
};
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
    return false
}};
    // Deletar um livro do BD 
export const deleteBook = async (id: number) => {
    try {
        const deletedBook = await prisma.books.delete({
            where: { id }
        });
        return deletedBook;
    } catch (error) {
        return false;
    }
}