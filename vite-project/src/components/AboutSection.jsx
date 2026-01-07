import aboutImg from "../assets/images/banner3.jpg";

const AboutSection = ({ showFull = false }) => {
  return (
    <section className="w-full bg-gradient-to-r from-blue-50 to-orange-50 py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* Left Content */}
          <div className="text-center md:text-left">

            {/* Heading moved here */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-blue-600">About</span>{" "}
              <span className="text-orange-400">Us</span>
            </h2>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
              We Provide{" "}
              <span className="text-orange-400">Professional</span> &{" "}
              <span className="text-blue-600">Reliable</span> Cleaning Services
            </h3>

            <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
              We are a trusted cleaning service company offering high-quality{" "}
              <span className="text-blue-600 font-medium">residential</span> and{" "}
              <span className="text-orange-400 font-medium">commercial</span>{" "}
              cleaning solutions. Our expert team ensures every corner shines.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
              Using eco-friendly products and modern equipment, we deliver safe,
              effective, and affordable cleaning services tailored to your needs.
            </p>

            {showFull && (
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                With years of industry experience, our mission is to exceed
                customer expectations through dedication, professionalism, and
                consistent quality service.
              </p>
            )}
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center items-center mt-8 md:mt-0">

            <div className="hidden sm:block absolute -top-8 -left-8 w-[85%] h-[85%] bg-blue-600 rounded-[60%_40%_55%_45%] opacity-20"></div>
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-[85%] h-[85%] bg-orange-400 rounded-[45%_55%_40%_60%] opacity-30"></div>

            <img
              src={aboutImg}
              alt="About Cleaning Service"
              className="relative w-full max-w-sm sm:max-w-md md:max-w-lg h-[260px] sm:h-[320px] md:h-[380px] object-cover rounded-[40%_60%_55%_45%] shadow-2xl border-4 border-white"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
