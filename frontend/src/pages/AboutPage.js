import React from "react";
import "./AboutPage.css";

import founderImg from "../pages/founder.png";
import managerImg from "../pages/manager.png";
import marketingImg from "../pages/marketing.jpeg";
import ISO from "../pages/ISO.jpeg";
import STARTUPODISHA from "../pages/STARTUPODISHA.jpeg";
import MSME from "../pages/MSME.jpeg";
import DPIIT from "../pages/DPIIT.jpeg"

function AboutPage() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const CERTIFICATIONS = [
    {
      name: "ISO CERTIFIED",
      image: ISO,
    },
    {
      name: "Startup Odisha",
      image: STARTUPODISHA,
    },
    {
      name: "Micro,Small and Medium Enterprises",
      image: MSME,
    },
    {
      name:"DPIIT",
      image : DPIIT,
      desc : "#StartupIndia" 
    }
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <span className="about-badge">About Our Journey</span>
          <h1>
            Driven By Trust, Powered By <span>Premium Rides</span>
          </h1>
          <p>
            We are a modern car rental company dedicated to making travel easy,
            affordable, stylish, and comfortable.
          </p>

          <div className="about-hero-buttons">
            <button onClick={() => scrollToSection("company-details")}>
              Explore Company
            </button>
            <button
              className="secondary-btn"
              onClick={() => scrollToSection("team-section")}
            >
              Meet Our Team
            </button>
            <button onClick={() => scrollToSection("why-choose-us")}>
              Why Choose Us
            </button>
          </div>
        </div>
      </section>

      <section id="company-details" className="company-section">
        <div className="section-heading">
          <span className="section-badge">Who We Are</span>
          <h2>About Our Company</h2>
          <p>
            Our company was built to make car rentals more professional,
            reliable, and customer-friendly.
          </p>
        </div>

        <div className="company-grid">
          <div className="company-card">
            <h3>Our Story</h3>
            <p>
              We started with a simple idea: make car rentals more convenient,
              transparent, and trustworthy.
            </p>
          </div>

          <div className="company-card">
            <h3>Our Mission</h3>
            <p>
              To provide reliable vehicles, affordable pricing, and excellent
              customer support.
            </p>
          </div>

          <div className="company-card">
            <h3>Our Vision</h3>
            <p>
              To become one of the most trusted and innovative car rental
              brands.
            </p>
          </div>

          <div className="company-card">
            <h3>What We Offer</h3>
            <p>
              We offer SUVs, sedans, hatchbacks, and compact SUVs for local
              travel, family trips, and business rides.
            </p>
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="stat-box">
          <h3>100+</h3>
          <p>Happy Customers</p>
        </div>
        <div className="stat-box">
          <h3>20+</h3>
          <p>Premium Cars</p>
        </div>
        <div className="stat-box">
          <h3>24/7</h3>
          <p>Support</p>
        </div>
        <div className="stat-box">
          <h3>100%</h3>
          <p>Customer Focus</p>
        </div>
      </section>

      <section id="why-choose-us" className="why-section">
        <div className="section-heading">
          <span className="section-badge">Why Us</span>
          <h2>Why Choose Our Rental Service?</h2>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">🚗</div>
            <h3>Wide Range of Cars</h3>
            <p>Choose from multiple categories based on your needs.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">🛡️</div>
            <h3>Safe Fleet</h3>
            <p>Every vehicle is maintained and checked carefully.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">💰</div>
            <h3>Transparent Pricing</h3>
            <p>Simple pricing without unnecessary confusion.</p>
          </div>
        </div>
      </section>

      <section id="team-section" className="team-section">
        <div className="section-heading">
          <span className="section-badge">Certificates</span>
          <h2>CERTIFICATIONS</h2>
        </div>

        <div className="team-grid">
          {CERTIFICATIONS.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-image-wrap">
                <img src={member.image} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <h4>{member.role}</h4>
              <h3>{member.desc}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutPage;