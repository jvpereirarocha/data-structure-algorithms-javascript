//Working with getter and setters

class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
}

let lotrChar = new Person('Frodo');
console.log(lotrChar.name); //Output: Frodo
lotrChar.name = 'Gandalf'; //Setting the name Gandalf from this instance
console.log(lotrChar.name); //Output: Gandalf
lotrChar._name = 'Sam'; //This works but shouldn't be made
console.log(lotrChar.name); //Output: Sam