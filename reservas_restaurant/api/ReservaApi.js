const ReservasDaoFactory = require("../dao/ReservasDaoFactory");
const Reserva = require("../models/Reserva");
const CustomError = require("../errors/CustomError");

class ReservaApi {
  constructor() {
    this.reservasDao = ReservasDaoFactory.getDao();
  }

  async cargarReserva(date, name, phone, quantity, menu) {
    try {
      const nuevaReserva = new Reserva(date, name, phone, quantity, menu);

      const reservaAgregada = await this.reservasDao.add(nuevaReserva);

      return reservaAgregada;
    } catch (error) {
      throw new CustomError(500, error.message);
    }
  }

  async mostrarReserva() {
    return await this.reservasDao.getAll();
  }

  async obtenerReporte(fecha) {
    try {
      const reporte = await this.reservasDao.getData(fecha);
      return reporte;
    } catch (error) {
      throw new CustomError(500, error.message);
    }
  }
}

module.exports = ReservaApi;
