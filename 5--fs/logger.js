const fs = require("fs");
const { Console } = require("console");

const output = fs.createWriteStream("./stdout.log");
const errors = fs.createWriteStream("./stderr.log");

const logger = new Console({ stdout: output, stderr: errors });

logger.log("Tout se passe bien jusqu'ici...");
logger.error("Oups, une erreur !");

