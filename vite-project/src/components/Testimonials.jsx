import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Amit Sharma",
    role: "Home Owner",
    message:
      "Excellent cleaning service! My home looks fresh and spotless. Highly professional staff.",
    rating: 5,
  },
  {
    id: 2,
    name: "Neha Verma",
    role: "Office Manager",
    message:
      "Very reliable and on-time service. Our office has never looked this clean.",
    rating: 5,
  },
  {
    id: 3,
    name: "Rahul Mehta",
    role: "Restaurant Owner",
    message:
      "Eco-friendly products and great attention to detail. Totally satisfied!",
    rating: 5,
  },
  {
    id: 4,
    name: "Pooja Singh",
    role: "Apartment Resident",
    message:
      "Staff was very polite and did an amazing deep cleaning job. Highly recommended!",
    rating: 5,
  },
  {
    id: 5,
    name: "Arjun Patel",
    role: "Business Owner",
    message:
      "Professional, affordable and reliable service. Will definitely book again.",
    rating: 5,
  },
  {
    id: 6,
    name: "Sneha Kapoor",
    role: "Villa Owner",
    message:
      "Outstanding service with great attention to detail. My house feels brand new.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b  py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Happy <span className="text-orange-500">Customers</span>
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
          See what our clients say about our professional cleaning services.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-2xl shadow-lg p-10 hover:shadow-xl transition"
            >
              {/* Quote Icon — NOW VISIBLE */}
              <FaQuoteLeft
                className="absolute top-6 right-2 text-4xl text-blue-200 z-10"
              />

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                “{item.message}”
              </p>

              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl mr-1" />
                ))}
              </div>

              <h4 className="font-semibold text-lg text-gray-800">
                {item.name}
              </h4>
              <p className="text-gray-500">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
