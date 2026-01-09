import { Home, Building2, Sofa, Sparkles } from "lucide-react";

const services = [
  {
    title: "Home Deep Cleaning",
    desc: "Complete deep cleaning for kitchens, bathrooms, bedrooms & living areas.",
    icon: Home,
  },
  {
    title: "Office Cleaning",
    desc: "Professional office cleaning to maintain hygiene & productivity.",
    icon: Building2,
  },
  {
    title: "Sofa & Carpet Cleaning",
    desc: "Advanced shampooing and vacuum cleaning for sofas & carpets.",
    icon: Sofa,
  },
  {
    title: "Bathroom & Kitchen Cleaning",
    desc: "Grease, stains & germ-free cleaning using eco-friendly products.",
    icon: Sparkles,
  },
];

const CleaningServices = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Cleaning Services
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We offer reliable and affordable cleaning services for homes and
            offices using modern equipment and trained professionals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center shadow hover:shadow-xl transition duration-300"
              >
                <div className="flex justify-center mb-5">
                  <Icon className="w-12 h-12 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <button className="bg-orange-400 hover:bg-blue-400 text-white px-8 py-3 text-lg font-semibold transition duration-300">
            View All Services
          </button>
        </div>

      </div>
    </section>
  );
};

export default CleaningServices;
