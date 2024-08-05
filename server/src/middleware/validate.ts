import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";
import { BookDTO } from "../dtos/BookDTO";
import { queryObjects } from "v8";

// Middleware para validar e transformar dados de entrada
export const validateBody = async (req: Request, res: Response, next: NextFunction) => {
    // Converte o objeto plain para uma instância da classe BookDTO
     const bookDTO = plainToInstance(BookDTO, req.body);
     // Valida a instância criada
     const errors = await validate(bookDTO);
     if (errors.length > 0) {
         return res.status(400).json({ errors });
     }
 
     // Substitui o corpo da requisição pelo DTO validado
     req.body = bookDTO;
     next();
 };

 export function validateQuery<T extends object>(dto: new () => T) {
    return async (req: Request, res: Response, next: NextFunction) => {
        // Converte a query string para uma instância do DTO
        const queryObject = plainToInstance(dto, req.query);

        try {
            const errors = await validate(queryObject);
            if (errors.length > 0) {
                const errorMessages = errors
                    .map(error => Object.values(error.constraints || {}).join(', '))
                    .join('; ');
                return res.status(400).json({ errors: errorMessages });
            }
            // Substitui a query pela instância validada do DTO
            req.query = queryObject as unknown as Request['query']; // Cast to fix the type issue
            next();
        } catch (error) {
            return res.status(500).json({ error: 'Erro na validação da query.' });
        }
    };
}