const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  carId: { type: String, required: true },
  customerName: { type: String, required: true },
  hours: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  phone: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);