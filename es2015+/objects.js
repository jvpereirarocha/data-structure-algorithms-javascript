//Object improvements in the ES6 version

//Destructuring array
let [x, y] = ['a', 'b']; // x = 'a' and y = 'b'

//See the similar code
let x = 'a';
let y = 'b';

//Swaping values
[x, y] = [y, x];

//See the similar code
var temp = x;
x = y;
y = temp;

//Property shorthands
let [x, y] = ['a', 'b'];
let obj = { x, y }; // The result is { x: "a", y: "b" }

//See the similar code
var x = 'a';
var y = 'b';
var obj2 = { x: x, y: y };
console.log(obj2);


// Shorthand method names
const hello = {
  name: 'abcdef',
  printHello() {
    console.log('Hello');
  }
}; //Declaring function inside object
console.log(hello.printHello());

//Similar code before ES6 version
var hello = {
  name: 'abcedef',
  printHello: function() {
    console.log('Hello!');
  }
}
console.log(hello.printHello());