import { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Hero Section
function Hero() {
  const images = [
    process.env.PUBLIC_URL + "/livingroom/modern-luxury.jpg",
    process.env.PUBLIC_URL + "/bedroom/master.jpg",
    process.env.PUBLIC_URL + "/kitchen/island.jpg",
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="hero" className="relative h-screen flex flex-col justify-center items-center text-center text-white">
      <img
        src={images[current]}
        alt="Beyond Blueprint NG"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Logo fixed top left */}
      <div className="absolute top-4 left-6 z-20">
        <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Beyond Blueprint NG Logo" className="h-14 md:h-20" />
      </div>

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

      {/* Navigation dots */}
      <div className="absolute bottom-6 flex space-x-3 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${idx === current ? "bg-yellow-400" : "bg-white"}`}
          ></button>
        ))}
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

// Services Section
function Services() {
  const services = [
    { title: "Interior Design", desc: "Custom interior designs that blend aesthetics with functionality.", icon: "🎨" },
    { title: "Furniture Assembly", desc: "Professional assembly and installation of modern furniture pieces.", icon: "🛋️" },
    { title: "Project Management", desc: "Efficient coordination of design and installation workflows.", icon: "📐" },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition">
            <div className="text-5xl mb-4">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Portfolio Section
function Portfolio() {
  const categories = {
    "Living Room": [
      process.env.PUBLIC_URL + "livingroom/modern-luxury.jpg",
      process.env.PUBLIC_URL + "livingroom/contemporary.jpg",
      process.env.PUBLIC_URL + "livingroom/classic.jpg",
      process.env.PUBLIC_URL + "livingroom/minimalist.jpg",
    ],
    "Bedroom": [
      process.env.PUBLIC_URL + "/bedroom/master.jpg",
      process.env.PUBLIC_URL + "/bedroom/kids.jpg",
      process.env.PUBLIC_URL + "/bedroom/guest.jpg",
      process.env.PUBLIC_URL + "/bedroom/minimalist.jpg",
    ],
    "Dining Area": [
      process.env.PUBLIC_URL + "/dining/luxury.jpg",
      process.env.PUBLIC_URL + "/dining/contemporary.jpg",
      process.env.PUBLIC_URL + "/dining/family.jpg",
      process.env.PUBLIC_URL + "/dining/cafe-style.jpg",
    ],
    "Kitchen": [
      process.env.PUBLIC_URL + "/kitchen/island.jpg",
      process.env.PUBLIC_URL + "/kitchen/modular.jpg",
      process.env.PUBLIC_URL + "/kitchen/open.jpg",
    ],
    "Outdoor": [
      process.env.PUBLIC_URL + "/outdoor/patio.jpg",
      process.env.PUBLIC_URL + "/outdoor/garden.jpg",
      process.env.PUBLIC_URL + "/outdoor/balcony.jpg",
    ],
    "Restaurants": [
      process.env.PUBLIC_URL + "/restaurants/fine-dining.jpg",
      process.env.PUBLIC_URL + "/restaurants/modern.jpg",
      process.env.PUBLIC_URL + "/restaurants/cafe.jpg",
    ],
    "Grocery Stores": [
      process.env.PUBLIC_URL + "/grocery/supermarket.jpg",
      process.env.PUBLIC_URL + "/grocery/mini-mart.jpg",
      process.env.PUBLIC_URL + "/grocery/organic.jpg",
    ],
    "Bathrooms": [
      process.env.PUBLIC_URL + "/bathrooms/luxury.jpg",
      process.env.PUBLIC_URL + "/bathrooms/modern.jpg",
      process.env.PUBLIC_URL + "/bathrooms/minimalist.jpg",
      process.env.PUBLIC_URL + "/bathrooms/spa.jpg",
    ],
  };

  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState([]);

  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-12">Portfolio</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {Object.keys(categories).map((cat, idx) => (
          <div key={idx}>
            <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">{cat}</h3>
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
              {categories[cat].map((img, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setSlides(categories[cat].map((x) => ({ src: process.env.PUBLIC_URL + x })));
                    setOpen(true);
                  }}
                  className="focus:outline-none"
                >
                  <img
                    src={process.env.PUBLIC_URL + img}
                    alt={`${cat} ${i + 1}`}
                    className="w-64 h-44 object-cover rounded-xl shadow-md flex-shrink-0 hover:opacity-80 transition"
                  />
                </button>
              ))}
            </div>
          </div>
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
          src={process.env.PUBLIC_URL + "/magazine.pdf"}
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
      <div className="flex justify-center items-center space-x-6 mb-4">
        {/* Logo scrolls to top */}
        <a href="#hero" className="hover:opacity-80 transition">
          <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Beyond Blueprint NG Logo" className="h-8 w-auto" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/beyond-blueprint-ng/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5c0 1.38-1.12 2.5-2.49 2.5C1.12 6 0 4.88 0 3.5S1.12 1 2.49 1s2.49 1.12 2.49 2.5zM.5 8h4.98V24H.5V8zm7.5 0h4.78v2.2h.07c.67-1.2 2.3-2.45 4.74-2.45 5.06 0 6 3.33 6 7.66V24h-4.98v-7.6c0-1.82-.04-4.16-2.53-4.16-2.53 0-2.92 1.98-2.92 4.03V24H8V8z"/>
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/beyond_blueprint_ng"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.25a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5zm6.5-9.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z"/>
          </svg>
        </a>
      </div>

      <p className="text-sm">© {new Date().getFullYear()} Beyond Blueprint NG. All rights reserved.</p>
    </footer>
  );
}

// Main App Component
export default function App() {
  return (
    <div className="font-sans relative">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Magazine />
      <Footer />

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/2348137342695"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50 flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .5C5.6.5.5 5.6.5 12c0 2.1.6 4.1 1.7 5.9L.5 23.5l5.8-1.7c1.7 1 3.7 1.6 5.7 1.6 6.4 0 11.5-5.1 11.5-11.5S18.4.5 12 .5zm0 21c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-3.5 1 1-3.4-.2-.4C2.8 15.8 2.3 13.9 2.3 12c0-5.4 4.4-9.7 9.7-9.7 5.4 0 9.7 4.4 9.7 9.7 0 5.4-4.4 9.7-9.7 9.7zM16.6 14.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1c-.2.3-.7.9-.9 1-.2.1-.3.2-.6.1s-1.1-.4-2.1-1.3c-.8-.7-1.3-1.6-1.5-1.8-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.4.1-.1.2-.2.3-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.5-.9-2s-.5-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2 0 1.2.8 2.4.9 2.6.1.2 1.6 2.4 3.9 3.3 2.3.9 2.3.6 2.7.6.4 0 1.3-.5 1.5-1 .2-.5.2-.9.1-1z" />
        </svg>
      </a>
    </div>
  );
}
