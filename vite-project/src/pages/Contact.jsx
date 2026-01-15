import { useState } from "react";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill all required fields");
      return;
    }

    console.log("Form Data:", formData);
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      {/* Background / Hero */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center px-4 py-16">

        {/* Main Card */}
        <div className="max-w-6xl w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

          {/* LEFT SECTION – Contact Info */}
          <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white p-4  flex flex-col justify-center h-full">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-orange-500">
                Get In Touch
              </h2>

              <p className="text-blue-100 mb-8 text-lg">
                Have questions or need cleaning services?  
                Contact us anytime and our team will be happy to help you.
              </p>
            </div>

            {/* Info Items */}
            <div className="space-y-8">

              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-full">
                  <span className="text-xl text-white">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Our Address</h4>
                  <p className="text-blue-100">
                    60/106-107, Rajat path ,sector 5,Mansrover, Jaipur
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-full">
                  <span className="text-xl text-white">📞</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Call Us</h4>
                  <p className="text-blue-100">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-full">
                  <span className="text-xl text-white">⏰</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Working Hours</h4>
                  <p className="text-blue-100">
                    Mon – Sat: 9:00 AM – 7:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SECTION – Contact Form */}
          <div className="p-10 flex flex-col justify-center h-full">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-blue-600 mb-2">
                Contact Us
              </h1>
              <p className="text-gray-600">
                Book professional home & office cleaning services
              </p>
            </div>

            {submitted && (
              <p className="text-green-600 mb-6 font-semibold">
                Thank you! We will contact you soon.
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;