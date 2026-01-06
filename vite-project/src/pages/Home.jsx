import { useEffect, useState } from "react";

// ✅ Images import
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import banner4 from "../assets/images/banner4.jpg";
import banner5 from "../assets/images/banner5.jpg";

const slides = [
  {
    id: 1,
    image: banner1,
    title: "Professional Cleaning Services",
    subtitle: "We make your home & office shine like new",
  },
  {
    id: 2,
    image: banner2,
    title: "Expert Deep Cleaning",
    subtitle: "Safe, reliable & eco-friendly solutions",
  },
  {
    id: 3,
    image: banner3,
    title: "Residential & Commercial Cleaning",
    subtitle: "Because cleanliness matters",
  },
  {
    id: 4,
    image: banner4,
    title: "Trusted Cleaning Experts",
    subtitle: "Quality service you can rely on",
  },
  {
    id: 5,
    image: banner5,
    title: "Affordable & Professional",
    subtitle: "Cleaning made simple & effective",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>

    <section className="relative w-full h-[85vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
              {slide.title}
            </h1>
            <p className="text-gray-100 text-lg md:text-xl mb-6 max-w-2xl">
              {slide.subtitle}
            </p>

            <button className="bg-orange-400 hover:bg-blue-400  text-white px-8 py-3 border-4 hover:border-6 text-lg font-semibold shadow-lg">
              Explore Now
            </button>
          </div>
        </div>
      ))}
    </section>
    

   {/* Future sections yahan add kar sakte ho */}

    </>
  );
};


export default Home;


     
   

