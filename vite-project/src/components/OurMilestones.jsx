import { useEffect, useRef, useState } from "react";

const milestones = [
  { id: 1, value: 500, suffix: "+", title: "Happy Clients" },
  { id: 2, value: 8, suffix: "+", title: "Years of Experience" },
  { id: 3, value: 1200, suffix: "+", title: "Projects Completed" },
  { id: 4, value: 50, suffix: "+", title: "Professional Staff" },
];

const Counter = ({ value, suffix, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    const duration = 2200; // smooth premium speed

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Ease-out animation
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easeOut * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [start, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const OurMilestones = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-gray-100 to-gray-200 py-20"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Our Milestones
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-14 text-lg">
          Delivering excellence through trust, commitment, and professional
          cleaning solutions that make a difference.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {milestones.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl p-10 shadow-xl 
                         hover:-translate-y-2 hover:shadow-2xl
                         transition-all duration-500"
            >
              <h3 className="text-5xl md:text-6xl font-extrabold text-orange-500 mb-4">
                <Counter
                  value={item.value}
                  suffix={item.suffix}
                  start={visible}
                />
              </h3>
              <p className="text-gray-700 font-semibold text-lg">
                {item.title}
              </p>

              {/* underline animation */}
              <div className="mt-5 h-1 w-12 bg-orange-500 mx-auto rounded-full
                              group-hover:w-20 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMilestones;
