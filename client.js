const net = require("net");



/**
 * Establishes a connection to the game server.
 * @returns {net.Socket} The connection object.
 */
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  //convert from hexadecimal to letters with ascii.
  conn.setEncoding('utf8');

  //What to do after the connection protocol is complete.
  conn.on('connect', () => {
    console.log("Successfully connected to game server.");
    conn.write('Name: Roy')
    //conn.write('Move: up')
    
  })
  //Gets the data sent from the save; any... Data
  conn.on('data', (data) => {
    console.log(data);
  })

  return conn;
};

/*Exports here ⬇️*/
module.exports = {
  connect,
};