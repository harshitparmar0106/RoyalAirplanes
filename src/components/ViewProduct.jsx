import { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "../assets/data.js"; // your data file

const ViewProduct = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  const [currentImage, setCurrentImage] = useState(0);
  const images = Array.isArray(product.image) ? product.image : [product.image];

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-semibold text-slate-700">
        Product not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-34 md:pt-54 bg-linear-to-b from-slate-50 via-white to-slate-100 text-slate-800 py-24 px-6 md:px-12 lg:px-24 animate-fadeIn">
      <div className="mb-12 flex items-center justify-end">
        <NavLink
          to="/planes"
          className="text-cyan-800 hover:text-blue-800 w-fit bg-slate-200 text-sm md:text-md flex items-center rounded-3xl px-4 py-2 gap-2 font-medium"
        >
          Back to Products
          <ChevronRight className="w-5 h-5" />
        </NavLink>
      </div>
      {/* Image Section */}
      <div className="relative flex flex-col md:flex-row gap-12">
        <div className="relative flex-1 rounded-3xl overflow-hidden border border-slate-300 shadow-lg">
          <img
            src={images[currentImage]}
            alt={product.name}
            className="w-full h-[400px] md:h-[500px] object-contain bg-white transition-transform duration-700 hover:scale-105"
          />

          {/* Image Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Image Indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
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

        {/* Details */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="mb-4">
            <span className="text-sm bg-cyan-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold">
              {product.category.toUpperCase()}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-4">
            {product.name}
          </h1>
          <p className="text-white text-2xl font-semibold bg-linear-to-r from-cyan-400 to-blue-400 rounded-2xl  w-fit  px-4 py-2 mb-6 ">
            ₹{product.price?.toLocaleString()}
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            Experience the thrill of flight with this exceptional RC aircraft.
            Built for both beginners and enthusiasts, this model blends power,
            precision, and durability.
          </p>

          <p className="text-white px-4 py-2 text-lg leading-relaxed bg-linear-to-r from-cyan-400 to-blue-400 rounded-2xl mb-6">
            If you want to purchase any Models from our collection, please mail
            us on{" "}
            <span className="text-blue-800">royalairplanes@gmail.com</span>
            <br />
            Also you can whatsapp any query on <span className="text-blue-800">+91-9464394202</span>
          </p>
          <NavLink
            to="/contact"
            className="w-fit bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
          >
            Inquire About This Product
          </NavLink>
        </div>
      </div>

      {/* Specifications */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 flex items-center">
          <div className="w-1 h-8 bg-cyan-500 mr-4 rounded-full" />
          Technical Specifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(product.specs || {}).map(([key, value]) => (
            <div
              key={key}
              className="bg-linear-to-br from-slate-100/70 to-slate-300/30 rounded-2xl p-6 border border-slate-300/60 hover:border-cyan-400 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <p className="text-slate-600 text-sm mb-1 capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </p>
              <p className="text-lg font-semibold text-slate-900">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
