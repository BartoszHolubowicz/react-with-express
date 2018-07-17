import React, { Component } from 'react';
import './App.css';
import Book from './Book';

class App extends Component {
  constructor () {
    super();
    this.state = {
      response1: { books: [] },
      response2: { test: [] }
    }
  }
  componentDidMount() {
    this.callApi('books')
      .then(res => this.setState({ response1: res }))
      .catch(err => console.log(err));
    this.callApi('test')
      .then(res => this.setState({ response2: res }))
      .catch(err => console.log(err));
  }
  callApi = async (arg) => {
    const response = await fetch(`/api/${arg}`);
    const body = await response.json();
    if(response.status !== 200) throw Error(body.message);
    return body;
  }
  render() {
    const { response1, response2 } = this.state;
    return (
      <div className="App">
        <h1>Książki xD</h1>
        {response1.books.map(book => <Book bookTitle={book.title} bookAuthor={book.author} key={book._id} />)}
        <h1>muj stary poleca:</h1>
        <ul>
          {response2.test.map(co => <li key={co._id}>{co.wieszCo}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
