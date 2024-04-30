const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();

const secretKey = "123456";

app.use(bodyParser.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "usuario" && password === "123456") {
    const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.status(401).json({ error: "Usuario o contraseña incorrectos" });
  }
});

function verifyToken(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ error: "Token no proporcionado" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Token inválido" });
    }
    req.user = decoded;
    next();
  });
}

app.get("/protected", verifyToken, (req, res) => {
  res.json({ message: "Ruta protegida", user: req.user });
});

app.listen(3000, () => {
  console.log("Servidor Express escuchando en el puerto 3000");
});
