const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Parametros como cadena de consulta
app.get("/alumnos", (req, res) => {
  console.log(req.query);
  res.send("Respuesta GET del Servidor Express");
});

// Parametros como parte de la ruta
app.get("/maestros/:carrera", (req, res) => {
  console.log(req.params.carrera);
  res.send("Respuesta GET del Servidor Express");
});

// Parametros como JSON en el body
app.get("/administrativos", (req, res) => {
  for (const campo in req.body) {
    console.log(req.body[campo]);
  }

  res.send("Respuesta GET del Servidor Express");
});

// Recepcion de datos de un Formulario
app.get("/prefectos", (req, res) => {
  console.log(req.body);
  res.send("Respuesta GET del Servidor Express");
});

app.listen(8080, () => {
  console.log("Servidor escuchando en Puerto 8080");
});
