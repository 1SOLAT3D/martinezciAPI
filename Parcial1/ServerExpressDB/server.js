const express = require("express");
const mysql = require("mysql2");
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'worlds2021',
  password: ''
});

app.get("/equipo", (req, res, next) => {
  connection.query("SELECT * FROM equipo", (error, results, fields) => {
    if (error) {
      console.error("Error al tratar de consultar: ", error);
      res.status(500).send("Error del servidor");
      return;
    }

    res.send(results);
  });
});

app.get("/equipo/:acronimo", (req, res, next) => {
  const acronimo = req.params.acronimo;

  connection.query("SELECT * FROM equipo WHERE acronimo = ?", [acronimo], (error, results, fields) => {
    if (error) {
      console.error("Error al tratar de consultar: ", error);
      res.status(500).send("Error del servidor");
      return;
    }

    res.send(results);
  });
});

app.post("/", (req, res) => {
  res.send("Respuesta POST del Servidor Express");
});

app.listen(8080, () => {
  console.log("Servidor escuchando en Puerto 8080");
});
