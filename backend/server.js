const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

// Load cars from JSON file
let cars = require('./data/cars.json');
let bookings = [];

// ================= CAR ROUTES =================

// Get all cars
app.get('/cars', (req, res) => {
  res.json(cars);
});

// Add new car
app.post('/cars', (req, res) => {
  const newCar = { id: Date.now(), ...req.body };
  cars.push(newCar);

  fs.writeFileSync('./data/cars.json', JSON.stringify(cars, null, 2));

  res.json(newCar);
});

// Delete car
app.delete('/cars/:id', (req, res) => {
  cars = cars.filter(car => car.id != req.params.id);

  fs.writeFileSync('./data/cars.json', JSON.stringify(cars, null, 2));

  res.json({ message: "Car deleted" });
});

// ================= BOOKING ROUTES =================

// Book car
app.post('/book', (req, res) => {
  const { carId, customerName, hours, phone } = req.body;

  const car = cars.find(c => c.id == carId);
  if (!car) return res.status(404).json({ error: "Car not found" });

  const totalPrice = car.rentPerHour * hours;

  const booking = {
    id: Date.now(),
    carId,
    customerName,
    hours,
    phone,
    totalPrice
  };

  bookings.push(booking);

  res.json({
    message: "Booking Successful",
    booking
  });
});

// Get all bookings
app.get('/book', (req, res) => {
  res.json(bookings);
});

// ================= START SERVER =================
app.listen(5000, () => {
  console.log("Server running on port 5000");
});