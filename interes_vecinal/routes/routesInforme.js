const express = require("express");
const { Error } = require("mongoose");

const router = express.Router();
const Informe = require("../models/Informe");

const validator = require("../validations/validator");

router.get("/", async (req, res) => {
  try {
    const informes = await Informe.find();
    res.json(informes);
  } catch (e) {
    res.json({ message: e });
  }
});

router.get("/ultimosInformes/:id", async (req, res) => {
  try {
    if (validator.validateNumber(req.params.id)) {
      const ultimosInformes = await Informe.find()
        .sort({ date: "desc" })
        .limit(Number(req.params.id));
      res.status(200).json(ultimosInformes);
    } else {
      res.status(400).json("Ingrese un numero mayor a cero");
    }
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post("/cargarInforme", async (req, res) => {
  if (!validator.validateDescription(req.body.description)) {
    const informe = new Informe({
      description: req.body.description,
    });
    try {
      const load = await informe.save();
      res.status(200).json(load);
    } catch (e) {
      res.status(500).json(e);
    }
  } else {
    throw new Error("Una descripcion es requerida");
  }
});

module.exports = router;
