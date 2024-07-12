
let {MOVE_MAP, MESSAGE_MAP} = require('./constants')


let connection;//Makes the instance of a conection available to use globaly



/**
 * Handles user input from stdin.
 * @param {string} key - The key pressed by the user.
 */
const handleUserInput = function (key) {
  
  let miniKey = key.toLowerCase();//Just incase the capslock key is on.

  if (miniKey === '\u0003') {//check for ctrl+c to close the progam or IT WILL NEVER END... IT WILL GO ON FOREVER and YOU CAN NEVER STOP IT unless you close the terminal !!
    console.log(`Closing the connection...`);
    process.exit();
  }

  //calls the Default key map from constant
  if (miniKey in MOVE_MAP) {//Ignore any command that is not in the KEY object list
    connection.write(MOVE_MAP[miniKey]);
  }
  else if (miniKey in MESSAGE_MAP){
    connection.write(MESSAGE_MAP[miniKey])
  }

}



/**
 * Sets up the interface to handle user input from stdin.
 * @returns {object} - The stdin object.
 */
const setupInput = function (conn) {
  connection = conn;


  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times

  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input

  stdin.on('data', handleUserInput);

  return stdin;   // return the stdin object so we can use it elsewhere in the program
};
/*Export here ⬇️*/
module.exports = {
  setupInput,
};