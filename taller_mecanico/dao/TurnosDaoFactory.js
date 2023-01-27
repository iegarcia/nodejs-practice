const TurnosDaoRam = require("./TurnosDaoRam");

//Componente encargado de crear el almacenaje correspondiente
class TurnosDaoFactory {
  static getDao() {
    return new TurnosDaoRam();
  }
}

module.exports = TurnosDaoFactory;
