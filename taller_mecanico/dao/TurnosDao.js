const CustomError = require("../error/CustomError.js");

class TurnosDao {
  async add() {
    throw new CustomError(500, "falta implementar add!");
  }
  async getAll() {
    throw new CustomError(500, "falta implementar getByAmount!");
  }
}

module.exports = TurnosDao;
