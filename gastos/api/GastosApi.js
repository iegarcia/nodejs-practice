const Gasto = require("../models/gasto");
const Validator = require("../validar/Validator");
const CustomError = require("../errors/CustomError");
const DatabaseFactory = require("../database/DatabaseFactory");

class GastosApi {
  constructor() {
    this.database = DatabaseFactory.getDB();
    this.database.isConnected();
  }

  cargarGasto(data) {
    try {
      if (Validator.validate(data)) {
        Validator.contactAdministration(data.amount);
      }
      const nuevoGasto = new Gasto({
        amount: data.amount,
        description: data.description,
      });
      nuevoGasto.save();
      return nuevoGasto;
    } catch (error) {
      throw new CustomError(500, error.errorMsg);
    }
  }

  async listarGastos(fecha) {
    const f1 = new Date(fecha.desde);
    const f2 = new Date(fecha.hasta);
    try {
      if (!Validator.validatePeriod(f1, f2)) {
        throw new CustomError(400, "El periodo valido es de 12 meses");
      }
      const gastos = await Gasto.find()
        .where({
          "date.month": { $gte: f1.getMonth(), $lte: f2.getMonth() },
        })
        .and({
          "date.year": { $gte: f1.getFullYear(), $lte: f2.getFullYear() },
        });
      console.log(gastos);
      return gastos;
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new GastosApi();
