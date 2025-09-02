import { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Hero Section
function Hero() {
  const images = [
    "/images/livingroom/modern-luxury.jpg",
    "/images/bedroom/master.jpg",
    "/images/kitchen/island.jpg",
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center text-white">
      <img
        src={images[current]}
        alt="Beyond Blueprint NG"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 p-6">
        <h1 className="text-5xl font-bold mb-4">Beyond Blueprint NG</h1>
        <p className="text-lg md:text-2xl mb-6">
          Transforming Spaces with Interior Design & Furniture Installation
        </p>
        <a
          href="https://wa.me/2348137342695"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-semibold shadow-lg hover:opacity-90"
        >
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}

// About Section
function About() {
  return (
    <section className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">About Us</h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-700">
        At <strong>Beyond Blueprint NG</strong>, we specialize in interior design, 
        furniture installation, and project management. Our mission is to blend 
        creativity with functionality to deliver timeless spaces. From concept to 
        execution, we bring your vision to life with precision and passion.
      </p>
    </section>
  );
}

// Portfolio Section with Lightbox
function Portfolio() {
  const categories = {
    "Living Room": [
      "/images/livingroom/modern-luxury.jpg",
      "/images/livingroom/contemporary.jpg",
      "/images/livingroom/classic.jpg",
    ],
    "Bedroom": [
      "/images/bedroom/master.jpg",
      "/images/bedroom/kids.jpg",
      "/images/bedroom/guest.jpg",
    ],
    "Dining Area": [
      "/images/dining/luxury.jpg",
      "/images/dining/family.jpg",
      "/images/dining/cafe-style.jpg",
    ],
  };

  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState([]);

  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
        Portfolio
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Object.keys(categories).map((cat, idx) => (
          <button
            key={idx}
            onClick={() => {
              setSlides(categories[cat].map((img) => ({ src: img })));
              setOpen(true);
            }}
            className="group block relative"
          >
            <img
              src={categories[cat][0]}
              alt={cat}
              className="w-full h-60 object-cover rounded-2xl shadow-md group-hover:opacity-80 transition"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition">
              <span className="text-white text-lg font-semibold">{cat}</span>
            </div>
          </button>
        ))}
      </div>

      {open && <Lightbox open={open} close={() => setOpen(false)} slides={slides} />}
    </section>
  );
}

// Magazine Section
function Magazine() {
  return (
    <section className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Magazine</h2>
      <div className="max-w-4xl mx-auto">
        <iframe
          src="/magazine.pdf"
          title="Beyond Blueprint Magazine"
          className="w-full h-[600px] border-2 rounded-2xl shadow-md"
        ></iframe>
      </div>
    </section>
  );
}

// Footer Section
function Footer() {
  return (
    <footer className="py-8 bg-blue-900 text-white text-center">
      <p>© {new Date().getFullYear()} Beyond Blueprint NG. All rights reserved.</p>
    </footer>
  );
}

// Main App Component
export default function App() {
  return (
    <div className="font-sans">
      <Hero />
      <About />
      <Portfolio />
      <Magazine />
      <Footer />
    </div>
  );
}
