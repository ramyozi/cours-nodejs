// CONSIGNE
//
// Ce programme demande à l'utilisateur d'entrer une phrase pour entamer le dialogue, puis il répond

const EventEmitter = require("events");
const { createInterface } = require("readline");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Exercice ludique: Système de chat avec EventEmitter
class Chat extends EventEmitter {
  sendMessage(user, message) {
    this.emit("message", user, message);
  }
}

const chat = new Chat();
chat.on("message", (user, message) => {
  console.log(`[${user}]: ${message}`);
});

console.log("");

rl.question("Aller, dis bonjour Coco : ", (greet) => {
  chat.sendMessage("Coco", greet);
  chat.sendMessage("Jaco", "Salut à toi aussi Coco!");
  rl.close();
});
