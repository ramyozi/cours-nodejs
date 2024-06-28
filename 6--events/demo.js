const EventEmitter = require("events");

// Exemple 1: Création d'un émetteur d'événements
const myEmitter = new EventEmitter();

// Ajout d'un écouteur pour l'événement 'myEvent'
myEmitter.on("myEvent", () => {
  console.log("Un événement a été émis!");
});
myEmitter.emit("myEvent");

// Exemple 2: Passage d'arguments aux écouteurs d'événements
myEmitter.on("greet", (name) => {
  console.log(`Bonjour, ${name}!`);
});
myEmitter.emit("greet", "Alice");

// Exemple 3: Gestion des erreurs avec EventEmitter
myEmitter.on("error", (err) => {
  console.error("Erreur émise:", err);
});
myEmitter.emit("error", new Error("Ceci est une erreur!"));
