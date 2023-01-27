const express = require("express");
const TurnosApi = require("../api/TurnosApi");

function getTurnosRouter() {
  const router = express.Router();
  //Al crear las rutas tambien creo la conexion con el componente que se va a encargar de manipular el almacenaje de los datos
  const turnosApi = new TurnosApi();

  router.get("/", async (req, res) => {
    try {
      const listado = await turnosApi.listar();
      res.status(200).json(listado);
    } catch (error) {
      res.status(error.status).json(error);
    }
  });

  router.post("/", async (req, res) => {
    let day = req.body.day;
    let month = req.body.month;
    let hour = req.body.hour;
    let name = req.body.name;
    let phone = req.body.phone;
    let service = req.body.service;

    try {
      //Invoco al almacenaje pasandole los datos a almacenar
      const nuevoTurno = await turnosApi.reservar(
        day,
        month,
        hour,
        name,
        phone,
        service
      );
      res.status(201).json(nuevoTurno);
    } catch (error) {
      res.status(error.status).json(error);
    }
  });

  router.get("/:mes", async (req, res) => {
    try {
      const reporte = await turnosApi.obtenerReportePorMes(req.params.mes);
      if (reporte.length === 0) {
        res.status(204).json("No content");
      } else {
        res.status(200).json(reporte);
      }
    } catch (error) {
      res.status(error.status).json(error);
    }
  });

  return router;
}

module.exports = getTurnosRouter;
