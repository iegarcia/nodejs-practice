class Estudiante {
  constructor(name, dni, mail, code) {
    this.id = Math.floor(Math.random() * 9);
    this.setName(name); // string no vacio
    this.setDni(dni); // string solo numericos
    this.setMail(mail); // string no vacio
    this.setCode(code); // "01", "02", "03"
    this.aprobado = false;
  }

  setName(name) {
    if (name != "") {
      this.name = name;
    }
  }

  setDni(dni) {
    let regex = /^[0-9]*$/;
    if (regex.test(dni)) {
      this.dni = dni;
    }
  }

  setMail(mail) {
    if (mail != "") {
      this.mail = mail;
    }
  }

  setCode(code) {
    const UNO = "01";
    const DOS = "02";
    const TRES = "03";

    if (code === UNO || code === DOS || code === TRES) {
      this.code = code;
    }
  }
}

module.exports = Estudiante;
