const TurnosDaoFactory = require("../dao/TurnosDaoFactory");
const Turno = require("../models/Turno");

class TurnosApi {
  constructor() {
    //Al crear el almacenaje le pido a mi programa que traiga el metodo de almacenaje que corresponda.
    this.turnosDao = TurnosDaoFactory.getDao();
  }

  async reservar(day, month, hour, name, phone, service) {
    //Creo una nueva instancia de mi modelo con los datos enviados
    const nuevaReserva = new Turno(day, month, hour, name, phone, service);

    //Invoco al almacenaje
    const reservaHecha = await this.turnosDao.add(nuevaReserva);

    return reservaHecha;
  }

  async listar() {
    const listado = await this.turnosDao.getAll();

    return listado;
  }

  async obtenerReportePorMes(mes) {
    const reporte = await this.turnosDao.getByMonth(mes);

    return reporte;
  }
}

module.exports = TurnosApi;
