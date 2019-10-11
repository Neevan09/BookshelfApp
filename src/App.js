import React, { Component } from 'react';
import './App.css';
import Book from './Book/Book'

class App extends Component {

    state= {
        books: [
            {id: 1, title:"Harry Potter", author:"J.K Rowling"},
            {id: 2, title:"Dream Magic", author:"Penn & Teller"} ]
    }

    selectBookHandler= () =>{
        this.setState({
            books: [
                {id: 1, title:"Fantastic Beast", author:"J.K Rowling"},
                {id: 2, title:"Dream Magic", author:"Penn & Teller"} ]
        });
    }
  render() {
    return (
      <div className="App">
          <h1>MyReads</h1>
          <p>Currently Reading</p>
          <Book id={this.state.books[0].id} title={this.state.books[0].title} author={this.state.books[0].author} />
          <Book id={this.state.books[1].id} title={this.state.books[1].title} author={this.state.books[1].author} />
          <button onClick={this.selectBookHandler}>Select</button>
      </div>
    );
     // return React.createElement('div',{className: App},React.createElement('h1',null,'Myreads'), React.createElement('p',null,'Currently Reading'));
  }
}

export default App;
