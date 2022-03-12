// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");

const { items, singlePerson } = data;
// console.log("data=>", data);
// console.log("items=>", items);
// console.log("singlePerson=>", singlePerson);
const { john } = names;
// console.log(names);
// sayHi("susan");
// sayHi(john);
// sayHi(names.peter);

require("./7-mind-grenade");