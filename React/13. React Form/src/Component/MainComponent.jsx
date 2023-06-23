import React, { Component } from 'react';
import Books from '../assets/Books'; //state data
import BookList from './lists/BookList' //representation mapping component
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Error from '../pages/Error';

import { BookDetail } from './representational/BookDetail';
import  NewBook  from './representational/NewBook';

class MainComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: Books, //state variable books 
      selectedBook: null,
    }

//     Uncaught runtime errors:----------------------------------------------------------
// 
// ERROR
// Cannot read properties of undefined (reading 'state')
// TypeError: Cannot read properties of undefined (reading 'state')
//     at selectedBookHandeler 
    


    // *****if use any normal function in react and pass into other array function then getting error ....*** The main cause is => we bin() with the arrow function not normal function...  best option use the arrow function every were .... 
    //*****if we use normal handeler function and next compoent use arrow function for passing data then we have to use : // this.selectedBookHandeler = this.selectedBookHandeler.bind(this);
  }
 
    selectedBookHandeler =(bookId)=>{
    // console.log(bookId);
    const book = this.state.books.filter((book)=>book.id ===bookId)[0]; // if book.id match with bookId then return a array in index [0].
    this.setState({
      selectedBook:book,
    });

  }




  render() {

    let showBook = <BookList 
                            books={this.state.books}
                            selectedBookHandeler={this.selectedBookHandeler} />;
                         
    return (

      <div className="App">
        <nav className="nav-bar">
          <ul>
            <li>
              <NavLink to="/books">Books</NavLink>
            </li>
            <li>
              <NavLink to="/new-book">New Book</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
              <Route path="/*" element={<Error/>}>
              
              </Route>
              <Route path="/" element={<Navigate to='/books'/>}>
                Home
              </Route>
              <Route path="/books" element={showBook}>
                Books
              </Route>
              <Route path="/new-book" element={<NewBook/>}>
                New Book
              </Route>
              <Route path="/book/:id" element={<BookDetail book={this.state.selectedBook}/>}>
                  
              </Route>
        </Routes>
        
        

      </div>

    );
  };
}

export default MainComponent;