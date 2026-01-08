import React from "react";
import {
  FaRegSmile,
  FaHandsHelping,
  FaClock,
  FaLeaf,
  FaStar,
  FaUsers,
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
      title: "Eco-Friendly",
      desc: "We use safe and environmentally friendly cleaning solutions.",
    },
    {
      icon: <FaStar className="text-5xl text-yellow-500 mb-4" />,
      title: "Top Rated Service",
      desc: "Rated 5★ by hundreds of satisfied customers.",
    },
    {
      icon: <FaUsers className="text-5xl text-indigo-600 mb-4" />,
      title: "Trusted by Many",
      desc: "Serving homes & offices with long-term client trust.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 via-sky-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Why <span className="text-orange-500">Choose</span>  Us
        </h2>
        <p className="text-center text-gray-600 mb-20 max-w-3xl mx-auto text-lg">
          Discover why our clients trust us for professional home & office
          cleaning services.
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

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="bg-white/70 backdrop-blur rounded-xl p-8 border border-blue-100">
            <h3 className="text-5xl font-bold text-blue-600">500+</h3>
            <p className="text-gray-600 mt-2 text-lg">Happy Clients</p>
          </div>
          <div className="bg-white/70 backdrop-blur rounded-xl p-8 border border-blue-100">
            <h3 className="text-5xl font-bold text-indigo-600">10+</h3>
            <p className="text-gray-600 mt-2 text-lg">Years Experience</p>
          </div>
          <div className="bg-white/70 backdrop-blur rounded-xl p-8 border border-blue-100">
            <h3 className="text-5xl font-bold text-sky-600">100%</h3>
            <p className="text-gray-600 mt-2 text-lg">
              Satisfaction Guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
