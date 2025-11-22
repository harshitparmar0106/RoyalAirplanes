import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const ProductModal = ({ product, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = Array.isArray(product.image) ? product.image : [product.image];

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide border border-slate-700 shadow-2xl relative">
        {/* Image Carousel */}
        <div className="relative w-full h-80 md:h-96 lg:h-[420px] rounded-t-3xl overflow-hidden">
          <img
            src={images[currentImage]}
            alt={product.name}
            className="w-full h-full object-contain transition-all duration-500"
          />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 bg-black/50 backdrop-blur-md text-white p-2 rounded-full hover:bg-black/70 transition"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Image Indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                    currentImage === index
                      ? "bg-cyan-500 scale-125"
                      : "bg-gray-400/50 hover:bg-gray-500/70"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="p-8">
          <h2 className="text-xl md:text-3xl font-bold text-blue-900 mb-2">
            {product.name}
          </h2>
          <p className="text-blue-700 text-xl font-semibold mb-6 bg-slate-200 rounded-3xl max-w-fit px-4 py-2">
            ₹{product.price?.toLocaleString()}
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-black mb-6 flex items-center">
            <div className="w-1 h-8 bg-cyan-500 mr-4 rounded-full" />
            Technical Specifications
          </h3>

          <div className="grid grid-cols-2 gap-6 mb-8">
            {Object.entries(product.specs || {}).map(([key, value]) => (
              <div
                key={key}
                className="bg-linear-to-br from-slate-100/50 to-slate-300/30 rounded-xl p-4 border border-slate-300/60"
              >
                <p className="text-slate-600 text-sm capitalize mb-1">
                  {key.replace(/([A-Z])/g, " $1")}
                </p>
                <p className="text-black text-lg font-semibold">{value}</p>
              </div>
            ))}
          </div>

          <button
            className="w-full bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
          >
            <NavLink to="/contact">Inquire About This Product</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
