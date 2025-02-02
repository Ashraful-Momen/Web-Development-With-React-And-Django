#useReducer: 
------------
// send the data to the global state . 




//main conponent_________________________________normal crud________________________

import React, {useState} from "react" ;

const booksData = [
{id:1, name: "Ashraful"},
{id:2, name:"momen"}
]; 

const Modal = (modalText) => {
   return  <p>{modalText}</p> ; 
}


const UserReducer = () => {

    const [books, setBooks] = useState(booksData); 
    
    //set book name : 
    const [bookName,setBookName] = useState(""); 
    
    //for madal use 2 state: 
    const [isModalOpoen,setIsModalOpen] = useState(false);
    const [modalTest,setModalText] = useState("");
    
    const handleSubmit = (e) => {
    
        e.prevantDefault();
        alert(bookName); //when form submit those value set in setBookName to bookName varibale . 
        
        setBooks( (prevState) => {
            
            const newBook = {   id:new Date().getTime().toString(), 
                                name = bookName
                            }
                            
            return [...prevState,newbook] // append the new book to the prevstate.
        });
        
        //after add new book show the modal text : 
        setIsModalOpen(true);
        setModalText("Book is Added!")
        
    };
    
    return (
            <div>
                <h3>Book List </h3> 
                
                //Add Book Name : __________________________
                <form onSubmit = {handleSubmit}>
                    <input type= "text" 
                           value= {bookNmae}
                           onChange = {(e) => setBookName(e.target.value);}
                    />
                    <button type="submit">Add Book</button>
                </form>
                
                //if isModalOplen true then show the modal text : __________________________-
                { isModalOpen && <Modal modalText = {modalText}/> }
                
                //show the books :__________________________
                {books.map( (book) => {
                      const {id,name} = book;  
                        return <li key ={id}> {name} </li>;
                        
                    };
                
                )};
    
            </div>
    );     

}


export default UseReducer; 

------------------------------------------------------------------------------------------------------------------------------



======================================================== Main part 1 start from here : crud with reducer ============================================

import React, {useState,useReducer} from "react" ;

const booksData = [
{id:1, name: "Ashraful"},
{id:2, name:"momen"}
]; 

const Modal = (modalText) => {
   return  <p>{modalText}</p> ; 
}


//2. here receive the action , payload from the dispatch . 
const reducer = (state, action) => {

    //in action received => (action.type , action.payload )received from the dispatch . 
    //and state received =>   //1. books : booksData , //get all the books . 
    
    if(action.type === "ADD")
        {
            const allBooks = [...state.books, action.payload  ]   //after =>   dispatch({type: "ADD", payload : newBook});  => here, action.payload = newbook.
            
            return {
                ...state, //return full state 
                books : allBooks, //return also the new books. 
                isModalOpen : true, 
                modelTest: "book is added ", 
                
            }
        
        }
    if(action.type === "Remove")
        {
        
            const filterBooks = [...state.books].filter( book => book.id !== action.payload) // we pass the id from dispatch , id = action.payload
            
            return {
                ..state,
                books:filterBooks,
                isModalOpen:true,
                modalText: "Book is removed " ,
            }
        
        
        }

    return state;
}


const UserReducer = () => {
    
    //const [] = useReducer(reducer,initialState); 
    
    //1. here dispatch the reducer action + payload. 
    const [bookState,dispatch] = useReducer ( reducer, {
        
        //declear the multiple state : 
        books : booksData , //get all the books . 
        isModalOpen : false,  // prevModal state.  
        modalText : "", // prevModalText. 
        
    });
   
    
    //set book name : 
    const [bookName,setBookName] = useState(""); 
    
    
    
    //reducer
    
    const handleSubmit = (e) => {
    
        e.prevantDefault();
        alert(bookName); //when form submit those value set in setBookName to bookName varibale . 
        
        setBooks( (prevState) => {
            
            //after form submit set the new book : __________
            const newBook = {   id:new Date().getTime().toString(), 
                                name = bookName
                            }
                            
            //after save the new book then dispatch to the reducer (call the reducer function ): 
            dispatch({type: "ADD", payload : newBook}); 
            
            //after click submit then clear the input fileds : 
            setBookName("");
            
                            
            
        });
        
    };
    
    //remove book: 
    
    const removeBook = (id) => {
        alert(id); //check the id
        
        dispatch(type:"REMOVE",payload:id)
    }
    
    
    return (
            <div>
                <h3>Book List </h3> 
                
                //Add Book Name : __________________________
                <form onSubmit = {handleSubmit}>
                    <input type= "text" 
                           value= {bookNmae}
                           onChange = {(e) => setBookName(e.target.value);}
                    />
                    <button type="submit">Add Book</button>
                </form>
                
                //if isModalOplen true then show the modal text : __________________________
                { bookState.isModalOpen && <Modal modalText = {bookState.modalText}/> }      // here 'bookState' get from reducer 1.//
                
                //show the books :__________________________
                {bookState.books.map( (book) => {       // here 'bookState' get from reducer 1.//
                      const {id,name} = book;  
                        return (
                            <li key ={id}> 
                            {name} <button onClick={()=>removeBook(id)}> Remove </button>
                            </li>
                        );
                        
                    };
                
                )};
    
            </div>
    );     

}


