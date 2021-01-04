// == operator
console.log(null == undefined); //true
console.log(undefined == null); //true
console.log(2 == '2'); //true (x == toNumber(y))
console.log('1' == 1); //true (toNumber(x) == y)
// console.log(Boolean == Any);
// console.log(Any == Boolean);
console.log((1 || '1') == {1:1});
console.log({} == ('2' || 2));

//More about == operator

console.log('packt' ? true : false); //true
console.log('packt' == true); //false -> NaN == 1 (this is false)
console.log('packt' == false); //false -> NaN == 0 (this is false)


// operator ===
console.log('\n\n');
console.log('Operator ===');
console.log(1 === '1'); //false
console.log(2 === 2); //true
console.log('hello' === NaN); //false
console.log('h' === 'h'); //true
console.log(false === false); //true
console.log(false === true); //false
console.log(true === 'true'); //false (typeof isn't the same)
var obj = { name: 'John', age: 23 }
var copiedObj = obj;
console.log(obj === copiedObj); //true
copiedObj.nationality = 'Brazilian'; //Changes the two objects
console.log(obj);
console.log('packt' === true); //false
console.log('packt' === 'packt'); //true
var person1 = { name: 'José' };
var person2 = { name: 'José' };
console.log(person1 === person2); //false, the objects aren't the same
