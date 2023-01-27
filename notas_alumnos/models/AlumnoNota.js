const mongoose = require("mongoose");
const { Schema } = mongoose;

const AlumnoNota = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  nota: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("AlumnoNota", AlumnoNota);
