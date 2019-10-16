import React, {Component} from 'react'
import * as BookAPI from '../utils/BooksAPI';
import Book from "./Book";
import { Link } from 'react-router-dom'


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            searchResults: []
        }
    }

    searchInput = (query) => {
        this.setState({
            query: query
        })
        this.searchedBooks(query);
    }

    searchedBooks = (query) =>{
        if(query){
            BookAPI.search(query)
                .then((searchResults) => {
                    if(searchResults.error){
                        this.setState({searchResults:[]});
                    }
                    else{
                        this.setState({searchResults: searchResults})
                    }
                })
        }
        else{
            this.setState({searchResults:[]});
        }
    }
    render() {

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to="/"
                        className="close-search">
                        Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => {
                                this.searchInput(event.target.value)
                            }}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.searchResults.map(searchResult => {
                                let shelf =  "none";

                                this.props.books.map(book => (
                                    book.id === searchResult.id ? book.shelf : ''
                                ))

                                return (
                                    <li key={searchResult.id}>
                                        <Book
                                            book={searchResult}
                                            moveBooks={this.props.moveBooks}
                                            currentBook={shelf}
                                        />
                                    </li>
                                );
                            })
                        }
                    </ol>
                </div>
            </div>
        );
    }
}

export default Search;
