const milestones = [
  {
    id: 1,
    number: "500+",
    title: "Happy Clients",
  },
  {
    id: 2,
    number: "8+",
    title: "Years of Experience",
  },
  {
    id: 3,
    number: "1200+",
    title: "Projects Completed",
  },
  {
    id: 4,
    number: "50+",
    title: "Professional Staff",
  },
];

const OurMilestones = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Milestones
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our journey is defined by trust, dedication, and outstanding cleaning
          services delivered to hundreds of satisfied clients.
        </p>

        {/* Milestones Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {milestones.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg p-8 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-4xl font-bold text-orange-400 mb-2">
                {item.number}
              </h3>
              <p className="text-gray-700 font-semibold">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMilestones;
