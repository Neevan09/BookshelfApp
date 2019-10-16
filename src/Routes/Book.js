import React, {Component} from 'react';

class Book extends Component{
    render() {
       // console.log("Book List: " + this.props.book);
        const displayURL = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : '';
        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${displayURL}")` }}></div>
                    <div className="book-shelf-changer">
                        <select
                            onChange={(event) => this.props.moveBooks(
                            this.props.book, event.target.value,
                                console.log(event.target.value)
                        )}
                            value={this.props.book.shelf}
                        >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors"> {this.props.book.authors}</div>
            </div>
        );
    }
}
// const book = (props) => {
//     return(
//
//
//     );
   /* return <div className="Book">
        <p> Book : {props.id}</p>
        <p> Title: {props.title} </p>
        <p onClick = {props.click} className="Author"> Author: {props.author} </p>
        <input type="text" onChange={props.changed} />
    </div>;*/
//};


export default Book;
