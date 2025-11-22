import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FleetSection({ products }) {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const atStart = el.scrollLeft <= 10;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 10;

    setShowLeft(!atStart);
    setShowRight(!atEnd);
  };

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.4;
    el.scrollTo({
      left: direction === "left" ? el.scrollLeft - scrollAmount : el.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      checkScroll(); // initial check
      return () => el.removeEventListener("scroll", checkScroll);
    }
  }, []);

  return (
    <section className="mt-14 p-7 max-w-6xl mx-auto relative">
      <h3 className="text-2xl font-bold text-blue-800 mb-6">Our Fantastic Fleet</h3>

      {/* Left Button */}
      {showLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-blue-500/80 hover:bg-blue-600 text-white p-2 rounded-full shadow-lg transition-opacity duration-300 cursor-pointer"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="flex flex-row gap-6 pb-3 scrollbar-thin  scrollbar-thumb-blue-300 scroll-smooth overflow-x-hidden"
      >
        {products.map((item, idx) => (
          <div
            key={idx}
            className="relative min-w-[340px] bg-white/70 backdrop-blur-lg rounded-xl shadow-lg p-4 transition hover:-translate-y-1 hover:scale-105 duration-300 flex flex-col gap-2 items-center"
          >
            <div className="mb-1 bg-white/50 rounded-md shadow-inner flex items-center justify-center">
              <img src={item.image[0]} alt={item.name} className="w-64 h-48 object-contain" />
            </div>
            <div className="font-bold text-lg md:text-2xl text-blue-800">{item.name}</div>
          </div>
        ))}
      </div>

      {/* Right Button */}
      {showRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-blue-500/80 hover:bg-blue-600 text-white p-2 rounded-full shadow-lg transition-opacity duration-300"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </section>
  );
}
