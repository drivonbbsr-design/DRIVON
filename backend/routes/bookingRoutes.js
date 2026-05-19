const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Car = require('../models/Car');

// BOOK CAR
router.post('/', async (req, res) => {
  try {
    const { carId, customerName, hours, phone } = req.body;

    const car = await Car.findById(carId);
    if (!car) return res.status(404).json({ error: "Car not found" });

    const totalPrice = car.rentPerHour * hours;

    const booking = new Booking({
      carId,
      customerName,
      hours,
      totalPrice,
      phone
    });

    await booking.save();

    res.json({
      message: "Booking Successful",
      totalPrice,
      booking
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;