import React from "react";
import { Link } from "react-router-dom";
import logo from "./DRIVONLOGO.png";

function Navbar() {
  return (
    <div className="navbar">
      <h2 className="logo">
        <img src={logo} alt="logo" className="logo-img" />
        DRIVON
      </h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/cars">Cars</Link>

        {/* ✅ FIXED BOOK NOW */}
        <Link
          to="/"
          onClick={() => {
            setTimeout(() => {
              const section = document.getElementById("booking");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }, 100);
          }}
        >
          Book Now
        </Link>

        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;