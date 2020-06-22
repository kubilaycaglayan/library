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


const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", addBookToLibrary);