const mongoose = require('mongoose');

const ToyCarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  color: {
      type: String,
      required: true
  },
  year: {
      type: Date
  }
});


const ToyCar = mongoose.model('ToyCar', ToyCarSchema);

module.exports = ToyCar;