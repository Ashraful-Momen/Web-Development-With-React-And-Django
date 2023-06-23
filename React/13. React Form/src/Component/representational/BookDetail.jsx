
// ------------------------------------------------------------------------------------
// The error you are encountering in the BookDetail component is due to accessing properties on a null object.
//  Specifically, the error message indicates that book is null when trying to access the bookName property.


import React from 'react';

export const BookDetail = ({ book }) => {
  return book ? (
       
        <div>
          <h3>{book.bookName}</h3>
          <p>Writer: {book.writer}</p>
          <p>{book.details}</p>
        </div>
  ): <div>Emty div</div>
};
 

// ------------------------------------------------
// import React from 'react';

// export const BookDetail = ({ book }) => {
//   return book && (
       
//         <div>
//           <h3>{book.bookName}</h3>
//           <p>Writer: {book.writer}</p>
//         </div>
//   )
// };