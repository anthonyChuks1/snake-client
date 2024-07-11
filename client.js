const net = require("net");

// estabishes a connection with the game server

const connect  = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.setEncoding('utf8');

  conn.on('data',(data) =>{
    console.log(data);
  })

  return conn;
};


module.exports = connect;