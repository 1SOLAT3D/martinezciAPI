const express = require("express");
const mysql = require("mysql2/promise");

const router = express.Router();

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "lec2023",
    connectionLimit: 10,
  });
  
  function validarIdEquipo(req, res, next) {
    const idEquipo = req.params.idEquipo;
    if (!idEquipo || isNaN(idEquipo)) {
      return res
        .status(400)
        .json({ mensaje: "El parámetro idEquipo es inválido" });
    }
    next();
  }

router.get("/lec2023", async (req, res) => {
  try {
    const [results, fields] = await pool.execute("SELECT * FROM equipo");
    res.json(results);
  } catch (error) {
    res.json(error);
  }
});

router.get("/lec2023/:idEquipo", validarIdEquipo, async (req, res) => {
  try {
    const [results, fields] = await pool.execute(
      `SELECT * FROM equipo WHERE id=${req.params.idEquipo}`
    );

    return results.length === 0
      ? res.status(404).json({ resultado: "El equipo no fue encontrado" })
      : res.json(results);
  } catch (error) {
    res.json(error);
  }
});

router.delete(
  "/lec2023/equipo/:idEquipo",
  validarIdEquipo,
  async (req, res) => {
    try {
      const [results, fields] = await pool.execute(
        `DELETE FROM equipo WHERE id=${req.params.idEquipo}`
      );

      return results.affectedRows === 1
        ? res.json({ resultado: "Equipo borrado" })
        : res.status(404).json({ resultado: "El equipo no fue encontrado" });
    } catch (error) {
      res.json(error);
    }
  }
);

router.post("/lec2023", async (req, res) => {
  try {
    const { nombre, acronimo, pais } = req.body;
    const sql = `INSERT INTO equipo (nombre, acronimo, pais) VALUES (?, ?, ?)`;

    if (!nombre || !acronimo || !pais) {
      return res
        .status(400)
        .json({ mensaje: "Faltan campos obligatorios en la solicitud" });
    }

    const [results, fields] = await pool.execute(sql, [nombre, acronimo, pais]);
    res.json(results);
  } catch (error) {
    res.json(error);
  }
});

router.put("/lec2023/:idEquipo", validarIdEquipo, async (req, res) => {
  try {
    const { nombre, acronimo, pais } = req.body;
    const sql = `UPDATE equipo SET nombre=?, acronimo=?, pais=? WHERE id=?`;

    if (!nombre || !acronimo || !pais) {
      return res
        .status(400)
        .json({ mensaje: "Faltan campos obligatorios en la solicitud" });
    }

    const [results, fields] = await pool.execute(sql, [
      nombre,
      acronimo,
      pais,
      req.params.idEquipo,
    ]);

    return results.affectedRows === 1
      ? res.json({ resultado: "Equipo actualizado" })
      : res.status(404).json({ resultado: "El equipo no fue encontrado" });
  } catch (error) {
    res.json(error);
  }
});

router.patch("/lec2023/:idEquipo", validarIdEquipo, async (req, res) => {
  try {
    const { nombre, acronimo, pais } = req.body;
    const sql = `UPDATE equipo SET nombre=?, acronimo=?, pais=? WHERE id=?`;

    if (!nombre && !acronimo && !pais) {
      return res.status(400).json({ mensaje: "No hay campos para actualizar" });
    }

    const [results, fields] = await pool.execute(sql, [
      nombre || null,
      acronimo || null,
      pais || null,
      req.params.idEquipo,
    ]);

    return results.affectedRows === 1
      ? res.json({ resultado: "Equipo actualizado" })
      : res.status(404).json({ resultado: "El equipo no fue encontrado" });
  } catch (error) {
    res.json(error);
  }
});
module.exports = { router, validarIdEquipo };