const TurnosDao = require("./TurnosDao");
const CustomError = require("../error/CustomError");

//Componente para manipulado de datos en memoria
class TurnosDaoRam extends TurnosDao {
  constructor() {
    super();
    this.turnos = [
      {
        day: 1,
        month: 2,
        hour: 13,
        name: "pepe",
        phone: "123456",
        service: "cotizacion",
      },
    ]; //Inicializamos array vacio
  }

  async add(reserva) {
    //Colocar datos dentro de ese array
    try {
      let nuevaReserva = reserva;
      this.turnos.push(reserva);

      return nuevaReserva;
    } catch (error) {
      throw new CustomError(500, "No se puedo cargar la reserva");
    }
  }

  async getAll() {
    return this.turnos;
  }

  async getByMonth(month) {
    try {
      let reporteMensual = this.turnos.filter((e) => e.month == month);
      let reporteMensualConCantidades = {
        programado: 0,
        cotizacion: 0,
        auxiliar: 0,
      };

      reporteMensual.forEach((r) => {
        if (r.service == "programado") {
          reporteMensualConCantidades.programado++;
        } else if (r.service == "auxiliar") {
          reporteMensualConCantidades.auxiliar++;
        } else if (r.service == "cotizacion") {
          reporteMensualConCantidades.cotizacion++;
        }
      });

      return reporteMensualConCantidades;
    } catch (error) {
      throw new CustomError(500, "Ocurrio un error");
    }
  }
}

module.exports = TurnosDaoRam;
