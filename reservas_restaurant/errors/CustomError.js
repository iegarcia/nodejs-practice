class CustomError {
  constructor(estado, descripcion) {
    this.estado = estado;
    this.errorMsg = descripcion;
  }
}

module.exports = CustomError;
