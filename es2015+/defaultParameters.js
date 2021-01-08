function sum(x = 1, y = 2, z = 5) {
  return x + y + z;
}

console.log(4, 2); //Output is 11 because x = 4, y = 2 and z, per default, is 5


//Way to define default params before ES6
function sum(x, y, z) {
  if (x === undefined) x = 1;
  if (y === undefined) y = 2;
  if (z === undefined) z = 5;
  return x + y + z;
}

//Another way
function sum() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var y = arguments.length > 0 && arguments[1] !== undefined ? arguments[1] : 2;
  var z = arguments.length > 0 && arguments[2] !== undefined ? arguments[2] : 5;

  return x + y + z;
}

// PS: Javascript functions has a built in array called 'arguments'