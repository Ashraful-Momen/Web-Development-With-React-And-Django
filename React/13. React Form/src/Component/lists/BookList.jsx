// //call representational function to show data on display as Book component ...
import React ,{Component}from 'react';
import Book from '../representational/Book';

class BookList extends Component{
  render(){
    
    return (this.props.books.map((book) => (
      <Book
        book={book}
        key={book.id}
        selectedBookHandeler={this.props.selectedBookHandeler}
      />
    )))
  }

}

export default BookList;
