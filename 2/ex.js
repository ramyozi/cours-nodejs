const rl = require('./init-read-line');

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
