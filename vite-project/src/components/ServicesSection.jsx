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
  { name: "Anti-Bird Net", image: img1, popular: false },
  { name: "Green Curtains / Net", image: img2, popular: true },
  { name: "Pest Control", image: img3, popular: true },
  { name: "Deep Cleaning", image: img4, popular: false },
  { name: "Floor Cleaning", image: img5, popular: true },
  { name: "Glass Cleaning", image: img6, popular: false },
  { name: "Swimming Pool Cleaning", image: img7, popular: false },
  { name: "Upholstery Cleaning", image: img8, popular: true },
  { name: "Water Tank Cleaning", image: img9, popular: true },
  { name: "AC Services", image: img10, popular: true },
  { name: "RO / Water Purifier", image: img11, popular: false },
  { name: "Car Cleaning", image: img12, popular: false },
];

/* ================= COMPONENT ================= */
const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Premium Home Services On Demand
          </h2>
          <p className="text-gray-600 mt-3">
            Book trained professionals for all your home maintenance needs.
            <span className="font-semibold text-orange-500">
              {" "}100% quality guaranteed.
            </span>
          </p>
        </div>

        {/* ================= SERVICES CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
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
              <div className="p-4 text-center">
                <h3 className="text-sm font-semibold text-gray-800">
                  {service.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM BUTTONS ================= */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
          <NavLink
            to="/services"
            className="px-8 py-3 text-lg font-semibold rounded-lg
               border-2 border-orange-400 text-orange-500
               bg-transparent
               hover:bg-orange-400 hover:text-white
               hover:shadow-xl
               transition-all duration-300 ease-in-out"
          >
            Our Services
          </NavLink>

          <NavLink
            to="/contact"
            className="px-8 py-3 text-lg font-semibold rounded-lg
               border-2 border-orange-400 text-orange-500
               bg-transparent
               hover:bg-orange-400 hover:text-white
               hover:shadow-xl
               transition-all duration-300 ease-in-out"
          >
            Contact Us
          </NavLink>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
