function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

let myLibrary = [];

myLibrary.push(new Book('The Call of The Wild', 'Jack London', '80'));
myLibrary.push(new Book('Hitchiker\'s Guide to The Galaxy', 'Douglas Adams', '250', true));

function addBookToLibrary(title, author, pages, read) {
}