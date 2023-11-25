//create an array to store the books
const myLibrary = [];

//define a book class to create the varius books
class Book {
    //create a constructor method that lets you define the title, author, pages and read properties
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    };

    //method that creates a card with the books properties in the HTML 
    createCard(book){
            const cards = document.querySelector(".cards")

            const card = document.createElement("div")
            card.className = "card"
            card.setAttribute("data-book-index", myLibrary.length - 1)
            cards.appendChild(card)
            const title = document.createElement("div");
            title.textContent = "Title: " + book.title;
            card.appendChild(title)
            const author = document.createElement("div");
            author.textContent = "Author: " + book.author;
            card.appendChild(author)
            const pages = document.createElement("div");
            pages.textContent ="Pages: " + book.pages;
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
    };

    //pushes the book in the library
    addBookToLibrary(book) {
        myLibrary.push(book);
    };
}

//define a screen controller function that lets you define how the buttons opens the dialog and how to create a book
function screenController(){
    const openFormBtn = document.querySelector("[data-open-modal]")
    const closeFormBtn = document.querySelector("[data-close-modal]")
    const hiddenForm = document.querySelector("[data-modal]")
    const createCardBtn = document.querySelector(".submit")

    const createNewBook = () => {
        function resetForm(){
            titleInput.value = "";
            authorInput.value = "";
            pagesInput.value = "";
        };
        const titleInput = document.querySelector("#title");
        const authorInput = document.querySelector("#author");
        const pagesInput = document.querySelector("#pages");
        const readinput = document.querySelector("#read");

        const title = titleInput.value;
        const author = authorInput.value;
        const pages = pagesInput.value;
        const read = readinput.value;

        const newBook = new Book(title, author, pages, read);
        newBook.addBookToLibrary(newBook);
        newBook.createCard(newBook);
        resetForm();
    }
    openFormBtn.addEventListener("click", () => {
        hiddenForm.showModal()
    })

    closeFormBtn.addEventListener("click", () => {
        hiddenForm.close()
    })

    let cardCounter = 0;

    createCardBtn.addEventListener("click", () => {
        if(cardCounter < 27){
            createNewBook();
            cardCounter++;
        }else {
            alert("To many cards, remove one before adding another");
        }
    })
}

//call the screenController function
screenController()