import React from "react";
import {
  FaRegSmile,
  FaHandsHelping,
  FaClock,
  FaLeaf,
  FaStar,
  FaUsers,
  FaCheckCircle,
  FaPhoneAlt,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaRegSmile className="text-5xl text-blue-600 mb-4" />,
      title: "Professional Staff",
      desc: "Trained & friendly cleaning experts ensuring top quality service.",
    },
    {
      icon: <FaHandsHelping className="text-5xl text-blue-600 mb-4" />,
      title: "Customer Satisfaction",
      desc: "Our priority is to make your home & office spotless and happy.",
    },
    {
      icon: <FaClock className="text-5xl text-blue-600 mb-4" />,
      title: "Timely Service",
      desc: "We respect your time and always arrive on schedule.",
    },
    {
      icon: <FaLeaf className="text-5xl text-green-600 mb-4" />,
      title: "Eco-Friendly Cleaning",
      desc: "We use safe and environmentally friendly cleaning solutions.",
    },
    {
      icon: <FaStar className="text-5xl text-yellow-500 mb-4" />,
      title: "Top Rated Company",
      desc: "Rated 5★ by hundreds of satisfied customers.",
    },
    {
      icon: <FaUsers className="text-5xl text-indigo-600 mb-4" />,
      title: "Trusted & Insured",
      desc: "Fully insured service trusted by homes & businesses.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 via-sky-50 to-white py-4">
      <div className="max-w-7xl mx-auto px-6 pt-[5px]">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Why <span className="text-orange-500">Choose</span> Us
        </h2>
        <p className="text-center text-gray-600 mb-20 max-w-3xl mx-auto text-lg">
          We deliver reliable, affordable & high-quality cleaning services you
          can trust.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur p-10 rounded-2xl border border-blue-100 shadow-lg hover:shadow-blue-200/50 transition duration-300"
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-lg text-center">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* How We Work Section (NEW – Milestones se different) */}
        <div className="mt-10 bg-white rounded-2xl shadow-lg p-12 border border-blue-100">
          <h3 className="text-3xl font-bold text-center mb-10">
            How We Work
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <FaPhoneAlt className="text-4xl text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Book Service</h4>
              <p className="text-gray-600">
                Contact us & schedule your cleaning easily.
              </p>
            </div>

            <div>
              <FaCheckCircle className="text-4xl text-green-600 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Get Confirmation</h4>
              <p className="text-gray-600">
                We confirm time, service & requirements.
              </p>
            </div>

            <div>
              <FaUsers className="text-4xl text-indigo-600 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Expert Cleaning</h4>
              <p className="text-gray-600">
                Our team delivers professional deep cleaning.
              </p>
            </div>

            <div>
              <FaRegSmile className="text-4xl text-orange-500 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Enjoy Clean Space</h4>
              <p className="text-gray-600">
                Relax & enjoy a fresh, spotless environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
