const express = require("express");

const app = express();

const https = require("node:https");
const fs = require("node:fs");

const options = {
  key: fs.readFileSync(__dirname + '/Certificado/key.pem'),
  cert: fs.readFileSync(__dirname + '/Certificado/cert.pem'),
};

app.get("/", function (req, res) {
  res.send("hello, world!");
});

https
  .createServer(options, (req, res) => {
    res.writeHead(200);
    res.end("Conexión Segura\n");
  })
  .listen(8000);
