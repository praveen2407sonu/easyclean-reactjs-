import home from "../assets/images/service5.jpg";
import office from "../assets/images/service10.jpg";
import kitchen from "../assets/images/service4.jpg";
import bathroom from "../assets/images/service8.jpg";
import sofa from "../assets/images/service9.jpg";
import floor from "../assets/images/service3.jpg";
import bedroom from "../assets/images/service6.jpg";
import glass from "../assets/images/service7.jpg";
import beforekitchen from "../assets/images/before-cleaning.jpg";
import afterkitchen from "../assets/images/after-cleaning.jpg";
import bathroombefore from "../assets/images/bathroom-cleaning-service.jpeg";
import bathroomafter from "../assets/images/bathroom-after.jpg";

const Gallery = () => {
  const images = [
    { src: home },
    { src: office },
    { src: kitchen },
    { src: bathroom },
    { src: sofa },
    { src: floor },
    { src: bedroom },
    { src: glass },
  ];

  const videos = [
    "https://www.youtube.com/embed/1j8kYzZqkrs",
    "https://www.youtube.com/embed/ysz5S6PUM-U",
  ];

  return (
    <div className="bg-gray-50">
      
      {/* Hero Section */}
      <div className="bg-blue-600 py-24 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">
          Our <span className="text-orange-500">Cleaning</span> Gallery
        </h1>
        <p className="text-lg max-w-2xl mx-auto  text-3xl">
          Professional home & office cleaning services you can trust
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Image Gallery */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">
          Our Recent Work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={item.src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-56 object-cover"
              />
              {/* Title removed */}
            </div>
          ))}
        </div>
       
        {/* Before & After Gallery Section */}
        <div className="mt-32">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Before & After Cleaning
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
            See the difference our professional cleaning services make.
            These before and after images show real results from our recent work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Item 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-2">
                <img
                  src={beforekitchen}
                  alt="Before Cleaning"
                  className="w-full h-64 object-cover"
                />
                <img
                  src={afterkitchen}
                  alt="After Cleaning"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-700">
                  Kitchen Deep Cleaning
                </h3>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-2">
                <img
                  src={bathroombefore}
                  alt="Before Cleaning"
                  className="w-full h-64 object-cover"
                />
                <img
                  src={bathroomafter}
                  alt="After Cleaning"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-700">
                  Bathroom Cleaning
                </h3>
              </div>
            </div>

          </div>
        </div>

        {/* Video Section */}
        <div className="mt-28">
          <h2 className="text-5xl font-semibold text-gray-800 mb-12 text-center">
            Our <span className="text-orange-500">Cleaning </span><span className="text-blue-500"> Process</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <iframe
                  className="w-full h-80"
                  src={video}
                  title="Cleaning Video"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Gallery;
