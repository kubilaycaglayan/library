function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.changeReadStatus= function (){this.read = this.read == true ? false : true;}

let myLibrary = [];

myLibrary.push(new Book("The Call of The Wild", "Jack London", "80"));
myLibrary.push(new Book("Great Expectations", "Charles Dickens", "554"));
myLibrary.push(new Book("The Little Prince", "Antoine de Saint-Exupéry", "120"));
myLibrary.push(new Book("Hitchiker's Guide to The Galaxy", "Douglas Adams", "250", true));

function deleteBook (bookId) {
  if(confirm("Do you want to remove that book?")){
        myLibrary.splice(bookId, 1);
        render();
    } else {
        render();
    }           
}

function addBookToLibrary() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  let read = document.querySelector('input[name="read"]:checked').value;
  read = (read === "true") ? true : false;
  
  if ( title.length > 0 && author.length > 0 && pages.length > 0 ) {
    myLibrary.push(new Book(title, author, pages, read));
    render();
    document.getElementsByTagName("form")[0].reset();    
  }
}

