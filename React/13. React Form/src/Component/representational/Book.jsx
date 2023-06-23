import React from 'react';
import '../../StyleSheet/Book.css';
import { Link } from 'react-router-dom';

function Book ({book,selectedBookHandeler}) {  // destructing book from props ... 

 
    return book && (
        
        <Link to={"/book/"+book.id} style={{textDecoration:'none', color:'black'}}>
            <div className="Books" onClick={()=>selectedBookHandeler(book.id)}> 
                
                <h3 >BookName: {book.bookName}</h3>
                <b>Writer: {book.writer}</b>
            
           
            </div>
        </Link>
    );

}


export default Book;

// ------------------------------------------------------
// if selectedBook is null then can't show book.write , book.BookName that's why we pass 
// if book exit then show book => 1st ways:
// return book && (
//     <div className="Books">
        
//         <h3 >BookName: {book.bookName}</h3>
//         <b>Writer: {book.writer}</b>
        
       
//     </div>
// );

// if selectedBook is null then can't show book.write , book.BookName that's why we pass 
// if book exit then show book => 2nd ways:

// return book ? (
//     <div className="Books">
        
//         <h3 >BookName: {book.bookName}</h3>
//         <b>Writer: {book.writer}</b>
        
       
//     </div>
// ) : <div>Empty Book</div>

// Both are the Same


