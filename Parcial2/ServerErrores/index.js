const express = require("express");
const app = express();

app.get("/maestros", (req, res, next) => {
  try {
    if (true) {
      res.send("Contestando a GET Maestros");
    } else {
      throw new Error("Algo salió mal");
    }
  } catch (error) {
    next(error);
  }
});

app.get("/alumnos", (req, res, next) => {
  try {
    throw new Error("Ocurrió un error");
  } catch (e) {
    next(e);
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`Error interno del servidor: ${err.message}`);
});

app.listen(8080, () => {
  console.log("Servidor escuchando en Puerto 8080");
});
