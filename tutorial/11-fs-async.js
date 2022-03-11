const { readFile, writeFile } = require("fs");
console.log("start");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  // console.log(result);
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-ync.txt",
      `here is the result : ${first},${second}\n`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with test");
      }
    );
  });
});
console.log("starting next task");
