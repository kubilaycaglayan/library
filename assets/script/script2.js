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

const library = document.getElementById("library");

function render() {
  library.innerHTML = "";
  myLibrary.forEach((item, index) => {
    const row = document.createElement("tr");
    
    const bookId = document.createElement("th");
    bookId.scope = "row";
    bookId.textContent = index + 1;
    const bookTitle = document.createElement("td");
    bookTitle.textContent = item.title;
    const bookAuthor = document.createElement("td");
    bookAuthor.textContent = item.author;
    const bookPages = document.createElement("td");
    bookPages.textContent = item.pages;

    const chStatus = document.createElement("td");
    const changeReadStatusButton = document.createElement('div');
    changeReadStatusButton.className = 'align-middle btn btn-warning p-1'
    chStatus.appendChild(changeReadStatusButton)
    changeReadStatusButton.textContent = 'Change'

    changeReadStatusButton.addEventListener("click", function(){ item.changeReadStatus(); render();});

    const bookRead = document.createElement("td");
    if (item.read) {
      bookRead.textContent = 'Read';
    } else {
      bookRead.textContent = 'Not Read';
    }    

    const bookRemove = document.createElement("td");
    const removeButton = document.createElement('div');
    removeButton.className = 'align-middle btn btn-danger p-1'
    bookRemove.appendChild(removeButton)
    removeButton.textContent = "DELETE";

    removeButton.addEventListener("click", function(){ deleteBook(index); });

    row.appendChild(bookId);
    row.appendChild(bookTitle);
    row.appendChild(bookAuthor);
    row.appendChild(bookPages);
    row.appendChild(chStatus);
    row.appendChild(bookRead);
    row.appendChild(bookRemove);
    library.appendChild(row);
  });
}
render();

const addBookSectionButton = document.getElementById("addBookSectionButton");

const addBookSection = document.getElementById("addBookSection");

function showAddSection() {
  if (addBookSectionButton.innerHTML === "CLOSE ADD BOOK SECTION") {
    addBookSection.style.display = "none";
    addBookSectionButton.innerHTML = "OPEN ADD BOOK SECTION";
  } else {
    addBookSection.style.display = "block";
    addBookSectionButton.innerHTML = "CLOSE ADD BOOK SECTION";
  }
}

addBookSectionButton.addEventListener("click", showAddSection);

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

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", addBookToLibrary);
