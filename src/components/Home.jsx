// Home.jsx
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { products } from "../assets/data.js";
import ProductCard from "../components/ProductCard.jsx";
import FeaturedFleetScroller from "../components/FeaturedFleetScroller.jsx";
import ProductModal from "../components/ProductModal.jsx";
import ContactForm from "../components/ContactForm.jsx";
import { NavLink } from "react-router-dom";
import HomeImg from "../assets/HomePlane.png"

import {
  Search,
  Filter,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Plane,
  Menu,
} from "lucide-react";
import Navbar from "./Navbar.jsx";
import Products from "../pages/Products.jsx";


export default function Home() {
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      selectedCategory === "all" || p.category === selectedCategory;
    const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
    const matchesSearch = p.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  return (
    <div className="bg-linear-to-br from-white via-blue-50 to-blue-200 min-h-screen font-sans relative">
      {/* Hero Section */}
      <section className="pt-34 md:pt-54 flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl mx-auto">
        <div className="flex-1 flex flex-col items-start gap-5 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-2 leading-tight drop-shadow-xl">
            Explore the Art of Flight
          </h1>
          <h2 className="text-2xl text-blue-500 font-medium">
            Minimal. Modern. Unforgettable.
          </h2>
          <button className="mt-6 px-7 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg transition hover:bg-blue-700">
            <NavLink to="/planes">View Collection</NavLink>
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center rounded-3xl bg-white/30 backdrop-blur-lg shadow-lg w-[320px] h-[320px]">
            <img src={HomeImg} alt="Featured Airplane" className="w-full h-full object-contain" />
        </div>
      </section>

      {/* Gallery */}
      <FeaturedFleetScroller products={products} />

      {/* Glassmorphic Search Bar */}
      <div className="mx-auto mt-12 flex flex-col items-center gap-3 max-w-full  overflow-hidden bg-white/25 backdrop-blur-sm shadow-lg px-6 py-3 border border-white/20">
        <div className="mb-12 flex flex-col lg:flex-row gap-6">
          <div className="mx-auto mt-12 flex items-center  md:w-[420px] rounded-full overflow-hidden bg-white/25 backdrop-blur-sm shadow-lg px-6 py-3 border border-white/20">
            <Search className=" text-slate-900 w-5 h-5" />
            <input
              type="text"
              className="bg-transparent outline-none w-full text-lg text-blue-800 placeholder:text-gray-400 px-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search planes and helis..."
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl w-full px-4 py-4">

          {/* Products Grid */}
          <div className="flex-1 ">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    setProduct={setSelectedProduct}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-slate-400 text-lg">
                  No products found matching your criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
