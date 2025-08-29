import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "banner2.jpeg",
  "banner1.jpeg",
  "banner3.jpg",
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, [length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="relative w-full h-screen">
      {/* Slides */}
      <div className="overflow-hidden relative w-full h-full">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`Slide ${idx}`}
              className="w-full h-full object-cover"
            />
            {/* Overlay (optional) */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Explore The World
              </h1>
              <p className="text-lg md:text-2xl mb-6">
                Find your next journey with us
              </p>
              <a
                href="#tourpackages"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold shadow-lg transition"
              >
                Discover Tours
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 -translate-y-1/2 bg-white/70 hover:bg-white p-3 rounded-full shadow-md"
      >
        <FaChevronLeft className="text-slate-700" />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 -translate-y-1/2 bg-white/70 hover:bg-white p-3 rounded-full shadow-md"
      >
        <FaChevronRight className="text-slate-700" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              current === idx ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
