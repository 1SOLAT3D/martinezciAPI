const express = require("express");

const app = express();

const https = require("node:https");
const fs = require("node:fs");

const options = {
  key: fs.readFileSync("test/fixtures/keys/agent2-key.pem"),
  cert: fs.readFileSync("test/fixtures/keys/agent2-cert.pem"),
};

app.get("/", function (req, res) {
  res.send("hello, world!");
});

https
  .createServer(options, (req, res) => {
    res.writeHead(200);
    res.end("hello world\n");
  })
  .listen(8000);
