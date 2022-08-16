const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
const flattened_items = _.flattenDeep(items);
console.log(flattened_items);
console.log("Hello");
