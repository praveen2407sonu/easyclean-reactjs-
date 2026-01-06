import aboutImg from "../assets/images/banner3.jpg"; 

const AboutSection = ({ showFull = false }) => {
  return (
    <section className="w-full bg-gradient-to-r from-blue-50 to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
          <span className="text-blue-600">About</span>{" "}
          <span className="text-orange-400">Us</span>
        </h2>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-5 text-gray-800">
              We Provide{" "}
              <span className="text-orange-400">Professional</span> &{" "}
              <span className="text-blue-600">Reliable</span> Cleaning Services
            </h3>

            <p className="text-gray-600 leading-relaxed mb-4">
              We are a trusted cleaning service company offering high-quality{" "}
              <span className="text-blue-600 font-medium">
                residential
              </span>{" "}
              and{" "}
              <span className="text-orange-400 font-medium">
                commercial
              </span>{" "}
              cleaning solutions. Our expert team ensures every corner shines.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Using eco-friendly products and modern equipment, we deliver safe,
              effective, and affordable cleaning services tailored to your needs.
            </p>

            {showFull && (
              <p className="text-gray-600 leading-relaxed mb-6">
                With years of industry experience, our mission is to exceed
                customer expectations through dedication, professionalism, and
                consistent quality service.
              </p>
            )}

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 font-semibold rounded-md shadow-md transition">
                Our Services
              </button>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold rounded-md shadow-md transition">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Image */}
          
          <div className="relative flex justify-center items-center">

          {/* Blue curved background */}
         <div className="absolute -top-8 -left-8 w-[90%] h-[90%] bg-blue-600 rounded-[60%_40%_55%_45%] opacity-20"></div>

         {/* Orange curved background */}
        <div className="absolute -bottom-8 -right-8 w-[90%] h-[90%] bg-orange-400 rounded-[45%_55%_40%_60%] opacity-30"></div>

        {/* Main Image */}
      <img
        src={aboutImg}
        alt="About Cleaning Service"
        className="relative w-full h-[380px] object-cover rounded-[40%_60%_55%_45%] shadow-2xl border-4 border-white"
      />

</div>


        </div>
      </div>
    </section>
  );
};

export default AboutSection;
