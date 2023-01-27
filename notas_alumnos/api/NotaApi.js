const AlumnoNota = require("../models/AlumnoNota");
const CustomError = require("../errors/CustomError");

class NotaApi {
  async listarNotas() {
    let datos;
    try {
      datos = await AlumnoNota.find();
      console.log(datos);
    } catch (error) {
      throw new CustomError(500, error.message);
    }
    const notas = datos;
    return notas;
  }

  // router.get("/ingresarNota", (req, res) => {
  cargarNota(data) {
    let notaAlumno = new AlumnoNota({
      nombre: data.nombre,
      apellido: data.apellido,
      nota: data.nota,
    });
    try {
      notaAlumno.save();
    } catch (error) {
      throw new CustomError(500, error.message);
    }
    return notaAlumno.isNew;
  }

  // router.get("/consulta/:apellido", async (req, res) => {
  async findBySurname(surname) {
    let dato;
    try {
      dato = await AlumnoNota.find({
        apellido: surname,
      }).exec();
    } catch (error) {
      throw new CustomError(500, error.message);
    }
    const alumno = dato;
    return alumno;
  }

  async getAverage() {
    let promedio = 0;
    try {
      let contador = 0;
      const notas = await this.listarNotas();
      for (let index = 0; index < notas.length; index++) {
        const element = notas[index];
        contador += element.nota;
      }
      promedio = contador / notas.length;
    } catch (error) {
      throw new CustomError(500, error.message);
    }
    return promedio;
  }
}

module.exports = new NotaApi();
