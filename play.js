
const connect = require('./client')

/**
 * Handles user input from stdin.
 * @param {string} key - The key pressed by the user.
 */
const handleUserInput = function (key){
  if(key === '\u0003'){
    console.log(`Closing the connection...`);
    process.exit();
  }
}

/**
 * Sets up the interface to handle user input from stdin.
 * @returns {object} - The stdin object.
 */
const setupInput = function () {
  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  stdin.on('data', handleUserInput);
  return stdin;   // return the stdin object so we can use it elsewhere in the program
};

setupInput();
console.log('Connecting ...');
connect();
