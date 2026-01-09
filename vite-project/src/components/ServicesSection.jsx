import { NavLink } from "react-router-dom";

/* ================= IMAGES ================= */
import img1 from "../assets/images/service1.jpg";
import img2 from "../assets/images/service2.jpg";
import img3 from "../assets/images/service3.jpg";
import img4 from "../assets/images/service4.jpg";
import img5 from "../assets/images/service5.jpg";
import img6 from "../assets/images/service7.jpg";
import img7 from "../assets/images/service8.jpg";
import img8 from "../assets/images/service9.jpg";
import img9 from "../assets/images/service10.jpg";
import img10 from "../assets/images/service11.jpg";
import img11 from "../assets/images/service12.jpg";
import img12 from "../assets/images/service13.jpg";

/* ================= SERVICES DATA ================= */
const services = [
  {
    name: "Anti-Bird Net",
    image: img1,
    popular: false,
    description: "Protect your balcony or terrace from birds with our durable nets.",
  },
  {
    name: "Green Curtains / Net",
    image: img2,
    popular: true,
    description: "Eco-friendly green nets for homes and offices, enhancing aesthetics.",
  },
  {
    name: "Pest Control",
    image: img3,
    popular: true,
    description: "Keep your home pest-free with safe and effective pest control.",
  },
  {
    name: "Deep Cleaning",
    image: img4,
    popular: false,
    description: "Thorough deep cleaning for a spotless and hygienic home.",
  },
  {
    name: "Floor Cleaning",
    image: img5,
    popular: true,
    description: "Professional floor cleaning services for all types of flooring.",
  },
  {
    name: "Glass Cleaning",
    image: img6,
    popular: false,
    description: "Crystal-clear glass cleaning for windows, doors, and panels.",
  },
  {
    name: "Swimming Pool Cleaning",
    image: img7,
    popular: false,
    description: "Keep your pool sparkling clean and safe for swimming.",
  },
  {
    name: "Upholstery Cleaning",
    image: img8,
    popular: true,
    description: "Revive sofas, chairs, and other furniture with our expert cleaning.",
  },
  {
    name: "Water Tank Cleaning",
    image: img9,
    popular: true,
    description: "Ensure safe drinking water with our professional tank cleaning.",
  },
  {
    name: "AC Services",
    image: img10,
    popular: true,
    description: "Maintain your AC for optimal cooling and air quality.",
  },
  {
    name: "RO / Water Purifier",
    image: img11,
    popular: false,
    description: "Keep your RO systems clean for pure and safe drinking water.",
  },
  {
    name: "Car Cleaning",
    image: img12,
    popular: false,
    description: "Complete car cleaning for interior and exterior detailing.",
  },
];

/* ================= COMPONENT ================= */
const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Premium Home <span className="text-orange-500">Services </span>
              On Demand
          </h2>
          <p className="text-gray-600 mt-3">
            Book trained professionals for all your home maintenance needs.
            <span className="font-semibold text-orange-500"> 100% quality guaranteed.</span>
          </p>
        </div>

        {/* ================= SERVICES CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
            >
              {/* Popular Badge */}
              {service.popular && (
                <span className="absolute top-3 right-3 z-10 text-xs bg-orange-400 text-white px-2 py-1 rounded">
                  Popular
                </span>
              )}

              {/* Image */}
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-40 object-cover"
              />

              {/* Title */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href="https://wa.me/1234567890" // WhatsApp number
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-green-500 hover:bg-green-600 text-white font-semibold px-3 py-2 rounded-lg transition"
                  >
                    WhatsApp
                  </a>
                  <NavLink
                    to="/contact"
                    className="flex-1 text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold px-3 py-2 rounded-lg transition"
                  >
                    Contact
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
