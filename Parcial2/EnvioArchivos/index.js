const express = require("express");
const path = require("path");

const app = express();

app.get("/download", (req, res, next) => {
  res.download(path.join(__dirname, 'uploads/Solary.jpg'));
});

app.get("/send", (req, res, next) => {
    res.sendFile(path.join(__dirname, 'uploads/Solary.jpg'));
  });

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
