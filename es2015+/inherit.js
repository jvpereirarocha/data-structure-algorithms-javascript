//Defining base class
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

// Defining child class
class ITBook extends Book {
  constructor(title, pages, isbn, technology) {
    super(title, pages, isbn); //inheriting base class constructor
    this.technology = technology;
  }
  printTechnology() {
    console.log(this.technology);
  }
}
let jsBook = new ITBook('Learning JS Algorithms', '200', '1234567890', 'Javascript');
console.log(jsBook.title); //show the title
console.log(jsBook.printTechnology());