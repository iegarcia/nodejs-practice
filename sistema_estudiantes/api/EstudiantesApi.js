const EstudianteDaoFactory = require("../dao/EstudianteDaoFactory");
const Estudiante = require("../models/Estudiante");
const CustomError = require("../errors/CustomError");

class EstudianteApi {
  constructor() {
    this.estudiantesDao = EstudianteDaoFactory.getDao();
  }

  async cargarEstudiante(name, dni, mail, code) {
    try {
      const nuevoEstudiante = new Estudiante(name, dni, mail, code);

      const estudianteAgregado = await this.estudiantesDao.add(nuevoEstudiante);

      return estudianteAgregado;
    } catch (error) {
      throw new CustomError(error.errorMsg);
    }
  }

  async aprobarCursada(dni) {
    try {
      const cursada = await this.estudiantesDao.getByDni(dni);
      return cursada;
    } catch (error) {
      throw new CustomError(error.errorMsg);
    }
  }
}

module.exports = EstudianteApi;
