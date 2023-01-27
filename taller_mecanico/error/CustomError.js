class CustomError {
  constructor(estado, descripcion) {
    this.status = estado;
    this.errorMsg = descripcion;
  }
}

module.exports = CustomError;
