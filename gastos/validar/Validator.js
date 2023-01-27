const nodemailer = require("nodemailer");
const CustomError = require("../errors/CustomError");
require("dotenv/config");

class Validator {
  constructor() {
    this.maxAmountValid = 10000;
  }

  greaterThanCero(amount) {
    let resultado = amount > 0;
    if (!resultado) {
      throw new CustomError(400, "El monto ingresado es incorrecto");
    }
  }
  lowerThan128Chars(description) {
    let resultado = description.length >= 128;
    if (resultado) {
      throw new CustomError(
        400,
        "Ha excedido la cantidad valida de caracteres"
      );
    }
  }

  validate(data) {
    this.greaterThanCero(data.amount);
    this.lowerThan128Chars(data.description);
    return data.amount > this.maxAmountValid;
  }

  // 1000 milisegundos = 1 seg
  // 60 segs = 1 min
  // 60 mins = 1hr
  // 24 hrs = 1 dia
  // 30 dias = 1 mes
  validatePeriod(f1, f2) {
    let diff = f2.getTime() - f1.getTime();
    let result = diff / (1000 * 60 * 60 * 24 * 30);
    return result <= 12;
  }

  contactAdministration(monto) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASS,
      },
    });

    const mailOptions = {
      from: process.env.USER_EMAIL,
      to: "evodderrep-7504@yopmail.com",
      subject: "Validar monto",
      text: `En el dia de la fecha se registro la solicitud de una gasto con un monto de ${monto} pesos, el cual supera el monto valido de ${this.maxAmountValid}. Favor de proceder con la revision de la misma. Saludos.`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      error
        ? console.log(error)
        : console.log("Email enviado: " + info.response);
    });
  }
}

module.exports = new Validator();
