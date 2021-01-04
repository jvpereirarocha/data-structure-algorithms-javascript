function testTruthy(val, index) {
  return val ? console.log(`${index}º - truthy`) : console.log(`${index}º - falsy`);
}

testTruthy(true, 1); //true
testTruthy(false, 2); //false
testTruthy(new Boolean(false), 3); //true (object always is true)
testTruthy('', 4); //false
testTruthy('Packt', 5); //true
testTruthy(new String(''), 6); //true (object always is true)
testTruthy(1, 7); //true
testTruthy(-1, 8); //true
testTruthy(NaN, 9); //false
testTruthy(new Number(NaN), 10); //true (object always is true)
testTruthy({}, 11); //true
var obj = { name: 'Jhon'};
testTruthy(obj, 12); //true
testTruthy(obj.name, 13); //true
testTruthy(obj.age, 14); //false (doesn't exists)
