document.addEventListener("DOMContentLoaded", function () {
    console.log('loaded')
})


// when add button is clicked, the form is opened
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', showform);

function showform() {
    let form = document.getElementById('form');
    form.style.display = 'block'
}


//creating an array for the library

const myLibrary = [];

//book constructor, all the new books will have this property

function Book(title, author, status) {
    this.title = title;
    this.author = author;
    this.status = status;
}

//button for adding to library

let addToLibrary = document.getElementById('addToLibrary')
addToLibrary.addEventListener('click', addBookToLibrary)

//to add books to the library array

function addBookToLibrary(event) {
    event.preventDefault();
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const status = document.getElementById('status').value

    const newBook = new Book(title, author, status)

    myLibrary.push(newBook);
    console.log(myLibrary)

    document.getElementById('bookform').reset()


}



