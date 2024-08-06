import React, { useState } from 'react';
import axios from 'axios';

const BookApp = () => {
    const [books, setBooks] = useState([]);
    const [searchTitle, setSearchTitle] = useState('');

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/book?title=${encodeURIComponent(searchTitle)}`);
            setBooks(response.data);
        } catch (error) {
            console.error('Erro ao buscar livro pelo título:', error);
            setBooks([]);
        }
    };

    return (
        <div id="homepage">
            <h1>Procure um livro no nosso sistema!</h1>
            <input
                type="text"
                placeholder="Digite o título do livro"
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <strong>{book.title}</strong> - {book.author}
                        {book.synopsis && <p><em>Sinopse: {book.synopsis}</em></p>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookApp;

