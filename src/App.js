import React, { Component } from 'react';
import './App.css';
import Book from './Book/Book'
import {Container, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './assets/icons/add.png';

class App extends Component {

    state= {
        books: [
            {id: 1, title:"Harry Potter", author:"J.K Rowling"},
            {id: 2, title:"Dream Magic", author:"Penn & Teller"},
            {id: 3, title:"The Woman in White", author:"Wilkie Collins"},
            {id: 4, title:" Little Women", author:"Louisa M. Alcott"},
            {id: 5, title:"Anna Karenina", author:"Leo Tolstoy"},
            {id: 6, title:"Huckleberry Finn", author:"Mark Twain"},
            {id: 7, title:" Little Women", author:"Louisa M. Alcott"},
            {id: 8, title:"Anna Karenina", author:"Leo Tolstoy"},
            {id: 9, title:"Huckleberry Finn", author:"Mark Twain"}]
    }

    selectBookHandler = (newBook) =>{
        this.setState({
            books: [
                {id: 1, title: newBook, author:"J.K Rowling"},
                {id: 2, title:"Dream Magic", author:"Penn & Teller"},
                {id: 3, title:"The Woman in White", author:"Wilkie Collins"},
                {id: 4, title:" Little Women", author:"Louisa M. Alcott"},
                {id: 5, title:"Anna Karenina", author:"Leo Tolstoy"},
                {id: 6, title:"Huckleberry Finn", author:"Mark Twain"},
                {id: 7, title:" Little Women", author:"Louisa M. Alcott"},
                {id: 8, title:"Anna Karenina", author:"Leo Tolstoy"},
                {id: 9, title:"Huckleberry Finn", author:"Mark Twain"}]
        });
    }

    changeBooknameHandler = (event) => {
        this.setState({
            books: [
                {id: 1, title: 'Harry Potter' , author:"J.K Rowling"},
                {id: 2, title:"Dream Magic", author:"Penn & Teller"},
                {id: 3, title: event.target.value, author:"Wilkie Collins"},
                {id: 4, title:" Little Women", author:"Louisa M. Alcott"},
                {id: 5, title:"Anna Karenina", author:"Leo Tolstoy"},
                {id: 6, title:"Huckleberry Finn", author:"Mark Twain"},
                {id: 7, title:" Little Women", author:"Louisa M. Alcott"},
                {id: 8, title:"Anna Karenina", author:"Leo Tolstoy"},
                {id: 9, title:"Huckleberry Finn", author:"Mark Twain"}]
        });
    }

    searchPageHandler(){
        alert('Open Search Page');
    }
  render() {
    return (
      <div className="App">
          <Container fluid>
            <h1 className="Myreads Divider">MyReads</h1>
          </Container>
          <Container fluid className="CurrentHeading">
              <h2 className="Currently Ruler">Currently Reading</h2>
          </Container>

          <Container fluid>
              <Row>
                  <Col xs={6} md={4}>
                      <Book
                          id={this.state.books[0].id}
                          title={this.state.books[0].title}
                          author={this.state.books[0].author}
                          click = {this.selectBookHandler.bind(this, 'Lethal White')}  />
                  </Col>
                  <Col xs={6} md={4}>
                      <Book
                          id={this.state.books[1].id}
                          title={this.state.books[1].title}
                          author={this.state.books[1].author}
                          click = {this.selectBookHandler.bind(this, 'Lethal White')}  />
                  </Col>
                  <Col xs={6} md={4}>
                      <Book
                          id={this.state.books[2].id}
                          title={this.state.books[2].title}
                          author={this.state.books[2].author}
                          click = {this.selectBookHandler.bind(this, 'Lethal White')}
                          changed = {this.changeBooknameHandler}/>
                  </Col>
              </Row>
          </Container>
          <Container fluid className="CurrentHeading">
              <h2 className="Currently Ruler">Want to Read</h2>
          </Container>
          <Container fluid>
              <Row>
                  <Col xs={6} md={4}>
                      <Book
                          id={this.state.books[3].id}
                          title={this.state.books[3].title}
                          author={this.state.books[3].author}
                          click = {this.selectBookHandler.bind(this, 'Lethal White')}  />
                  </Col>
                  <Col xs={6} md={4}>
                      <Book
                          id={this.state.books[4].id}
                          title={this.state.books[4].title}
                          author={this.state.books[4].author}
                          click = {this.selectBookHandler.bind(this, 'Lethal White')}  />
                  </Col>
                  <Col xs={6} md={4}>
                      <Book
                          id={this.state.books[5].id}
                          title={this.state.books[5].title}
                          author={this.state.books[5].author}
                          click = {this.selectBookHandler.bind(this, 'Lethal White')}  />
                  </Col>
              </Row>
          </Container>
          <Container fluid className="CurrentHeading">
              <h2 className="Currently Ruler">Read</h2>
          </Container>
          <Container fluid>
              <Row>
                  <Col xs={6} md={4}>
                      <Book
                          id={this.state.books[6].id}
                          title={this.state.books[6].title}
                          author={this.state.books[6].author}
                          click = {this.selectBookHandler.bind(this, 'Lethal White')}  />
                  </Col>
                  <Col xs={6} md={4}>
                      <Book
                          id={this.state.books[7].id}
                          title={this.state.books[7].title}
                          author={this.state.books[7].author}
                          click = {this.selectBookHandler.bind(this, 'Lethal White')}  />
                  </Col>
                  <Col xs={6} md={4}>
                      <Book
                          id={this.state.books[8].id}
                          title={this.state.books[8].title}
                          author={this.state.books[8].author}
                          click = {this.selectBookHandler.bind(this, 'Lethal White')}  />
                  </Col>
              </Row>
          </Container>
          <div className="OpenSearch">
                <button onClick = {this.searchPageHandler}> <img src={Add} alt="img" /></button>
          </div>
          <button onClick={ () => this.selectBookHandler('Fantastic Beast')}>Select</button>
      </div>
    );
     // return React.createElement('div',{className: App},React.createElement('h1',null,'Myreads'), React.createElement('p',null,'Currently Reading'));
  }
}

export default App;
