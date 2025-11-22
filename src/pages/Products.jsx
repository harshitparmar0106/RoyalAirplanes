import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../assets/data";
import { NavLink } from "react-router-dom";
import { Filter, X, MapPinPlusInside } from "lucide-react";

const Products = ({ setProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 70000]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      selectedCategory === "all" || p.category === selectedCategory;
    const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
    console.log(matchesPrice);
    const matchesSearch = p.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  const handleMinChange = (e) => {
    const newMin = parseInt(e.target.value);
    if (newMin <= priceRange[1]) {
      setPriceRange([newMin, priceRange[1]]);
    }
  };

  const handleMaxChange = (e) => {
    const newMax = parseInt(e.target.value);
    if (newMax >= priceRange[0]) {
      setPriceRange([priceRange[0], newMax]);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100 py-24 px-6 pt-34 md:pt-44">
      <p className="text-center text-3xl  md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-800 mb-4 md:mb-8">
        Fantastic Fleet
      </p>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-center gap-10">
        {/* FILTER SIDEBAR / DROPDOWN */}
        <div className="w-full lg:w-1/4">
          {/* Filter Toggle Button (visible on mobile) */}
          <p className="text-white px-4 py-2 text-lg leading-relaxed bg-linear-to-r from-cyan-400 to-blue-400 rounded-2xl mb-6 shadow">
            If you want to purchase any Models from our collection, please mail
            us at{" "}
            <span className="text-blue-800">royalairplanes@gmail.com</span>
          </p>
          <div className="flex justify-between items-center mb-4 lg:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-medium shadow-md hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              <Filter className="w-5 h-5" />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
          </div>

          {/* Filter Dropdown on Mobile / Sidebar on Desktop */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              showFilters
                ? "max-h-[1000px] opacity-100"
                : "max-h-0 opacity-0 lg:max-h-full lg:opacity-100"
            } lg:opacity-100 lg:max-h-full`}
          >
            {/* Category Filter */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-slate-200 shadow-lg shadow-slate-200/40">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-slate-700">
                  Category
                </h3>
                <p className="text-sm font-medium text-blue-600">
                  {filteredProducts.length} items
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {["all", "airplane", "helicopter", "jet", "glider"].map(
                  (planes) => (
                    <button
                      key={planes}
                      onClick={() => setSelectedCategory(planes)}
                      className={`w-full text-left px-5 py-2.5 rounded-xl transition-all duration-300 font-medium capitalize ${
                        selectedCategory === planes
                          ? "bg-linear-to-r from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/30"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {planes === "all"
                        ? "All Products"
                        : `${
                            planes.charAt(0).toUpperCase() + planes.slice(1)
                          }s`}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mt-8 bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-slate-200 shadow-lg shadow-slate-200/40">
              <h3 className="text-lg font-semibold mb-4 text-slate-700">
                Price Range
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between text-sm text-slate-500">
                  <span>₹{priceRange[0].toLocaleString()}</span>
                  <span>₹{priceRange[1].toLocaleString()}</span>
                </div>

                <div className="relative w-full h-10">
                  {/* Track */}
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 rounded-full -translate-y-1/2"></div>

                  {/* Active range */}
                  <div
                    className="absolute top-1/2 h-1 bg-blue-500 rounded-full -translate-y-1/2 transition-all"
                    style={{
                      left: `${(priceRange[0] / 70000) * 100}%`,
                      right: `${100 - (priceRange[1] / 70000) * 100}%`,
                    }}
                  ></div>

                  {/* Range inputs */}
                  <input
                    type="range"
                    min="0"
                    max="70000"
                    step="1000"
                    value={priceRange[0]}
                    onChange={handleMinChange}
                    className="absolute w-full h-1 appearance-none bg-transparent cursor-pointer z-20"
                  />
                  <input
                    type="range"
                    min="0"
                    max="70000"
                    step="1000"
                    value={priceRange[1]}
                    onChange={handleMaxChange}
                    className="absolute w-full h-0 appearance-none bg-transparent cursor-pointer z-10"
                  />

                  {/* Icon on min thumb */}
                  <div
                    className="absolute top-1/2 -translate-y-[120%] -translate-x-1/2 transition-all"
                    style={{
                      left: `calc(${(priceRange[0] / 70000) * 100}% )`,
                    }}
                  >
                    <MapPinPlusInside
                      className="w-5 h-5 text-blue-600 drop-shadow-md"
                      strokeWidth={2.5}
                    />
                  </div>

                  {/* Icon on max thumb */}
                  <div
                    className="absolute top-1/2 -translate-y-[120%] -translate-x-1/2 transition-all"
                    style={{
                      left: `calc(${(priceRange[1] / 70000) * 100}% )`,
                    }}
                  >
                    <MapPinPlusInside
                      className="w-5 h-5 text-blue-600 drop-shadow-md"
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="flex-1 bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-slate-200 shadow-lg shadow-slate-200/40">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Our Products</h2>
            <p className="text-slate-500 text-sm">
              Showing {filteredProducts.length} results
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <NavLink to={`/planes/${product.id}`} key={product.id}>
                  <ProductCard product={product} />
                </NavLink>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-slate-400 text-lg font-medium">
                No products found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
