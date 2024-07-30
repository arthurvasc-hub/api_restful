import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma"
// Pasta para serviços do prisma.

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
