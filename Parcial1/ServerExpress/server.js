const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Respuesta GET del Servidor Express");
});

app.post("/", (req, res) => {
    res.send("Respuesta POST del Servidor Express");
  });

app.listen(8080, () => {
  console.log("Servidor escuchando en Puerto 8080");
});
