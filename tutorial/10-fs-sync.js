const { readFileSync, writeFileSync } = require("fs");
// const fs = require("fs");//second option

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
const test = readFileSync("./content/subfolder/test.txt", "utf-8");
console.log("start");
writeFileSync(
  "./content/result-sync.txt", //create file
  `here is the result : ${first},${second}\n`, //write information
  { flag: "a" }
);

console.log("first=>", first);
console.log("second=>", second);
console.log("test=>", test);

console.log("done with this test");
console.log("starting the next one");
