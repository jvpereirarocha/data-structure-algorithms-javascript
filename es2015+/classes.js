// Using the new syntax from ES6 version to create classes
class Book {
  constructor(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
  }

  printIsbn() {
    console.log(this.isbn);
  }
}

// Creating classes before ES6

function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
}

Book.prototype.printTitle = function () {
  console.log(this.title);
}

let book = new Book('title', 'pag', 'isbn');
console.log('title: ' + book.title);
book.title = 'new title';
console.log('new title: ' + book.title);