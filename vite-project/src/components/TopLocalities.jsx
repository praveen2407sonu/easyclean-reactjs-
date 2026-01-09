import { MapPin } from "lucide-react";

const localities = [
  "Vaishali Nagar",
  "Mansarovar",
  "Malviya Nagar",
  "Jagatpura",
  "Tonk Road",
  "C-Scheme",
  "Bani Park",
  "Civil Lines",
  "Raja Park",
  "Ajmer Road",
  "Sodala",
  "Vidhyadhar Nagar",
];

const TopLocalities = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Top <span className="text-orange-500"> Localities </span>  For Home <span className="text-orange-500"> Deep Cleaning </span>  in Jaipur
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We provide professional home deep cleaning services across all major
            residential areas of Jaipur with trained staff and eco-friendly
            products.
          </p>
        </div>

        {/* Localities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {localities.map((area, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white p-5 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <MapPin className="text-orange-400 w-6 h-6" />
              <span className="text-gray-700 font-medium">{area}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <button className="bg-orange-400 hover:bg-blue-400 text-white px-8 py-3 text-lg font-semibold transition duration-300">
            Book Deep Cleaning in Jaipur
          </button>
        </div>

      </div>
    </section>
  );
};

export default TopLocalities;
