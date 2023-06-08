//BookList:
let form = document.querySelector('form');
let AddBook = document.querySelector('#book-list'); //this is le table body for adding book

//define All Class: 

// class Book{
//     constructor(title,author,isbn){
//         this.title=title;
//         this.author=author;
//         this.isbn=isbn
//     }
// }
class UI {

    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn
    }

    static newBook(book) {
        // let Booklist = document.querySelector('#book-list');
        let Booklist = AddBook;
        let row = document.createElement('tr');
        row.innerHTML =
        `<td>${book.title}</td> 
        <td>${book.author}</td> 
        <td>${book.isbn}</td> 
        <td><a href="#">[x]</a></td>`;
        Booklist.appendChild(row);
       

        


    }
    static deleteBook(target) {
        target.parentElement.parentElement.remove();

    }
    static clear(book){
        document.querySelector('#title').value="" ;
        document.querySelector('#author').value="";
        document.querySelector('#isbn').value="";

    }

    static showAlert(msg, alertClass) {
        this.clearAlert();
        let div = document.createElement('div');

        div.className = `alert ${alertClass}`;
        div.appendChild(document.createTextNode(msg));
        let container = document.querySelector('.container');
        let alertPlace = document.querySelector('alert-place');
        container.insertBefore(div, alertPlace);

        setTimeout(() => {
            document.querySelector('.alert').remove()
        }, 5000);
    }
    static clearAlert(){
        let currentAlert = document.querySelector('.alert');
        if(currentAlert){
            this.showAlert.remove();
        }       
    
    }
 

}

//LS:--------------------------------------------
class LS{
    static getBook(){
        let books;
        if(localStorage.getItem('books')===null){
            books=[];
        }
        else{
            books= JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static setBook(book){
        let books = LS.getBook();
        
        books.push(book)
        

        localStorage.setItem('books',JSON.stringify(books));
    }
    static dispalyBook(){
        let books = LS.getBook();
        
        
        books.forEach(element => {
           
            UI.newBook(element);
             
        });
    }
    static rmBook(target){
        // console.log(target.parentElement.previousSibling.previousSibling.textContent.trim())
        let isbn = target.parentElement.previousSibling.previousSibling.textContent.trim();
        console.log(isbn);
        let books= LS.getBook()
        books.forEach((item,index)=>{
            // console.log(item.isbn+" === "+isbn);
            if(item.isbn === isbn){
                books.splice(index,1);
            }

        });

        localStorage.setItem('books',JSON.stringify(books));
    }


}
// end LS -----------------------------------------



//define Event Listener:-------------------------
form.addEventListener('submit', addBook);
AddBook.addEventListener('click', removeBook);
document.addEventListener('DOMContentLoaded',LS.dispalyBook());




// define all function :------------------------------

function addBook(e) {
    // e.preventDefault();
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let isbn = document.querySelector('#isbn').value;
    let book = new UI(title, author, isbn);
    if (title === '' || author === '' || isbn === '') {
        UI.showAlert("Book not Added!", "error")
    }
    else {
        UI.newBook(book);
        
        UI.showAlert("Book Addedd!!!", "success");
        LS.setBook(book);
        UI.clear(book);
    }


}

function removeBook(e) {
    let rmItem = e.target;
    UI.deleteBook(rmItem);
    LS.rmBook(rmItem);
}