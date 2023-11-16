// JavaScript executing its code asynchronously
// const fs = require("fs"); //fs.read() method like open method in python
// Promises deal with async await functions
// You definitely can use more than one await with async keyword
// We use await keyword await to to delay the asynchronously executing of the functions
// Can we say that await keyword in the js is sleep counterpart method in python?
// fs.unlink is deleting the file

const fsPromises = require("fs").promises; //fsPromises uses async await
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf-8"
    );
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));
    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\nNice to meet  you!"
    );
    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseComplete.txt")
    );

    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "promiseComplete.txt"),
      "utf-8"
    );
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
};

fileOps();

/* fs.writeFile(
  path.join(__dirname, "files", "reply.txt"),
  "Hi nice to meet you!",
  (err) => {
    if (err) throw err;
    console.log("Write complete");

    fs.appendFile(
      path.join(__dirname, "files", "reply.txt"),
      "\n\nYes it is.",
      (err) => {
        if (err) throw err;
        console.log("Append complete");

        fs.rename(
          path.join(__dirname, "files", "reply.txt"),
          path.join(__dirname, "files", "newReply.txt"),
          (err) => {
            if (err) throw err;
            console.log("Rename complete");
          }
        );
      }
    );
  }
); */

// exit in uncaught error
process.on("uncaughtException", (err) => {
  console.log(`There was an uncaught error: ${err}`);
  process.exit(1);
});

/* const os = require("os");
const path = require("path");
const {add, sub, multiply, divide} = require("./math");


console.log(add(55, 67));
console.log(sub(55, 67));
console.log(multiply(55, 67));
console.log(divide(55, 67)); */

/* console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename)); */
