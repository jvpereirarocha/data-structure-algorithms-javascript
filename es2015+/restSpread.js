function sum(x = 1, y = 2, z = 3) {
  return x + y + z;
}

let params = [3, 4, 5];
console.log(sum(...params)); //spreading all the values in the array from the function sum params


//Take a look a similar code before ES6
console.log(sum.apply(undefined, params));

//Using ... for replace arguments
function restParameterFunction(x, y, ...a) {
  return (x + y) * a.length;
}
console.log(restParameterFunction(1, 2, 'hello', true, 7)); //Output: 9

//Similar code before ES6
function restParameterFunction(x, y) {
  var a = Array.prototype.slice.call(arguments, 2);
  return (x + y) * a.length;
}
console.log(restParameterFunction(1, 2, 'hello', true, 7));