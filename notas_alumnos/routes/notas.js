const express = require("express");
const router = express.Router();

const Nota = require("../api/NotaApi");

router.get("/", async (req, res) => {
  try {
    const notas = await Nota.listarNotas();
    res.status(200).json(notas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/ingresarNota", (req, res) => {
  try {
    let notaAlumno = Nota.cargarNota(req.query);
    if (notaAlumno) {
      res.status(200).json("ok");
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.get("/consulta/", (req, res) => {
  res.status(404).json("Ingrese un apellido para realizar la busqueda");
});

router.get("/consulta/:apellido", async (req, res) => {
  try {
    const nota = await Nota.findBySurname(req.params.apellido);
    res.status(200).json(nota);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/promedio", async (req, res) => {
  try {
    const promedio = await Nota.getAverage();
    res.status(200).json({
      promedio: promedio,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
