const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
const test = readFileSync("./content/subfolder/test.txt", "utf-8");

writeFileSync(
  "./content/result-sync.txt",
  `here is the result : ${first},${second}\n`,
  { flag: "a" }
);

console.log("first=>", first);
console.log("second=>", second);
console.log("test=>", test);
