const express = require("express");
const EstudianteApi = require("../api/EstudiantesApi");

function getEstudianteRouter() {
  const router = express.Router();
  const estudianteApi = new EstudianteApi();

  router.post("/", async (req, res) => {
    let name = req.body.name;
    let dni = req.body.dni;
    let mail = req.body.mail;
    let code = req.body.code;

    try {
      const nuevoEstudiante = await estudianteApi.cargarEstudiante(
        name,
        dni,
        mail,
        code
      );
      res.status(201).json(nuevoEstudiante);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  router.get("/:dni", async (req, res) => {
    try {
      const reporte = await estudianteApi.aprobarCursada(req.params.dni);
      res.status(200).json(reporte);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  return router;
}

module.exports = getEstudianteRouter;
