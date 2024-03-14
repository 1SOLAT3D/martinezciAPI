const express = require("express");
const mysql = require("mysql2/promise");
const rte = require('./routes/lec2023');
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use('/lec2023', rte.router);

app.listen(8080, () => {
  console.log("Servidor Express escuchando en el puerto 8080");
});
