const { resolve, basename, extname } = require("path");

console.log(resolve("."));
console.log(basename(__filename));
console.log(extname("coco.txt"));

// Variables fournies par NodeJS pour chaque fichier (module)
console.log(require, module, __filename, __dirname, exports);
