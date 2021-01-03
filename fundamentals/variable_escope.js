var myVariable = 'global';
var myOtherVariable = 'global';

function myFunction() {
  var myVariable = 'local';
  return myVariable;
}

function myOtherFunction() {
  myOtherVariable = 'local';
  return myOtherVariable;
}

console.log(myVariable); //output: global
console.log(myFunction()); //output: local
console.log(myOtherVariable); //output: global
console.log(myOtherFunction()); //output: local
console.log(myOtherVariable); //output: local
