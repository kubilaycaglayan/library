/* eslint-disable no-unused-vars */
function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.changeReadStatus = function changeReadStatus() { this.read = this.read !== true;};

function objectConverter() {
  let allBooks = JSON.parse(localStorage.getItem('myLibrary'));
  var myLibrary = [];
  allBooks.forEach((item, index) => {
    myLibrary.push(new Book(item.title, item.author, item.pages, item.read));
  });
  return myLibrary;
}

if (localStorage.getItem('myLibrary')) {
  var myLibrary =  objectConverter();
} else {
  var myLibrary =  [
    new Book("Lord of the Rings", "JRR Tolkien", 300, true),
    new Book("Neuromante", "William Gibson", 200, true),
    new Book('The Call of The Wild', 'Jack London', '80'),
    new Book("Hitchiker's Guide to The Galaxy", 'Douglas Adams', '250', true),

  ];
};
 

/*const myLibrary = [];

myLibrary.push(new Book('The Call of The Wild', 'Jack London', '80'));
myLibrary.push(new Book('Great Expectations', 'Charles Dickens', '554'));
myLibrary.push(new Book('The Little Prince', 'Antoine de Saint-Exupéry', '120'));
myLibrary.push(new Book("Hitchiker's Guide to The Galaxy", 'Douglas Adams', '250', true));*/

function addBookToLibrary() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  let read = document.querySelector('input[name="read"]:checked').value;
  read = (read === 'true');

  if (title.length > 0 && author.length > 0 && pages.length > 0) {
    myLibrary.push(new Book(title, author, pages, read));
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    // eslint-disable-next-line no-undef
    render();
    document.getElementsByTagName('form')[0].reset();
  }
}
