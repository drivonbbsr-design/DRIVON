import React, { useState } from "react";
import "./ContactPage.css";

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hello DRIVON,%0AName: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message}`;

    window.open(`https://wa.me/917653971367?text=${text}`, "_blank");
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We are here to help you with bookings, enquiries, and support.</p>
      </section>

      <section className="contact-grid">
        <div className="contact-card">
          <h3 className="contact-heading">
            <span className="contact-icon">📧</span>
            Email
          </h3>
          <p>drivon.bbsr@gmail.com</p>
          <a href="mailto:drivon.bbsr@gmail.com">
            <button>Send Email</button>
          </a>
        </div>

        <div className="contact-card">
          <h3 className="contact-heading">
            <span className="contact-icon">📞</span>
            Call
          </h3>
          <p>+91 7653971367</p>
          <a href="tel:7653971367">
            <button>Call Now</button>
          </a>
        </div>

        <div className="contact-card">
          <h3 className="contact-heading">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="contact-img-icon"
            />
            WhatsApp
          </h3>
          <p>Chat with us instantly</p>
          <a href="https://wa.me/917653971367" target="_blank" rel="noreferrer">
            <button>Open WhatsApp</button>
          </a>
        </div>

        <div className="contact-card">
          <h3 className="contact-heading">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="contact-img-icon"
            />
            Social Media
          </h3>
          <p>@drivon.bbsr</p>

          <div className="social-buttons">
            <a
              href="https://instagram.com/drivon.bbsr"
              target="_blank"
              rel="noreferrer"
            >
              <button className="insta">Instagram</button>
            </a>

            <a
              href="https://facebook.com/drivon.bbsr"
              target="_blank"
              rel="noreferrer"
            >
              <button className="fb">Facebook</button>
            </a>
          </div>
        </div>

        <div className="contact-card address-card">
          <h3 className="contact-heading">
            <span className="contact-icon">📍</span>
            Office Address
          </h3>

          <div className="address-box">
            <h4>Primary Office</h4>
            <p>
              Plot no - 1923, Satya Vihar, Canal Road, Near Mosque,
              VTC - Rasulgarh , PO - Rasulgarh Bhubaneswar,
              Khordha (Odisha) - 751010
            </p>
          </div>

          <div className="address-box secondary-address">
            <h4>Secondary Office</h4>
            <p>
              Twincity Township, Barang, Trisulia, Cuttack (Odisha) - 754005
            </p>
          </div>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
          >
            <button className="location-btn">Open Location</button>
          </a>
        </div>
      </section>

      <section className="enquiry-section">
        <h2>Send Enquiry</h2>

        <form onSubmit={handleSubmit} className="enquiry-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="whatsapp-submit-btn">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="btn-whatsapp-icon"
            />
            Send via WhatsApp
          </button>
        </form>
      </section>

      <section className="contact-cta">
        <h2>Need a car urgently?</h2>
        <p>Contact us now and get quick booking support.</p>

        <a href="https://wa.me/917653971367" target="_blank" rel="noreferrer">
          <button className="cta-btn">Book Now</button>
        </a>
      </section>
    </div>
  );
}

export default ContactPage;