import React, { useEffect, useState } from "react";
import "./Homepage.css";
import { useNavigate, useLocation } from "react-router-dom";
import thar4x4 from "../pages/Thar 4X4.png";
import scorpioClassic from "../pages/SCORPIO CLASSIC.jpeg";
import venuesunroof from "../pages/Venue Sunroof.jpeg";
import nexon from "../pages/Nexon.jpeg";
import sonet from "../pages/Sonet.jpeg";

const cars = [
  "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/topics/magazine-article-pool/2025/wallpaper/m-wallpaper/2025-30-csl/BMW_M_Wallpaper_3.0_CSL_driving_Smartwatch_1x1.jpg.asset.1736439393701.jpg",
  "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/topics/magazine-article-pool/2024/wallpaper/m-wallpaper/bmw-3-0-csl-ts-03.png",
  "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/topics/magazine-article-pool/2025/wallpaper/m-wallpaper/2025-30-csl/BMW_M_Wallpaper_3.0_CSL_driving_Smartwatch_1x1.jpg.asset.1736439393701.jpg"
];

const availableCars = [
  { id: 1, name: "Thar", image: thar4x4 , tag: "Bold SUV" },
  { id: 2, name: "Scorpio", image: scorpioClassic , tag: "Power Drive" },
  { id: 3, name: "Nexon", image: nexon , tag: "City Comfort" },
  { id: 4, name: "Venue", image: venuesunroof, tag: "Smart Choice" },
  { id: 5, name: "Sonet", image: sonet , tag: "Premium Feel" }
];

const stats = [
  { number: "500+", label: "Happy Rides" },
  { number: "50+", label: "Premium Cars" },
  { number: "24/7", label: "Support" },
  { number: "100%", label: "Trusted Booking" }
];

function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [index, setIndex] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);

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
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 2200);

    return () => clearInterval(featureInterval);
  }, []);

  useEffect(() => {
    if (location.hash === "#booking") {
      setTimeout(() => {
        const section = document.getElementById("booking");
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 120);
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleVehicleSelect = (carName) => {
    setFormData((prev) => ({
      ...prev,
      vehicle: carName
    }));

    setTimeout(() => {
      const section = document.getElementById("booking");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const sendToWhatsApp = () => {
    if (!formData.name || !formData.phone || !formData.vehicle) {
      alert("Please fill Name, Phone and Vehicle");
      return;
    }

    const phoneNumber = "917653971367";

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

    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.location.href = url;
  };

  return (
    <div className="homepage">
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-image-wrap">
          <img src={cars[index]} className="hero-bg" alt="car" />
        </div>

        <div className="hero-floating-shape shape-one"></div>
        <div className="hero-floating-shape shape-two"></div>
        <div className="hero-floating-shape shape-three"></div>

        <div className="hero-content">
          <span className="hero-badge">Live ongoing Offer</span>

          <div className="offer-wrapper">
            <div className="offer-glow"></div>

            <div className="offer-badge-box">
              🔥 LIMITED OFFER
            </div>

            <div className="offer-marquee">
              <div className="offer-track">
                🚗 GET <span> UP to 20% OFF</span> ON YOUR FIRST RIDE • BOOK NOW • PREMIUM CARS • LIMITED TIME OFFER • 🚗 GET <span>UP to 50% OFF</span> ON YOUR FIRST RIDE • BOOK NOW • PREMIUM CARS • LIMITED TIME OFFER •
              </div>
            </div>

  <div className="offer-subtext">
    First 100 customers only • Luxury rides at unbeatable prices
  </div>
</div>

          <h1>
            Drive <span>Your Dream Car</span>
          </h1>
          <p>
            Luxury, comfort, and performance — all in one place. Book premium
            cars with a smooth and stylish experience.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => navigate("/cars")}>
              Explore Cars
            </button>
            <button
              className="secondary-btn"
              onClick={() => {
                const section = document.getElementById("booking");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              Book Now
            </button>
          </div>

          <div className="hero-stats">
            {stats.map((item, i) => (
              <div className="stat-card" key={i}>
                <h3>{item.number}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="booking-section-wrapper">
        <div className="booking-box" id="booking">
          <div className="booking-head">
            <span className="section-badge">Quick Booking</span>
            <h2>Book Your Car in Seconds</h2>
            <p>
              Fill in a few details and send your enquiry directly on WhatsApp.
            </p>
          </div>

          <div className="form-grid">
            <input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              name="city"
              placeholder="Pickup City"
              value={formData.city}
              onChange={handleChange}
            />
            <input
              name="vehicle"
              placeholder="Preferred Vehicle"
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
              placeholder="Number of Travelers"
              value={formData.travelers}
              onChange={handleChange}
            />
            <input
              name="purpose"
              placeholder="Trip Purpose"
              value={formData.purpose}
              onChange={handleChange}
            />
            <textarea
              name="details"
              placeholder="Additional Details"
              value={formData.details}
              onChange={handleChange}
            />
          </div>

          <div className="booking-action-row">
            <button
              type="button"
              className="submit-btn"
              onClick={sendToWhatsApp}
            >
              Send Enquiry on WhatsApp
            </button>
          </div>
        </div>
      </div>

      <div className="present-cars-section">
        <div className="section-heading">
          <span className="section-badge">Fleet Collection</span>
          <h2>Available Cars</h2>
          <p>
            Choose from a handpicked lineup of stylish and comfortable cars for
            every kind of trip.
          </p>
        </div>

        <div className="slider-container">
          <div className="slider-track">
            {[...availableCars, ...availableCars].map((car, i) => (
              <div className="floating-car-card" key={i}>
                <div className="card-glow"></div>
                <div className="card-image-wrap">
                  <img src={car.image} alt={car.name} />
                </div>
                <span className="car-tag">{car.tag}</span>
                <h3>{car.name}</h3>
                <div className="card-actions">
                  <button onClick={() => navigate("/cars")}>View</button>
                  <button
                    className="book-card-btn"
                    onClick={() => handleVehicleSelect(car.name)}
                  >
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="section-heading">
          <span className="section-badge">Why Choose Us</span>
          <h2>Experience Better Travel</h2>
        </div>

        <div className="features">
          <div className={`feature-box ${activeFeature === 0 ? "active-feature" : ""}`}>
            <div className="feature-icon">🚗</div>
            <h3>Wide Range</h3>
            <p>From SUVs to premium city rides, find the perfect match.</p>
          </div>

          <div className={`feature-box ${activeFeature === 1 ? "active-feature" : ""}`}>
            <div className="feature-icon">💰</div>
            <h3>Affordable Pricing</h3>
            <p>Luxury and comfort at prices that fit your journey.</p>
          </div>

          <div className={`feature-box ${activeFeature === 2 ? "active-feature" : ""}`}>
            <div className="feature-icon">⚡</div>
            <h3>Fast Booking</h3>
            <p>Send your enquiry in seconds and get moving quickly.</p>
          </div>
        </div>
      </div>

      <div className="cta-strip">
        <div className="cta-content">
          <h2>Ready for Your Next Ride?</h2>
          <p>Book now and enjoy a premium driving experience with DRIVON.</p>
        </div>
        <button
          className="cta-btn"
          onClick={() => {
            const section = document.getElementById("booking");
            if (section) {
              section.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
        >
          Start Booking
        </button>
      </div>
    </div>
  );
}

export default HomePage;
