const IP = 'localhost';
const PORT = 50541;

// Movement keys
const MOVE_UP_KEY = 'w';
const MOVE_DOWN_KEY = 's';
const MOVE_LEFT_KEY = 'a';
const MOVE_RIGHT_KEY = 'd';

//movement mapping 
const MOVE_MAP = {
  [MOVE_UP_KEY]: "Move: up",
  [MOVE_DOWN_KEY]: "Move: down",
  [MOVE_LEFT_KEY]: "Move: left",
  [MOVE_RIGHT_KEY]: "Move: right",
}
// Message keys
const SAY_HELLO_KEY = 'h';
const SAY_LOL_KEY = 'l';
const SAY_GG_KEY = 'g';
const SAY_OMG_KEY = 'o';
const SAY_GJ_KEY = 'j';
const SAY_WOW_KEY = 'k'

// Message mappings
const MESSAGE_MAP = {
  [SAY_HELLO_KEY]: "Say: HELLO",
  [SAY_LOL_KEY]: "Say: LOL",
  [SAY_GG_KEY]: "Say: GG",
  [SAY_OMG_KEY]: "Say: OMG",
  [SAY_WOW_KEY]: "Say: WOW",
  [SAY_GJ_KEY]: "Say: GOODJOB"
};

/*Export here ⬇️*/
module.exports = {
  IP,
  PORT,
  MOVE_MAP,
  MESSAGE_MAP,
};



