import React, { useState } from "react";

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your inquiry has been submitted.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      service: "",
      message: "",
    });
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get <span className="text-orange-500">Free Quotes</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Fill out the form below and we will get back to you with a quote.
        </p>

        {/* Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-2xl p-10 grid grid-cols-1 gap-6"
          >
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Your full address"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Service Required
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              >
                <option value="">Select a service</option>
                <option value="Home Cleaning">Home Cleaning</option>
                <option value="Office Cleaning">Office Cleaning</option>
                <option value="Deep Cleaning">Deep Cleaning</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Your message..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-400 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition duration-300"
              >
                Get Quote
              </button>
            </div>
          </form>

          {/* Right: Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086919989591!2d-122.41941518468113!3d37.77492977975839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c4f69fa49%3A0xf9e1d2b3d3a10f1c!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sin!4v1699353981037!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="min-h-[400px] w-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