export default UseReducer; 




======================================================== Main part 2 : just replace reduce code in another file, and use initail state.   ============================================

import React, {useState,useReducer} from "react" ;

import {reducer} from "./reducer_file_loacaton";

const booksData = [
{id:1, name: "Ashraful"},
{id:2, name:"momen"}
]; 

const Modal = (modalText) => {
   return  <p>{modalText}</p> ; 
}

const initialState = {
        
        //declear the multiple state : 
        books : booksData , //get all the books . 
        isModalOpen : false,  // prevModal state.  
        modalText : "", // prevModalText. 
        
    }




const UserReducer = () => {
    
    //const [] = useReducer(reducer,initialState); 
    
    //1. here dispatch the reducer action + payload. 
    const [bookState,dispatch] = useReducer ( reducer, initialState);
   
    
    //set book name : 
    const [bookName,setBookName] = useState(""); 
    
    
    
    //reducer
    
    const handleSubmit = (e) => {
    
        e.prevantDefault();
        alert(bookName); //when form submit those value set in setBookName to bookName varibale . 
        
        setBooks( (prevState) => {
            
            //after form submit set the new book : __________
            const newBook = {   id:new Date().getTime().toString(), 
                                name = bookName
                            }
                            
            //after save the new book then dispatch to the reducer (call the reducer function ): 
            dispatch({type: "ADD", payload : newBook}); 
            
            //after click submit then clear the input fileds : 
            setBookName("");
            
                            
            
        });
        
    };
    
    //remove book: 
    
    const removeBook = (id) => {
        alert(id); //check the id
        
        dispatch(type:"REMOVE",payload:id)
    }
    
    
    return (
            <div>
                <h3>Book List </h3> 
                
                //Add Book Name : __________________________
                <form onSubmit = {handleSubmit}>
                    <input type= "text" 
                           value= {bookNmae}
                           onChange = {(e) => setBookName(e.target.value);}
                    />
                    <button type="submit">Add Book</button>
                </form>
                
                //if isModalOplen true then show the modal text : __________________________
                { bookState.isModalOpen && <Modal modalText = {bookState.modalText}/> }      // here 'bookState' get from reducer 1.//
                
                //show the books :__________________________
                {bookState.books.map( (book) => {       // here 'bookState' get from reducer 1.//
                
                      const {id,name} = book; 
                      
                        return (
                            <li key ={id} > 
                            
                                 {name} <button onClick= { () => removeBook(id) } > Remove </button>
                                 
                            </li>
                        );
                        
                    };
                
                )};
    
            </div>
    );     

}


export default UseReducer; 


-------------------------------------------------------------------
//2. here receive the action , payload from the dispatch . 
export const reducer = (state, action) => {

    //in action received => (action.type , action.payload )received from the dispatch . 
    //and state received =>   //1. books : booksData , //get all the books . 
    
    if(action.type === "ADD")
        {
            const allBooks = [...state.books, action.payload  ]   //after =>   dispatch({type: "ADD", payload : newBook});  => here, action.payload = newbook.
            
            return {
                ...state, //return full state 
                books : allBooks, //return also the new books. 
                isModalOpen : true, 
                modelTest: "book is added ", 
                
            }
        
        }
    if(action.type === "Remove")
        {
        
            const filterBooks = [...state.books].filter( book => book.id !== action.payload) // we pass the id from dispatch , id = action.payload
            
            return {
                ..state,
                books:filterBooks,
                isModalOpen:true,
                modalText: "Book is removed " ,
            }
        
        
        }

    return state;
}
