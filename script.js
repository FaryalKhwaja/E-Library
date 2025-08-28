let library = [];

let shelfDiv = document.querySelector(".shelfDiv");
let addBook = document.querySelector(".AddBookBtn");
let title = document.querySelector(".title");
let author = document.querySelector(".author");
let readStatus = document.querySelector(".readStatus");
let openForm = document.querySelector(".OpenFormBtn");
let form = document.getElementById("bookForm");

function Book (title, author, readStatus) {
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
}

function renderBooks() {
    shelfDiv.innerHTML = "";
    library.forEach((b, index) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("bookDiv");
        bookDiv.textContent = `${b.title}\n\n${b.author}\n\nRead: ${b.readStatus}`;
        bookDiv.style.whiteSpace = "pre-line";
        bookDiv.style.width = `${100 / library.length}%`;
        bookDiv.style.boxSizing = "border-box";

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.classList.add("delBtn");
        delBtn.style.marginTop = "10px";
        delBtn.addEventListener("click", () => {
            library.splice(index, 1);
            renderBooks();
        });

        bookDiv.appendChild(delBtn);
        shelfDiv.appendChild(bookDiv);
    });
}

function addBookToLibrary(title, author, readStatus) {
    const book = new Book(title, author, readStatus);
    library.push(book);
    renderBooks();
    form.style.display = "none";
}

addBook.addEventListener("click", () => {
    addBookToLibrary(title.value, author.value, readStatus.value);
});
console.log(addBook);

openForm.addEventListener("click", () => {
    form.style.display = "flex";
});
