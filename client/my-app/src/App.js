import React from 'react';
import axios from 'axios';

class BookApp extends React.Component {
    state = {
        books: [],
        searchTitle: ''
    };

    handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/book?title=${encodeURIComponent(this.state.searchTitle)}`);
            this.setState({ books: response.data });
        } catch (error) {
            console.error('Erro ao buscar livro pelo título:', error);
            this.setState({ books: [] });
        }
    };

    render() {
        return (
            <div id="homepage">
                <h1>Procure um livro no nosso sistema!</h1>
                <input
                    type="text"
                    placeholder="Digite o título do livro"
                    value={this.state.searchTitle}
                    onChange={(e) => this.setState({ searchTitle: e.target.value })}
                />
                <button onClick={this.handleSearch}>Buscar</button>
                <ul>
                    {this.state.books.map(book => (
                        <li key={book.id}>
                            <strong>{book.title}</strong> - {book.author}
                            {book.synopsis && <p><em>Sinopse: {book.synopsis}</em></p>}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default BookApp;

