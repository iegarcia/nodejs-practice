const EstudianteDao = require("./EstudianteDaoRam");

class EstudianteDaoFactory {
  static getDao() {
    return new EstudianteDao();
  }
}

module.exports = EstudianteDaoFactory;
