const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askForInput() {
  rl.question("Ma saisie : ", (input) => {
    if (input.toLowerCase() === "exit") {
      console.log("Au revoir !");
      rl.close();
    } else {
      console.log(`Vous avez écrit : ${input}`);
      askForInput();  
    }
  });
}

askForInput();  
