// If else

var num = 1;
if (num === 1) {
  console.log('num is equal to 1');
}

var example = 0;
if (example === 1) {
  console.log('num is equal to 1');
}
else {
  console.log('num is not equal to 1, the value of num is ' + example);
}


// Ternary condition

(num === 1) ? num-- : num++;


//switch condition
var month = 5;
switch(month) {
  case 1:
    console.log('January');
    break;
  case 2:
    console.log('February');
    break;
  case 3:
    console.log('March');
    break;
  case 4:
    console.log('April');
    break;
  default:
    console.log('Month is not January, February, March or April');
}
