import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class BookDTO {
    @IsString({ message: 'Titulo deve ser uma STRING' })
    @IsNotEmpty({ message: 'Título não pode estar vazio' })
    title: string;

    @IsString({ message: 'Autor deve ser uma STRING' })
    @IsNotEmpty({ message: 'Autor não pode estar vazio' })
    author: string;

    @IsString()
    @IsOptional()
    synopsis?: string;

    

    constructor(title: string, author: string, synopsis?: string) {
        this.title = title;
        this.author = author;
        this.synopsis = synopsis;
    }
}
