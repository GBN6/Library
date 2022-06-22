
const firstBook = new Book('The Witcher', 'Andrzej Sapkowski', 350, true);
const secondBook = new Book('Game of Thrones', 'G.R.R. Martin', 800, true);
const thirdBook = new Book('Inferno', 'Dan Brown', 400, false);
const library = document.querySelector('.books-container');
const addBook = document.querySelector('.btn-add-book');
const displayForm = document.querySelector('.form-container');
const overlay = document.querySelector('#overlay');
const submitButton = document.querySelector('.btn-submit-form');
const bookFromForm = document.querySelector('.add-book-form');

let myLibrary = [];
let counter = 0
// firstBook, secondBook, thirdBook
function Book(title, author, pages, read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
    }
}

function addBookToLibrary(title, author, pages, read) 
{
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBook();
    
}

function displayBook()
{
    while(library.firstChild)
    {
        library.removeChild(library.firstChild);
    }
    myLibrary.forEach((book, i) => 
    {
        const card = document.createElement('div');
        const title = document.createElement('p')
        const author = document.createElement('p')
        const pages = document.createElement('p')
        const buttonGroup = document.createElement('div')
        const readButton = document.createElement('button')
        const deleteButton = document.createElement('button')

        card.classList.add('book-card');
        card.setAttribute('data-index', `${i}`);
        buttonGroup.classList.add('btn-card');
        (book.read) ? readButton.classList.add('btn', 'btn-read') : readButton.classList.add('btn', 'btn-not-read');
        deleteButton.classList.add('btn', 'btn-delete');
        
        title.textContent = `"${book.title}"`;
        author.textContent = `${book.author}`;
        pages.textContent = `${book.pages} pages`;
        (book.read) ? readButton.textContent = `Read` : readButton.textContent = `Not read`;
        deleteButton.textContent = `Delete`;


        library.appendChild(card);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(buttonGroup);
        buttonGroup.appendChild(readButton);
        buttonGroup.appendChild(deleteButton);   
    });
}
function hideFormAndOverlay(e)
{
    if (e.target.className !== 'add-book-form')
    {
        displayForm.style.display = 'none';
        overlay.classList.remove('active');
    }
}

function getBookFromForm(e)
{
    e.preventDefault();
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const isRead = document.getElementById('isRead').checked
    bookFromForm.reset();
    displayForm.style.display = 'none';
    overlay.classList.remove('active');
    return addBookToLibrary(title, author, pages, isRead);
}

addBook.addEventListener('click', () => { displayForm.style.display = "block"; overlay.classList.add('active');})
overlay.addEventListener('click', hideFormAndOverlay);
bookFromForm.addEventListener('submit', getBookFromForm);