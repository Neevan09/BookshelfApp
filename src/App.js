import React, { Component } from 'react';
import './App.css';
import Book from './Book/Book'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Welcome to Bookshelf app</h1>
          <p>Currently Reading</p>
          <Book />
      </div>
    );
  }
}

export default App;
