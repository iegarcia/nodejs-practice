const VEGAN = "vegano";
const ONMIVORO = "omnivoro";
const TACC_FREE = "sin tacc";

class Reserva {
  constructor(date, name, phone, quantity, menu) {
    this.date = new Date(date);
    this.setName(name); // string no vacio
    this.setPhone(phone); // string solo numericos
    this.setQuantity(quantity);
    this.setMenu(menu); // vegano, omnivoro, sin tacc
  }

  setName(name) {
    if (name != "") {
      this.name = name;
    }
  }

  setQuantity(quantity) {
    if (quantity > 0) {
      this.quantity = quantity;
    }
  }

  setPhone(phone) {
    let regex = /^[0-9]*$/;
    if (regex.test(phone)) {
      this.phone = phone;
    }
  }

  setMenu(menu) {
    if (menu == VEGAN || menu == ONMIVORO || menu == TACC_FREE) {
      this.menu = menu;
    }
  }
}

module.exports = Reserva;
