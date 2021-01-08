const PI = 3.14;
PI = 3.0; //error
console.log(PI);

//Another examples
const jsFramework = {
  name: 'Angular'
};

jsFramework.name = 'React'; //This works fine because we are changing the object property

//The code below doesn't works
jsFramework = {
  name: 'Vue';
}

//Escope variables
let movie = 'Lord of the Rings';
//var movie = 'Batman vs Superman' //Erro movie already exists
function starWarsFan() {
  const movie = 'Star Wars';
  return movie;
}

function marvelFan() {
  movie = 'The Avengers';
  return movie;
}

function blizzardFan() {
  const isFan = true;
  let phrase = 'Warcraft';
  console.log('Before if: ' + phrase);
  if (isFan) {
    let phrase = 'initial text';
    phrase = 'For the Horde!';
    console.log('Inside if: ' + phrase);
  }

  phrase = 'For the Alliance';
  console.log('After if: ' + phrase);
}

console.log(movie); //Output is lord of the rings because the 'let movie' is in the same escope
console.log(starWarsFan()); //Output is Star Wars because we created a constant with the same name in the function escope: movie
console.log(marvelFan()); //In this function we changed the value from the variable movie. Now is 'The Avengers'
console.log(movie); //Output is The Avengers because we changed it
blizzardFan(); //Outputs:
/*
  Before if: Warcraft //We created the phrase variable with this value
  Inside if: For the Horde! //In the if block, we created another variable with the same name phrase and changed its value
  After if: For the Alliance //After if we change the variable phrase on the function escope. Now the value is For the Alliance
*/