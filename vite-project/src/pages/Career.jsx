import Footer from "../components/Footer";

const Career = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-600 py-24 text-center text-white">
        <h1 className="text-5xl font-bold mb-4 text-orange-500">
          Careers
        </h1>
        <p className="text-3xl max-w-2xl mx-auto">
          Join our professional cleaning team and grow your future with us
        </p>
      </section>

      {/* Career Content */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Current Openings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Job Card */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Cleaning Staff</h3>
              <p className="text-gray-600 mb-4">
                Residential & commercial cleaning work with flexible shifts.
              </p>
              <ul className="text-sm text-gray-500 mb-4 list-disc list-inside">
                <li>Experience: 0–2 Years</li>
                <li>Location: Local Areas</li>
                <li>Salary: As per role</li>
              </ul>
              <button className="bg-orange-400 hover:bg-blue-400 text-white px-6 py-2 font-semibold">
                Apply Now
              </button>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Supervisor</h3>
              <p className="text-gray-600 mb-4">
                Manage cleaning teams and ensure service quality.
              </p>
              <ul className="text-sm text-gray-500 mb-4 list-disc list-inside">
                <li>Experience: 2–5 Years</li>
                <li>Team Management</li>
                <li>Full Time</li>
              </ul>
              <button className="bg-orange-400 hover:bg-blue-400 text-white px-6 py-2 font-semibold">
                Apply Now
              </button>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Office Executive</h3>
              <p className="text-gray-600 mb-4">
                Handle calls, bookings & customer <br /> coordination.
              </p>
              <ul className="text-sm text-gray-500 mb-4 list-disc list-inside">
                <li>Experience: 1–3 Years</li>
                <li>Office Work</li>
                <li>Day Shift</li>
              </ul>
              <button className="bg-orange-400 hover:bg-blue-400 text-white px-6 py-2 font-semibold">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Career;
