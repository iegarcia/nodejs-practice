const express = require("express");

function getGastosRouter() {
  const router = express.Router();
  const GastosApi = require("../api/GastosApi");

  //http://localhost:3000/gastos?desde=2021-1&hasta=2021-12 - Obtener gastos en base a periodo
  router.get("/", async (req, res) => {
    try {
      const listaGastos = await GastosApi.listarGastos(req.query);
      res.status(200).json(listaGastos);
    } catch (error) {
      res.status(error.status).json(error.errorMsg);
    }
  });
  //http://localhost:3000/gastos/cargarGasto - Cargar nuevo gasto
  router.post("/cargarGasto", (req, res) => {
    try {
      const gastoCargado = GastosApi.cargarGasto(req.body);
      res.status(200).json(gastoCargado);
    } catch (error) {
      res.status(error.status).json(error.errorMsg);
    }
  });

  return router;
}

module.exports = getGastosRouter;
