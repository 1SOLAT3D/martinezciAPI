const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const app = express();

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

app.use(morgan('combined', { stream: accessLogStream }));

app.get("/", (req, res, next) => {
  res.send("Respuesta GET del Servidor Express");
});

app.post("/", (req, res, next) => {
  res.send("Respuesta POST del Servidor Express");
});

app.listen(8080, () => {
  console.log("Servidor escuchando en Puerto 8080");
});
