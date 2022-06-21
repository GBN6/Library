
const firstBook = new Book('The Witcher', 'Andrzej Sapkowski', 350, true);
const secondBook = new Book('Game of Thrones', 'G.R.R. Martin', 800, true);
const thirdBook = new Book('Inferno', 'Dan Brown', 400, false);
const library = document.querySelector('.books-container');
const addBook = document.querySelector('.btn-add-book');
const displayForm = document.querySelector('.form-container');

let myLibrary = [firstBook, secondBook, thirdBook];

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

}

function displayBook()
{
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
        (book.read) ? readButton.classList.add('btn-read') : readButton.classList.add('btn-not-read')
        deleteButton.classList.add('btn-delete')
        
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

addBook.addEventListener('click', () => { displayForm.style.display = "block" })
displayBook();