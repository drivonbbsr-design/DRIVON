import React from "react";
import CarCard from "../components/CarCard";

// ✅ Import images (make sure file names match exactly)
import tharRwd from "../pages/THAR RWD.jpeg";
import thar4x4 from "../pages/Thar 4X4.png";
import tharRoxx from "../pages/THAR ROXX.jpeg";
import scorpioClassic from "../pages/SCORPIO CLASSIC.jpeg";
import scorpioN from "../pages/SCORPION N.jpeg";
import nexon from "../pages/Nexon.jpeg";
import sonet from "../pages/Sonet.jpeg";
import zreeza from "../pages/Zreeza.jpeg";
import fronx from "../pages/Fronx.jpeg";
import venuesunroof from "../pages/Venue Sunroof.jpeg";
import swift from "../pages/image.png";
import verna from "../pages/Verna.jpeg";
import city from "../pages/Citys.jpeg";

const carData = {
  SUV: [
    {
      name: "Thar RWD",
      price1: 2700,
      price2: 3600,
      image: tharRwd
    },
    {
      name: "Thar 4x4",
      price1: 2900,
      price2: 3800,
      image: thar4x4
    },
    {
      name: "Thar Roxx",
      price1: 3100,
      price2: 4100,
      image: tharRoxx
    },
    {
      name: "Scorpio Classic",
      price1: 2700,
      price2: 3500,
      image: scorpioClassic
    },
    {
      name: "Scorpio N",
      price1: 2900,
      price2: 3800,
      image: scorpioN
    },
    {
      name: "XUV 700",
      price1: 2900,
      price2: 4100,
      image: scorpioN // (replace later if you add XUV image)
    }
  ],

  "Compact SUV": [
    {
      name: "Venue Sunroof",
      price1: 1800,
      price2: 2600,
      image: venuesunroof
    },
    {
      name: "Sonet",
      price1: 1800,
      price2: 2600,
      image: sonet
    },
    {
      name: "Breeza",
      price1: 1800,
      price2: 2600,
      image: zreeza
    },
    {
      name: "Fronx",
      price1: 1500,
      price2: 2200,
      image: fronx
    },
    {
      name: "Nexon",
      price1: 1800,
      price2: 2600,
      image: nexon
    }
  ],

  Sedan: [
    {
      name: "Verna",
      price1: 1800,
      price2: 2500,
      image: verna
    },
    {
      name: "City",
      price1: 1800,
      price2: 2500,
      image: city
    }
  ],

  Hatchbacks: [
    {
      name: "Swift",
      price1: 1300,
      price2: 1800,
      image: swift
    }
  ]
};

function CarsPage() {
  return (
    <div className="container">

      <h1 className="hero">Our Cars</h1>

      {Object.keys(carData).map((category) => (
        <div key={category}>

          <h2 className="category-title">{category}</h2>

          <div className="grid">
            {carData[category].map((car, index) => (
              <CarCard key={index} car={car} />
            ))}
          </div>

        </div>
      ))}

    </div>
  );
}

export default CarsPage;