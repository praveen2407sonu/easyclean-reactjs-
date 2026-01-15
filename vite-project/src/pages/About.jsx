import AboutSection from "../components/AboutSection";

const About = () => {
  return (
    <div className="bg-gray-50">

      {/* ===== HERO SECTION (Same as Gallery) ===== */}
      <div className="bg-blue-600 py-24 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">
          About <span className="text-orange-500">Us</span>
        </h1>
        <p className="text-3xl max-w-2xl mx-auto">
          Professional & Reliable Cleaning Services You Can Trust
        </p>
      </div>

      {/* ===== ABOUT CONTENT ===== */}
      <AboutSection showFull={true} />

    </div>
  );
};

export default About;
