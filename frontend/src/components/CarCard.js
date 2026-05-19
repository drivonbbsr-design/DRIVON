import React from "react";

function CarCard({ car }) {

  const phoneNumber = "919876543210";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    const message = `Hello, I want to book ${car.name}. Price: ₹${car.price1} - ₹${car.price2}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="card">

      <img src={car.image} alt={car.name} />

      <h3>{car.name}</h3>

      <p><b>₹{car.price1} - ₹{car.price2}</b></p>

      <button onClick={handleCall}>
        📞 Book via Call
      </button>

      <button
        style={{ background: "#25d366" }}
        onClick={handleWhatsApp}
      >
        💬 Book via WhatsApp
      </button>

    </div>
  );
}

export default CarCard;