/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.changeReadStatus = function changeReadStatus() { this.read = this.read !== true; };

function objectConverter() {
  const allBooks = JSON.parse(localStorage.getItem('myLibrary'));
  const myLibrary2 = [];
  allBooks.forEach((item, index) => {
    myLibrary2.push(new Book(item.title, item.author, item.pages, item.read));
  });
  return myLibrary2;
}

if (localStorage.getItem('myLibrary')) {
  var myLibrary = objectConverter();
} else {
  var myLibrary = [
    new Book('Lord of the Rings', 'JRR Tolkien', 300, true),
    new Book('Neuromante', 'William Gibson', 200, true),
    new Book('The Call of The Wild', 'Jack London', '80'),
    new Book("Hitchiker's Guide to The Galaxy", 'Douglas Adams', '250', true),

  ];
}

function addBookToLibrary() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  let read = document.querySelector('input[name="read"]:checked').value;
  read = (read === 'true');

  if (title.length > 0 && author.length > 0 && pages.length > 0) {
    myLibrary.push(new Book(title, author, pages, read));
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
    // eslint-disable-next-line no-undef
    render();
    document.getElementsByTagName('form')[0].reset();
  }
}
