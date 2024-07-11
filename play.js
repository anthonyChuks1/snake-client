
const {connect} = require('./client')
const {setupInput} = require('./input')
/************All imports above************************/

setupInput();

console.log('Connecting ...');

connect();
