//Get the UI Element: 

let form = document.querySelector('#book-form'); // use for submitting form ... 
let bookList = document.querySelector('#book-list'); // use for deleting book ... 

//Book class:

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//Show Book in UI - Table
class UI {

    addBookList(book) {

        let list = document.querySelector('#book_list'); // call the table to create new book 
        let row = document.createElement('tr');  // create row with 'td'.

        row.innerHTML =
        `<td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#">[x]</a></td>
        `
        list.appendChild(row);

    }
    clearField() {
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector('#isbn').value = "";

    }
    removeBook(target) {
        //    console.log(book);
        if (target.hasAttribute('href')) {
            target.parentElement.parentElement.remove();

            console.log(target.parentElement.previousElementSibling.textContent.trim())
            LS.deleteBook(target.parentElement.previousElementSibling.textContent.trim())
          


            UI.showAlert("Book success fully delete", "success")
        }


    }

    static showAlert(msg, className) {
        let div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(msg));
        let container = document.querySelector('.container');
        let form = document.querySelector('#book-form')
        container.insertBefore(div, form);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 2000)
    }

}
// Local Storage CRUD: ----------------------------------------------

class LS {
    static getBook() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        }
        else {
            books = JSON.parse(localStorage.getItem('books')); // becare full : ........!!!!
        }

        return books;
    }

    static addBook(book) {
        let books = LS.getBook();
        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));

    }

    static displayBook() {
        let books = LS.getBook();

        books.forEach((item) => {
            let newBook = new UI(books);

            newBook.addBookList(item);
        })
    }

    static deleteBook(isbn) {


        let books = LS.getBook(); // get here : books {title, author, isbn } , access obj => books.author or books.isbn or books.title

        books.forEach((book,index)=>{

            if(book.isbn === isbn){

                books.splice(index,1); // **************** 4 houre gone in my life for a type mistake . And that's is "splice" but maistakely I type "slice";
            }
            
        });


        localStorage.setItem('books', JSON.stringify(books));



    }
}

// Add Event Listener: ----------------------------------------------------------------------

form.addEventListener('submit', newBook); // main part start here ... whn click the submit button ...
bookList.addEventListener('click', removeBook); // 
document.addEventListener('DOMContentLoaded', LS.displayBook());


//Define function:--------------------------------------------------------

function newBook(e) {
    e.preventDefault();

    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let isbn = document.querySelector('#isbn').value;

    let ui = new UI();

    if (title === "" || author === "" || isbn === "") {

        UI.showAlert("Please Input the All field", "error")
    }

    else {
        let book = new Book(title, author, isbn); // we create the 'book' obj then pass value to 'ui' obj.

        console.log(book);

        ui.addBookList(book);
        ui.clearField();
        UI.showAlert("Success full book Added", "success");
        LS.addBook(book);
    }



}

function removeBook(e) {
    let ui = new UI();
    let rmbook = e.target;
    ui.removeBook(rmbook);
    e.preventDefault();
}

