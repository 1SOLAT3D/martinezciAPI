const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("tiny"));
app.use(express.json());

app.get("/alumnos", (req, res) => {
  console.log(req.query);
  res.send("Respuesta GET del Servidor Express");
});

app.get("/maestros/:carrera", (req, res) => {
  console.log(req.params.carrera);
  res.send("Respuesta GET del Servidor Express");
});

app.get("/administrativos", (req, res) => {
  for (const campo in req.body) {
      console.log(req.body[campo]);
  }

  res.send("Respuesta GET del Servidor Express");
});

app.listen(8080, () => {
  console.log("Servidor escuchando en Puerto 8080");
});
