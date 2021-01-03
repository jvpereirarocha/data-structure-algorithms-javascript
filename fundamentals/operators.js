var num = 0;
num = num + 2;
num = num * 3;
num = num / 2;
num++; // num = num + 1
num--; // num = num - 1
num += 1; // num = num + 1
num -= 2; // num = num - 2
num *= 3; // num = num * 3
num /= 2; // num = num / 2
num %=3; // num = num % 3

console.log("num is: " + num); //output: 0
console.log('num == 1: ' + (num == 1)); //false
console.log('num === 1: ' + (num === 1)); //false
console.log('num != 1: ' + (num != 1)); //true
console.log('num !== 1: ' + (num !== 1)); //true
console.log('num > 1: ' + (num > 1)); //false
console.log('num < 1: ' + (num < 1)); //true
console.log('num >= 1: ' + (num >= 1)); //false
console.log('num <= 1: ' + (num <= 1)); //true
console.log('true && false: ' + (true && false)); //false
console.log('true || false: ' + (true || false)); //true
console.log('!true: ' + (!true)); //false

console.log('\n\n');
console.log('-----------------');
console.log('operadores bitwise:\n');
console.log('5 & 1:', (5 & 1));
console.log('5 | 1:', (5 | 1));
console.log('~5:', (~5));
console.log('5 ^ 1:', (5 ^ 1));
console.log('5 << 1:', (5 << 1));
console.log('5 >> 1:', (5 >> 1));


//Operator delete
console.log('\n\n');
var myObj = {name: 'John', age: 23};
console.log("myObj before delete operator:", myObj); //Object {name: "John", age: 23}
delete myObj.age;
console.log("myObj after delete operator:", myObj); //Object {name: "John"}