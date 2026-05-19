import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const cars = [
  "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb",
  "https://images.unsplash.com/photo-1609521263047-f8f205293f24",
  "https://images.unsplash.com/photo-1619767886558-efdc259cde1a"
];

const availableCars = [
  { id: 1, name: "Thar", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70" },
  { id: 2, name: "Scorpio", image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8" },
  { id: 3, name: "Nexon", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d" },
  { id: 4, name: "Venue", image: "https://images.unsplash.com/photo-1549924231-f129b911e442" },
  { id: 5, name: "Sonet", image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c" }
];

function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [index, setIndex] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    vehicle: "",
    date: "",
    travelers: "",
    purpose: "",
    details: ""
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cars.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (location.hash === "#booking") {
      const section = document.getElementById("booking");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const sendToWhatsApp = () => {
    if (!formData.name || !formData.phone || !formData.vehicle) {
      alert("Please fill Name, Phone and Vehicle first.");
      return;
    }

    const phoneNumber = "918260416646";

    const message = `Hello, I want to book a car.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
City: ${formData.city}
Vehicle: ${formData.vehicle}
Date: ${formData.date}
Travelers: ${formData.travelers}
Purpose: ${formData.purpose}
Details: ${formData.details}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.location.href = url;
  };

  return (
    <div>
      {/* HERO */}
      <div className="hero-section">
        <div className="hero-image-wrap">
          <img src={cars[index]} className="hero-bg" alt="car" />
        </div>

        <div className="hero-content">
          <h1>Drive Your Dream Car</h1>
          <p>Premium cars at unbeatable prices 🚗</p>
          <button onClick={() => navigate("/cars")}>Explore Cars</button>
        </div>
      </div>

      {/* BOOKING */}
      <div className="booking-box" id="booking">
        <h2>Book Your Car</h2>

        <div className="form-grid">
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
          <input
            name="vehicle"
            placeholder="Vehicle"
            value={formData.vehicle}
            onChange={handleChange}
          />
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
          />
          <input
            name="travelers"
            placeholder="Travelers"
            value={formData.travelers}
            onChange={handleChange}
          />
          <input
            name="purpose"
            placeholder="Purpose"
            value={formData.purpose}
            onChange={handleChange}
          />
          <textarea
            name="details"
            placeholder="Details"
            value={formData.details}
            onChange={handleChange}
          />
        </div>

        <button type="button" className="submit-btn" onClick={sendToWhatsApp}>
          Book Via WhatsApp
        </button>
      </div>

      {/* AVAILABLE CARS */}
      <div className="present-cars-section">
        <h2>Available Cars</h2>
        <div className="slider-container">
          <div className="slider-track">
            {[...availableCars, ...availableCars].map((car, i) => (
              <div className="floating-car-card" key={i}>
                <div className="card-image-wrap">
                  <img src={car.image} alt={car.name} />
                </div>
                <h3>{car.name}</h3>
                <button onClick={() => navigate("/cars")}>View</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="features">
        <div className="feature-box">🚗 Wide Range</div>
        <div className="feature-box">💰 Affordable</div>
        <div className="feature-box">⚡ Fast Booking</div>
      </div>
    </div>
  );
}

export default HomePage;