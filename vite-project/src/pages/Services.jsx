import React from "react";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

/* ===== Images ===== */
import banner from "../assets/images/banner2.jpg";
import service1 from "../assets/images/service1.jpg";
import service2 from "../assets/images/service3.jpg";
import service3 from "../assets/images/service4.jpg";
import service4 from "../assets/images/service10.jpg";

const Services = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[70vh] w-full">
        <img
          src={banner}
          alt="Our Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              Our <span className="text-orange-400">Professional</span>{" "}
              <span className="text-blue-400">Services</span>
            </h1>
            <p className="text-gray-200 max-w-2xl mx-auto text-lg">
              Reliable, affordable & high-quality cleaning and maintenance
              services for homes and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why <span className="text-orange-400">Choose</span>{" "}
            <span className="text-blue-600">Our Services?</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide complete home & commercial solutions using modern
            equipment, trained professionals, and eco-friendly products.
            Customer satisfaction is our top priority.
          </p>
        </div>
      </section>

      {/* ================= SERVICES DETAILS ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid gap-14">

          {/* Service 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src={service1}
              alt="Anti Bird Net"
              className="rounded-xl shadow-lg h-[450px] w-full object-cover"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                <span className="border-b-4 border-orange-400 pb-1">
                  Anti-Bird Net Installation
                </span>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Protect your balconies, windows, and buildings from birds with
                durable, weather-resistant anti-bird nets installed by experts.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>High quality nylon nets</li>
                <li>No drilling damage</li>
                <li>Long-lasting protection</li>
              </ul>
            </div>
          </div>

          {/* Service 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                <span className="border-b-4 border-blue-500 pb-1">
                  Pest Control Services
                </span>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Say goodbye to insects and pests with our safe and effective pest
                control solutions for homes, offices, and commercial spaces.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Eco-friendly chemicals</li>
                <li>Odorless treatment</li>
                <li>Trained professionals</li>
              </ul>
            </div>
            <img
              src={service2}
              alt="Pest Control"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Service 3 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src={service3}
              alt="Deep Cleaning"
              className="rounded-xl shadow-lg"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                <span className="border-b-4 border-orange-400 pb-1">
                  Deep Cleaning Services
                </span>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our deep cleaning service ensures every corner of your home or
                office is thoroughly cleaned and sanitized.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Kitchen & bathroom deep cleaning</li>
                <li>Floor & glass cleaning</li>
                <li>Professional equipment</li>
              </ul>
            </div>
          </div>

          {/* Service 4 */}
          <div className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                <span className="border-b-4 border-blue-500 pb-1">
                  Water Tank Cleaning
                </span>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ensure safe and clean water with our professional water tank
                cleaning and disinfection services.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Complete sludge removal</li>
                <li>Anti-bacterial treatment</li>
                <li>Safe drinking water</li>
              </ul>
            </div>
            <img
              src={service4}
              alt="Water Tank Cleaning"
              className="rounded-xl shadow-lg h-[450px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How <span className="text-orange-400">It</span>{" "}
              <span className="text-blue-600">Works</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Book our services in just a few simple steps and enjoy a clean,
              safe & hygienic environment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

            {[
              { step: 1, title: "Book a Service", color: "bg-orange-400" },
              { step: 2, title: "Schedule Visit", color: "bg-blue-500" },
              { step: 3, title: "Professional Service", color: "bg-orange-400" },
              { step: 4, title: "Enjoy Clean Space", color: "bg-blue-500" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-100"
              >
                <div
                  className={`w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full ${item.color} text-white text-xl font-bold`}
                >
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  Simple, fast & reliable process handled by trained professionals.
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-16 bg-gradient-to-r from-orange-400 to-blue-500 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Book Our Services Today
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Get professional, affordable & reliable services at your doorstep.
        </p> 
        <NavLink
        to="/contact"
        className="inline-block border-2 border-white px-10 py-3 font-semibold rounded-lg hover:bg-white hover:text-orange-500 transition-all duration-300 shadow-lg"
        >
        Contact Us
         </NavLink> 
        
      </section>

      <Footer />
    </>
  );
};

export default Services;
