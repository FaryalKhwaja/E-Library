let library = [];

let shelfDiv = document.querySelector(".shelfDiv");
let addBook = document.querySelector(".AddBookBtn");
let title = document.querySelector(".title");
let author = document.querySelector(".author");
let readStatus = document.querySelector(".readStatus");

function Book (title, author, readStatus) {
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
}

function addBookToLibrary (title, author, readStatus) {
    const book = new Book(title, author, readStatus);
    library.push(book);
    let bookDiv = document.createElement("div");
    let bookTitle = title;
    let bookAuthor = author;
    let bookReadStatus = readStatus;
    bookDiv.textContent = title + "\n" + author + "\nRead: " + readStatus;
    bookDiv.style.whiteSpace = "pre-line";
    shelfDiv.appendChild(bookDiv);
    console.log(library);
}

addBook.addEventListener("click", () => {
    addBookToLibrary(title.value, author.value, readStatus.value);
});
console.log(addBook);