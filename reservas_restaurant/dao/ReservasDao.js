const CustomError = require("../errors/CustomError");

class ReservasDao {
  async add() {
    throw new CustomError(500, "falta implementar add!");
  }
  async getAll() {
    throw new CustomError(500, "falta implementar getByAmount!");
  }
}

module.exports = ReservasDao;
