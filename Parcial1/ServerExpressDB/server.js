const express = require("express");
const mysql = require("mysql2");
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'lec2023',
  password: ''
});

app.get("/equipo", (req, res, next) => {
  let query = "SELECT * FROM equipo";

  if (req.query.nombre) {
    query += " WHERE nombre = ?";
  }

  connection.query(query, [req.query.nombre], (error, results, fields) => {
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
