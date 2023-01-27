const CustomError = require("../errors/CustomError");

class EstudianteDao {
  async add() {
    throw new CustomError(500, "falta implementar add!");
  }
  async getByDni() {
    throw new CustomError(500, "falta implementar getByDni!");
  }
}

module.exports = EstudianteDao;
