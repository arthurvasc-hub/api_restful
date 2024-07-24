import { prisma } from "../libs/prisma"
// Pasta para serviços do prisma.


type CreateBookProps = {
    title: string,
    author: string,
    synopsis: string | undefined
}

// Criação de um novo book (post)
export const createNewBook = async ({title, author, synopsis}: CreateBookProps) =>{
    const book = await prisma.books.create({
        data: {
            title,
            author,
            synopsis
        }
    })
return book;
}