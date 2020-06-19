function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const myLibrary = [];

myLibrary.push(new Book('The Call of The Wild', 'Jack London', '80'));
myLibrary.push(new Book('Hitchiker\'s Guide to The Galaxy', 'Douglas Adams', '250', true));

function addBookToLibrary(title, author, pages, read) {
}

const library = document.getElementById('library');
function render() {
  myLibrary.forEach(item => {
    const row = document.createElement('tr');
    const book_title = document.createElement('td');
    book_title.textContent = item.title;
    const book_author = document.createElement('td');
    book_author.textContent = item.author;
    const book_pages = document.createElement('td');
    book_pages.textContent = item.pages;
    const book_read = document.createElement('td');
    book_read.textContent = item.read;

    row.appendChild(book_title);
    row.appendChild(book_author);
    row.appendChild(book_pages);
    row.appendChild(book_read);
    library.appendChild(row);
  });
}
render();

const addBookSectionButton = document.getElementById('addBookSectionButton');


const addBookSection = document.getElementById('addBookSection');

function showAddSection() {
  if (addBookSectionButton.innerHTML === 'CLOSE ADD BOOK SECTION') {
    addBookSection.style.display = 'none';
    addBookSectionButton.innerHTML = 'OPEN ADD BOOK SECTION';
  } else {
    addBookSection.style.display = 'block';
    addBookSectionButton.innerHTML = 'CLOSE ADD BOOK SECTION';
  }
}

addBookSectionButton.addEventListener('click', showAddSection);