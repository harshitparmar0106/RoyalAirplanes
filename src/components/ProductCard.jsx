import { ChevronRight } from "lucide-react";

const ProductCard = ({ product, setProduct }) => {
  return (
    <div
      onClick={() => setProduct(product)}
      className="group cursor-pointer bg-linear-to-br from-slate-100/50 to-slate-300/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
    >
      <div className="relative overflow-hidden h-94">
        {/* First image (default) */}
        <img
          src={product.image[0]}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-contain transition-opacity duration-700 opacity-100 group-hover:opacity-0"
        />

        {/* Second image (on hover) */}
        {product.image[1] && (
          <img
            src={product.image[1]}
            alt={`${product.name} alt`}
            className="absolute inset-0 w-full h-full object-contain transition-opacity duration-700 opacity-0 group-hover:opacity-100"
          />
        )}

        <div className="absolute" />
        <div className="absolute bottom-4 right-4 bg-cyan-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
          {product.category.toUpperCase()}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-md md:text-xl font-bold text-black mb-2 group-hover:text-cyan-400 transition-colors">
          {product.name}
        </h3>
        <div className="backdrop-blur-3xl bg-gray-200 text-blue-500 px-4 py-2 rounded-full text-sm font-semibold max-w-fit">
          ₹{product.price.toLocaleString()}
        </div>
        <div className="backdrop-blur-3xl bg-gray-200 text-cyan-500 px-4 py-2 rounded-full text-sm font-semibold mt-4 max-w-fit">
          View Details <ChevronRight className="inline-block w-4 h-4 ml-1" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
