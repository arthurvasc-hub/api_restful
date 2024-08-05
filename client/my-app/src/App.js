import React from 'react'
import axios from 'axios';

class BookApp extends React.Component {
    state = {
        books: [],
        searchTitle: ''
    };

    componentDidMount() {
        this.fetchBooks();
    }

    fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/books');
            this.setState({ books: response.data.result });
        } catch (error) {
            console.error('Erro ao buscar livros:', error);
        }
    };

    handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/book?title=${this.state.searchTitle}`);
            this.setState({ books: response.data ? [response.data] : [] });
        } catch (error) {
            console.error('Erro ao buscar livro pelo título:', error);
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
                            {book.title} - {book.author}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default BookApp;
