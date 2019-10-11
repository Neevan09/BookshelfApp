import React, { Component } from 'react';
import './App.css';
import Book from './Book/Book'

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //       <h1>MyReads</h1>
    //       <p>Currently Reading</p>
    //       <Book />
    //   </div>
    // );

      return React.createElement('div',{className: App},React.createElement('h1',null,'Myreads'), React.createElement('p',null,'Currently Reading'));
  }
}

export default App;
