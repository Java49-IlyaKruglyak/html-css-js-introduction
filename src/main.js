import { Library } from "./data/library.js";
import { BookForm } from "./ui/BookForm.js";
import { showErrorMessage } from "./ui/errorMessage.js";
import { PagesForm } from "./ui/Pagesform.js";


const authorFormInputElements = document.querySelectorAll(".author-form-class [name]");
const MIN_PAGES = 50;
const MAX_PAGES = 2000;
const MIN_YEAR = 1980;
const ACTIVE = "active"




const pagesFormErrorElement = document.getElementById("pages_form_error");
const booksListElement = document.getElementById("books-all");
const booksPagesListElement = document.getElementById("books-pages");
const sectionsElement = document.querySelectorAll("section");
const buttonsMenuElement = document.querySelectorAll(".buttons-menu *");
const booksAuthorElement = document.getElementById("books-author");


const library = new Library();



const paramsPages = {idForm: "pages-form", idPagesFromInput: "pagesFrom",
         idPagesToInput: "pagesTo", idErrorMessage: "pages_form_error"}
const pagesForm = new PagesForm(paramsPages);
pagesForm.addSubmitHandler((pagesObj) => {
    const books = library.getBooksByPages(pagesObj.pagesFrom, pagesObj.pagesTo);
    booksPagesListElement.innerHTML = getBookItems(books);
})



function showSection(index) {
    buttonsMenuElement.forEach(book => book.classList.remove(ACTIVE));
    sectionsElement.forEach(book => book.hidden = true)
    buttonsMenuElement[index].classList.add(ACTIVE);
    sectionsElement[index].hidden = false;
    if (index == 1) {
        const books = library.getAllBooks();
        booksListElement.innerHTML = getBookItems(books);
    }
}
function getBookItems(books) {
    return books.map(book =>
        `<li class="books-item">
              <div class="books-item-container">
                 <p class="books-item-paragraph">Name: ${book.book_name} </p>
                 <p class="books-item-paragraph">Author: ${book.author} </p>
                 <p class="books-item-paragraph">Genre: ${book.genre}</p>
                 <p class="books-item-paragraph">Publish Date: ${book.publishDate}</p>
                 <p class="books-item-paragraph">Pages: ${book.pages}</p>
              </div>
          </li>`).join('');
}

const bookForm = new BookForm({
    idForm: "book_form", idDateInput: "date_input",
    idPagesInput: "pages_input", idDateError: "date_error", idPagesError: "pages_error",
    minYear: MIN_YEAR, minPages: MIN_PAGES, maxPages: MAX_PAGES
});


bookForm.addSubmitHandler((book) => library.addBook(book))
// Functions of the Author form 

function onSubmitAuthor(event) {
    event.preventDefault();
    const author = Array.from(authorFormInputElements)[0].value;
    const books = library.getBooksByAuthor(author);
    booksAuthorElement.innerHTML = getBookItems(books);
}

window.showSection = showSection;
window.onSubmitAuthor = onSubmitAuthor;