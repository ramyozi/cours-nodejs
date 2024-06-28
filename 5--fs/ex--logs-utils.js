const fs = require("fs");

const logStream = fs.createWriteStream("logs.txt", { flags: "a" });
const errorStream = fs.createWriteStream("errors.txt", { flags: "a" });

console.log = (message) => {
  const date = new Date().toISOString();
  logStream.write(`${date} - LOG: ${message}\n`);
  process.stdout.write(`${date} - LOG: ${message}\n`);
};

console.error = (message) => {
  const date = new Date().toISOString();
  errorStream.write(`${date} - ERROR: ${message}\n`);
  process.stderr.write(`${date} - ERROR: ${message}\n`);
};
