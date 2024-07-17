import logo from './logo.svg';
import './App.css';
import Person from './Component/Person'
import book from './Book/book'; // custom import for book from another folder
import React, { Component } from 'react'; // custom import for writing class component with 'Component'

class App extends React.Component {
  state = {
    books: book,
    showBooks: true,
  }

  // function for toggle
  toggleBooks = (event) => {
    console.log("clicked", event.target);
    this.setState({ showBooks: !this.state.showBooks });
  }

  // function for delete book item with filter method
  deleteBook = (event, index) => {
    console.log(event.target, index);
    const books = this.state.books.filter((_, i) => i !== index); // filter out the book at the specified index
    this.setState({ books }); // update the state with the new array
  };
    //   //function for delete book item: 
  //   // deleteBook = (event,index) => {
  //   //   //here index is the book.id , which start from 1, but array start from 0. so index-1.
  //   //   //if book.id start form 0, then index = index
      
  //   //   console.log(event.target, index);
  //   //   const books = [...this.state.books]; // create a copy of the books array
  //   //   books.splice(index, 1); // remove the item at the specified index 
  //   //   this.setState({ books }); // update the state with the new array
  //   // }

  // function for update book item
  updateBook = (index, updatedBook) => { //index: receive from map function index, and updatedBook: receive from Person component
    
    const books = [...this.state.books]; // create a copy of the books array
    books[index] = updatedBook; // update the book at the specified index
    this.setState({ books }); // update the state with the new array
  };

  render() {
    //     // const showBooks = this.state.books.map(book => <li key={book.id}>{book.name}</li>); //show books from state with map fn. 
    const showBooks = this.state.books.map((book, index) => (
      <Person
        key={book.id}
        toggleBooks={(event) => this.toggleBooks(event, book.id)}
        deleteBook={(event) => this.deleteBook(event, index)}
        updateBook={(getTheBookFromPerson) => this.updateBook(index, getTheBookFromPerson)} //here {(update)=>here this updateBook arrow function }
        book={book}
        book_name={book.name}
        book_author={book.author}
      >
        List of Book
      </Person>
    ));

    return (
      <div className="App">
        <h1>Hello World</h1>
        {showBooks}
      </div>
    );
  }
}

export default App;


