const CustomError = require("../errors/CustomError");
const EstudianteDao = require("./EstudianteDao");

class EstudianteDaoRam extends EstudianteDao {
  constructor() {
    super();
    this.estudiantes = [];
  }

  async add(nuevoEstudiante) {
    try {
      const estudianteValido = this.validarEstudiante(nuevoEstudiante);

      if (estudianteValido) {
        this.estudiantes.push(nuevoEstudiante);
      } else {
        throw new CustomError("Estudiante o curso no valido");
      }
      return nuevoEstudiante;
    } catch (error) {
      throw new CustomError(error.errorMsg);
    }
  }

  async getByDni(dni) {
    try {
      const estudianteValido = this.estudiantes.find(
        (e) => e.dni === dni && e.aprobado == false
      );

      if (estudianteValido != undefined) {
        estudianteValido.aprobado = true;
      } else {
        throw new CustomError(
          "Ocurrio un error: Estudiante no valido o cursada ya aprobada"
        );
      }
      return estudianteValido;
    } catch (error) {
      throw new CustomError(error.errorMsg);
    }
  }

  validarEstudiante(estudiante) {
    let cursoValido = this.validarCurso(estudiante.code);
    let dniExistente = this.validarDni(estudiante.dni, estudiante.code);
    return cursoValido && dniExistente;
  }

  validarCurso(curso) {
    const UNO = "01";
    const DOS = "02";
    const TRES = "03";

    return curso === UNO || curso === DOS || curso === TRES;
  }

  validarDni(dni, code) {
    let res = true;
    let estudiante = this.estudiantes.find(
      (e) => e.dni === dni && e.code == code
    );
    if (estudiante != undefined) {
      res = false;
    }
    return res;
  }
}

module.exports = EstudianteDaoRam;
