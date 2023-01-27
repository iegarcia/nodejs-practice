const ReservasDao = require("./ReservasDao");

class ReservasDaoRam extends ReservasDao {
  constructor() {
    super();
    this.reservas = [];
  }

  async add(nuevaReserva) {
    try {
      this.reservas.push(nuevaReserva);
      return nuevaReserva;
    } catch (error) {
      throw new CustomError(500, "No se puedo cargar la reserva");
    }
  }

  async getAll() {
    return this.reservas;
  }

  async getData(key) {
    let cantComensales = [0, 0, 0];
    const tipoMenu = ["vegano", "omnivoro", "tacc_free"];

    const found = this.reservas.find((r) => r.date == key.toISOString());
    const idx = this.reservas.indexOf(found);

    for (let i = idx; i < this.reservas.length; i++) {
      cantComensales[tipoMenu.indexOf(this.reservas[i].menu)] +=
        this.reservas[i].quantity;
    }

    const comensalesPorMenu = {
      vegano: cantComensales[0],
      omnivoro: cantComensales[1],
      tacc_free: cantComensales[2],
    };

    return comensalesPorMenu;
  }
}

module.exports = ReservasDaoRam;
