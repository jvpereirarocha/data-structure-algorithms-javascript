// The old syntax was...
var circleAreaES5 = function circleArea(r) {
  var PI = 3.14;
  var area = PI * r * r;
  return area;
}
console.log(circleAreaES5(2));

//Now look that... What do you think about arrow functions? ES6 (ES2015) feature

const circleArea = r => {
  const PI = 3.14;
  const area = PI * r * r;
  return area;
}
console.log(circleArea(2));

//How much time did you spend on the oldest syntax?

//Reduce syntax
const circleArea2 = r => 3.14 * r * r;
console.log(circleArea2(2));


//If the function hasn't parameters
const hello = () => console.log('Hello!');
hello();