import React, { Component } from 'react';
import './Book.css';

class Book extends Component {
  render() {
    const { bookTitle, bookAuthor } = this.props;
    return (
      <div className="book">
        <span className="title">{bookTitle}</span><br/>
        <span className="author">Author: {bookAuthor}</span>
      </div>
    );
  }
}

export default Book;
