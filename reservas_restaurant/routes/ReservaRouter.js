const express = require("express");
const ReservaApi = require("../api/ReservaApi");

function getReservasRouter() {
  const router = express.Router();
  const reservasApi = new ReservaApi();

  router.get("/", (req, res) => {
    try {
      const reservas = reservasApi.mostrarReserva();
      res.status(200).json(reservas);
    } catch (error) {
      res.status(error.status).json(error);
    }
  });

  router.post("/cargar", async (req, res) => {
    let date = req.body.date;
    let name = req.body.name;
    let phone = req.body.phone;
    let quantity = req.body.quantity;
    let menu = req.body.menu;

    try {
      const nuevaReserva = await reservasApi.cargarReserva(
        date,
        name,
        phone,
        quantity,
        menu
      );
      res.status(200).json(nuevaReserva);
    } catch (error) {
      res.status(error.status).json(error);
    }
  });

  router.get("/reporte/:fecha", async (req, res) => {
    let fecha = new Date(req.params.fecha);
    try {
      const reporte = await reservasApi.obtenerReporte(fecha);
      res.status(200).json(reporte);
    } catch (error) {
      res.status(error.status).json(error);
    }
  });

  return router;
}
module.exports = getReservasRouter;
