// default functions

function sayHello() {
  console.log('Hello');
}

sayHello();

// anonymous function
for (var i = 0; i < 3; i++) {
  setInterval(function(){
    console.log('Hello!');
    i += 2
  }, 3000);

}

// Functions with params
function output(text) {
  console.log(text);
}

output('This is a test');

function sum(num1, num2) {
  return num1 + num2;
}

//Using two functions together
var result = sum(3, 6);
output(result);
