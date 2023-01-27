const ReservasDao = require("./ReservasDaoRam");

class ReservasDaoFactory {
  static getDao() {
    return new ReservasDao();
  }
}

module.exports = ReservasDaoFactory;
