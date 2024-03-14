const express = require("express");
const path = require("path");
const multer = require("multer");

const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const upload = multer({ storage: storage });

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'));

app.get("/", (req, res, next) => {
    res.render('index.pug', { nombre: "Gianfranco", apellido: "Martínez" });
})

app.post("/upload", upload.single('archivo'), (req, res) => {
    res.send("Archivo cargado exitosamente");
});

app.listen(3000, () => {
    console.log("Servidor escuchando en Puerto 3000");
})
