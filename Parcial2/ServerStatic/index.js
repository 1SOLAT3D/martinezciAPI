const express = require ("express");
const basicAuth = require('express-basic-auth')
const path = require("path");
const app = express();

app.use(basicAuth({
    users: {'admin': 'clave'}
}))

app.get("/", (req, res, next) => {
    res.send("Servidor Express contestando a GET");
})

app.use("/public", express.static(path.join(__dirname, 'public')))

app.listen(3000, () => {
    console.log("Servidor escuchando en Puerto 3000");
})