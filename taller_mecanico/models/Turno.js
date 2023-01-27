class Turno {
  constructor(day, month, hour, name, phone, service) {
    this.setDay(day); // entero positivo
    this.setMonth(month); // entero entre 1 y 12
    this.setHour(hour); // entero entre 0 y 23
    this.setName(name); // string no vacio
    this.setPhone(phone); // string solo numericos
    this.setService(service); // programada, auxilio o cotizacion
  }

  setDay(day) {
    if (day > 0) {
      this.day = day;
    }
  }

  setMonth(month) {
    if (month >= 1 && month <= 12) {
      this.month = month;
    }
  }

  setHour(hour) {
    if (hour >= 0 && hour <= 23) {
      this.hour = hour;
    }
  }

  setName(name) {
    if (name != "") {
      this.name = name;
    }
  }

  setPhone(phone) {
    let regex = /^[0-9]*$/;
    if (regex.test(phone)) {
      this.phone = phone;
    }
  }

  setService(service) {
    if (
      service == "programado" ||
      service == "auxilio" ||
      service == "cotizacion"
    ) {
      this.service = service;
    }
  }
}

module.exports = Turno;
