// Now, with the ES2015, is possible use literal template strings to show variable values

//Example:
const book = {
  name: 'Learning Javascript DataStructures and Algorithms'
};

// Old versions from Javascript this is so hard to show...
console.log('You are reading ' + book.name + '.,\n and this is a new line \n and so is this.');

//Take a look how to do that with the literal template string feature from ES2015...
console.log(`You are reading ${book.name}.,
  and this is a new line
    and so is this.`);

// Easy...