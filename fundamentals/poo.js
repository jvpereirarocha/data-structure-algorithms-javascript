var obj = new Object();
// ou...
var obj = {};

obj = {
  name: {
    first: 'Gandalf',
    last: 'the Grey'
  },
  address: 'Middle Earth'
};

// function like class
function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
}

// instance...
var book = new Book('title', 'pag', 'isbn');
console.log(book.title);
console.log(book.pages);
console.log(book.isbn);

// Changing the title...
book.title = 'New title for the book';
console.log(book.title); //The new title


// General functions with prototypes
Book.prototype.printTitle = function() {
  console.log(this.title);
}

book.printTitle(); //show the same result for all instances


// Creating functions inside the class
function MyBook(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;

  this.printIsbn = function() {
    console.log(this.isbn);
  }
}
book.printIsbn();
