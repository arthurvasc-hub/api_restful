import z from 'zod'

export const bookSchema = z.object({
    title: z.string().min(2),
    author: z.string().min(2),
    synopsis: z.string().optional()
});

export const titleSchema = z.object({
    title: z.string().min(2)
});

