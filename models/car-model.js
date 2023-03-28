const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: 1,
    maxLength: 80,
    required: true,
  },
  price: {
    type: String,
    minLength: 1,
    maxLength: 80,
    required: true,
  },
  background_img: {
    type: String,
    minLength: 1,
    maxLength: 1024,
    required: true,
  },
  car_img: {
    type: String,
    minLength: 1,
    maxLength: 1024,
    required: true,
  },
  detail: {
    month: String,
    km: String,
    cc: String,
    hp: String,
    door: String,
    engine: String,
    oil: String,
    gear: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Car", carSchema);
