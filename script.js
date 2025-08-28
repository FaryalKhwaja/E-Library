let library = [];

let shelfDiv = document.querySelector(".shelfDiv");
let addBook = document.getElementById("addBookBtn")

function Book (title, author, readStatus) {
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
}

function addBookToLibrary (title, author, readStatus) {
    const book = new Book(title, author, readStatus);
    library.push(book);
    let bookDiv = document.createElement("div");
    bookDiv.textContent = title + "\n" + author + "\nRead: " + readStatus;
    bookDiv.style.whiteSpace = "pre-line";
    shelfDiv.appendChild(bookDiv);
    console.log(library);
}

addBook.addEventListener("click", () => {
    addBookToLibrary("Atomic Habits", "James Clear", "Yes");
});
console.log(addBook);