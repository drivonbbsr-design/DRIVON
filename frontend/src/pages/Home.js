import React from "react";
import CarCard from "../components/CarCard";

const carData = {
  SUV: [
    {
      name: "Thar RWD",
      price1: 2700,
      price2: 3600,
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb"
    },
    {
      name: "Thar 4x4",
      price1: 2900,
      price2: 3800,
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb"
    },
    {
      name: "Thar Roxx",
      price1: 3100,
      price2: 4100,
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb"
    },
    {
      name: "Scorpio Classic",
      price1: 2700,
      price2: 3500,
      image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24"
    },
    {
      name: "Scorpio N",
      price1: 2900,
      price2: 3800,
      image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24"
    },
    {
      name: "XUV 700",
      price1: 2900,
      price2: 4100,
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a"
    }
  ],

  "Compact SUV": [
    {
      name: "Venue Sunroof",
      price1: 1800,
      price2: 2600,
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027"
    },
    {
      name: "Sonet",
      price1: 1800,
      price2: 2600,
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027"
    },
    {
      name: "Breeza",
      price1: 1800,
      price2: 2600,
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027"
    },
    {
      name: "Fronx",
      price1: 1500,
      price2: 2200,
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027"
    },
    {
      name: "Nexon",
      price1: 1800,
      price2: 2600,
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027"
    }
  ],

  Sedan: [
    {
      name: "Verna",
      price1: 1800,
      price2: 2500,
      image: "https://images.unsplash.com/photo-1549924231-f129b911e442"
    },
    {
      name: "City",
      price1: 1800,
      price2: 2500,
      image: "https://images.unsplash.com/photo-1549924231-f129b911e442"
    }
  ],

  Hatchbacks: [
    {
      name: "Swift",
      price1: 1300,
      price2: 1800,
      image: "https://images.unsplash.com/photo-1597007030739-6d2e8d6c6f3f"
    }
  ]
};

function Home() {
  return (
    <div className="container">

      <h1 className="hero">🚗 Our Cars</h1>

      {Object.keys(carData).map(category => (
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

export default Home;