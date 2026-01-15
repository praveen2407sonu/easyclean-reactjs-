import React from "react";
// import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

/* ================= DETAIL SERVICES IMAGES ================= */
import service1 from "../assets/images/service1.jpg";
import service2 from "../assets/images/service3.jpg";
import service3 from "../assets/images/service4.jpg";
import service4 from "../assets/images/service10.jpg";

/* ================= SERVICES GRID IMAGES ================= */
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
  { name: "Anti-Bird Net", image: img1, popular: false, description: "Protect your balcony or terrace from birds with our durable nets." },
  { name: "Green Curtains / Net", image: img2, popular: true, description: "Eco-friendly green nets for homes and offices, enhancing aesthetics." },
  { name: "Pest Control", image: img3, popular: true, description: "Keep your home pest-free with safe and effective pest control." },
  { name: "Deep Cleaning", image: img4, popular: false, description: "Thorough deep cleaning for a spotless and hygienic home." },
  { name: "Floor Cleaning", image: img5, popular: true, description: "Professional floor cleaning services for all types of flooring." },
  { name: "Glass Cleaning", image: img6, popular: false, description: "Crystal-clear glass cleaning for windows, doors, and panels." },
  { name: "Swimming Pool Cleaning", image: img7, popular: false, description: "Keep your pool sparkling clean and safe for swimming." },
  { name: "Upholstery Cleaning", image: img8, popular: true, description: "Revive sofas, chairs, and other furniture with our expert cleaning." },
  { name: "Water Tank Cleaning", image: img9, popular: true, description: "Ensure safe drinking water with our professional tank cleaning." },
  { name: "AC Services", image: img10, popular: true, description: "Maintain your AC for optimal cooling and air quality." },
  { name: "RO / Water Purifier", image: img11, popular: false, description: "Keep your RO systems clean for pure and safe drinking water." },
  { name: "Car Cleaning", image: img12, popular: false, description: "Complete car cleaning for interior and exterior detailing." },
];

const detailServices = [
  {
    img: service1,
    title: "Anti-Bird Net Installation",
    border: "border-orange-400",
    points: ["High quality nylon nets", "No drilling damage", "Long-lasting protection"],
  },
  {
    img: service2,
    title: "Pest Control Services",
    border: "border-blue-500",
    points: ["Eco-friendly chemicals", "Odorless treatment", "Trained professionals"],
  },
  {
    img: service3,
    title: "Deep Cleaning Services",
    border: "border-orange-400",
    points: ["Kitchen & bathroom cleaning", "Floor & glass cleaning", "Professional equipment"],
  },
  {
    img: service4,
    title: "Water Tank Cleaning",
    border: "border-blue-500",
    points: ["Complete sludge removal", "Anti-bacterial treatment", "Safe drinking water"],
  },
];

const Services = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <div className="bg-blue-600 py-24 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">
          Our <span className="text-orange-500">Services</span>
        </h1>
        <p className="text-3xl max-w-2xl mx-auto">
          Reliable, Affordable & Professional Cleaning Solutions
        </p>
      </div>

      {/* ================= INTRO ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why <span className="text-orange-400">Choose</span>{" "}
            <span className="text-blue-600">Our Services?</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We provide complete home & commercial solutions using modern
            equipment, trained professionals, and eco-friendly products.
          </p>
        </div>
      </section>

      {/* ================= PREMIUM SERVICES GRID ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Premium Home <span className="text-orange-500">Services</span> On Demand
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
                {service.popular && (
                  <span className="absolute top-3 right-3 bg-orange-400 text-white text-xs px-2 py-1 rounded">
                    Popular
                  </span>
                )}
                <img src={service.image} alt={service.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-sm font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="flex gap-3">
                    <a href="https://wa.me/1234567890" className="flex-1 bg-green-500 text-white py-2 rounded-lg text-center">WhatsApp</a>
                    <NavLink to="/contact" className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-center">Contact</NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DETAIL SERVICES (2x2 GRID) ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Our <span className="text-orange-500">Specialized</span> Services
            </h2>
            <p className="text-gray-600 mt-3">
              High quality professional services delivered by trained experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {detailServices.map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[300px] object-cover"
                />

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">
                    <span className={`border-b-4 ${item.border} pb-1`}>
                      {item.title}
                    </span>
                  </h3>

                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    {item.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 bg-gradient-to-r from-orange-400 to-blue-500 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Book Our Services Today
        </h2>
        <NavLink
          to="/contact"
          className="inline-block border-2 border-white px-10 py-3 font-semibold rounded-lg hover:bg-white hover:text-orange-500 transition"
        >
          Contact Us
        </NavLink>
      </section>

      {/* <Footer /> */}
    </>
  );
};

export default Services;
