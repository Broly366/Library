const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readinput = document.querySelector("#read");

function getNewBook(){
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const read = readinput.value;

    const newBook = new Book(title, author, pages, read);

    addBookToLibrary(newBook);

    if (cardCounter < 50){
            const card = document.createElement("div")
            card.className = "card"
            card.setAttribute("data-book-index", myLibrary.length - 1)
            cards.appendChild(card)
            const title = document.createElement("div");
            title.textContent = "Title: " + newBook.title;
            card.appendChild(title)
            const author = document.createElement("div");
            author.textContent = "Author: " + newBook.author;
            card.appendChild(author)
            const pages = document.createElement("div");
            pages.textContent ="Pages: " + newBook.pages;
            card.appendChild(pages)
            const read = document.createElement("button");
            read.textContent = "NOT READ";
            card.appendChild(read)
            const removeButton = document.createElement("button")
            removeButton.textContent = "Remove";
            card.appendChild(removeButton);

            removeButton.addEventListener("click", (event) => {
                const bookIndex = event.target.parentElement.getAttribute("data-book-index");

                myLibrary.splice(bookIndex, 1);

                event.target.parentElement.remove();
            })

            read.addEventListener("click", () => {
                read.classList.toggle("on");
                if (read.classList.contains("on")){
                    read.textContent = "READ";
                } else {
                    read.textContent = "NOT READ"
                };
            })
    
            cardCounter ++;
        } else {
            alert("To many cards, remove one before adding another")
        }

        resetForm();
}

function addBookToLibrary(book) {
    myLibrary.push(book);
};

const cards = document.querySelector(".cards")

let cardCounter = 0;


function resetForm(){
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
}

const openFormBtn = document.querySelector("[data-open-modal]")
const closeFormBtn = document.querySelector("[data-close-modal]")
const hiddenForm = document.querySelector("[data-modal]")
const createCardBtn = document.querySelector(".submit")

openFormBtn.addEventListener("click", () => {
    hiddenForm.showModal()
})

closeFormBtn.addEventListener("click", () => {
    hiddenForm.close()
    resetForm();
})

createCardBtn.addEventListener("click", () => {
    getNewBook();
    
})