const fs = require("fs");

// Exemple 1: Lecture d'un fichier
const filePath = "exemple.txt";
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Erreur lors de la lecture du fichier:", err);
    return;
  }
  console.log("Contenu du fichier:", data);
});

// Exemple 2: Écriture dans un fichier
const contentToWrite = "Contenu à écrire dans le fichier.";
const newFilePath = "nouveau.txt";
fs.writeFile(newFilePath, contentToWrite, (err) => {
  if (err) {
    console.error("Erreur lors de l'écriture dans le fichier:", err);
    return;
  }
  console.log("Écriture réussie dans le fichier", newFilePath);
});

// Exemple 3: Suppression d'un fichier
const fileToDelete = "a-supprimer.txt";
fs.unlink(fileToDelete, (err) => {
  if (err) {
    console.error("Erreur lors de la suppression du fichier:", err);
    return;
  }
  console.log("Fichier supprimé avec succès:", fileToDelete);
});
