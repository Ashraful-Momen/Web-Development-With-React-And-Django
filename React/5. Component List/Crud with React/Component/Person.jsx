import React, { useState } from 'react';

const Person = (props) => { //props: receive from App a single book with App map function(index, book)=> <Person /> . 
  const [isEditing, setIsEditing] = useState(false);
  const [bookName, setBookName] = useState(props.book_name); //in App map fn render each book with Person component as single item .
  const [bookAuthor, setBookAuthor] = useState(props.book_author);

  const handleUpdate = () => {
    const updatedBook = {
      ...props.book,
      name: bookName,
      author: bookAuthor,
    };
    props.updateBook(updatedBook);
    setIsEditing(false); // Close the input fields after updating
  };

  const style = {
    color: props.book_name ? 'green' : 'black',
    backgroundColor: props.book_author ? 'smokey' : 'white',
  };

  return (
    <div className='bg-danger' style={style}>
      {isEditing ? (   //isEditing == true ? true : false
        <>
          <input
            type="text"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            placeholder="Update Book Name"
          />
          <input
            type="text"
            value={bookAuthor}
            onChange={(e) => setBookAuthor(e.target.value)}
            placeholder="Update Book Author"
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <p>
          Name: {props.book_name} | Author: {props.book_author} | {props.children}
        </p>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Cancel" : "Update"}
      </button>
      <button onClick={props.deleteBook}>Delete</button>
    </div>
  );
}

export default Person;


// ==================================================================================================
// import React, { useState } from 'react';

// const Person = (props) => {
//   const [bookName, setBookName] = useState(props.book_name);
//   const [bookAuthor, setBookAuthor] = useState(props.book_author);

//   const handleUpdate = () => {
//     const updatedBook = {
//       ...props.book,
//       name: bookName,
//       author: bookAuthor,
//     };
//     props.updateBook(updatedBook);
//   };

//   const style = {
//     color: props.book_name ? 'green' : 'black',
//     backgroundColor: props.book_author ? 'smokey' : 'white',
//   };

//   return (
//     <div className='bg-danger' style={style}>
//       <p>
//         Name: {props.book_name} | Author: {props.book_author} | {props.children}
//       </p>
//       <input
//         type="text"
//         value={bookName}
//         onChange={(e) => setBookName(e.target.value)}
//         placeholder="Update Book Name"
//       />
//       <input
//         type="text"
//         value={bookAuthor}
//         onChange={(e) => setBookAuthor(e.target.value)}
//         placeholder="Update Book Author"
//       />
//       <button onClick={handleUpdate}>Update</button>
//       <button onClick={props.deleteBook}>Delete</button>
//     </div>
//   );
// }

// export default Person;



// ==================================================================================================

// import React from 'react'

// const Person = (props) => {
//     // console.log(props)
//     const style = {
//         color: props.book_name ? 'green' : 'black',
//         backgroundColor: props.book_author  ? 'smokey' : 'white'

//     }
//   return (
//     // use toggle function
//     // <div className='bg-danger' style={style} onClick={props.toggleBooks}>Name : {props.book_name} | Age : {props.book_author} | {props.children}</div>
//     // use delete function 
//     // <div className='bg-danger' style={style} onClick={props.deleteBook} >Name : {props.book_name} | Age : {props.book_author} | {props.children}</div>
//     //use update function
//     <div className='bg-danger' style={style} onClick={props.updateBook} >Name : {props.book_name} | Age : {props.book_author} | {props.children}</div>
//   )
// }

// export default Person 