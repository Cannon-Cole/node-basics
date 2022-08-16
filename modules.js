const names = require("./names");
const sayHi = require("./utils");
const data = require("./alternate-values");
require("./auto-run");
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
sayHi(data.items[0]);
