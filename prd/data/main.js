const home = require('./home.js');
const active = require('./active');
const find = require('./find');
const detail = require('./detail');
module.exports = function() {
  return {
    "home": home,
    "active":active,
    "find":find,
    "detail":detail
  }
}
