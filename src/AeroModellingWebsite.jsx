import React, { useState, useEffect } from 'react';
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
} from 'lucide-react';

const AeroModellingWebsite = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      id: 1,
      name: 'Thunder X-Wing Pro',
      category: 'plane',
      price: 28500,
      image:
        'https://images.unsplash.com/photo-1583267746897-e8b70b57797f?w=800&h=600&fit=crop',
      specs: {
        wingspan: '1.8m',
        weight: '3.2kg',
        motor: 'Brushless 2200KV',
        battery: '4S LiPo',
        range: '2km',
      },
    },
    {
      id: 2,
      name: 'SkyGlider Elite',
      category: 'plane',
      price: 18500,
      image:
        'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&h=600&fit=crop',
      specs: {
        wingspan: '1.5m',
        weight: '2.1kg',
        motor: 'Brushless 1800KV',
        battery: '3S LiPo',
        range: '1.5km',
      },
    },
    {
      id: 3,
      name: 'Raptor V5 Fighter',
      category: 'plane',
      price: 35000,
      image:
        'https://images.unsplash.com/photo-1583267746897-e8b70b57797f?w=800&h=600&fit=crop',
      specs: {
        wingspan: '2.0m',
        weight: '4.5kg',
        motor: 'Brushless 2800KV',
        battery: '6S LiPo',
        range: '3km',
      },
    },
    {
      id: 4,
      name: 'Phoenix Aerobatic',
      category: 'plane',
      price: 24000,
      image:
        'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&h=600&fit=crop',
      specs: {
        wingspan: '1.6m',
        weight: '2.8kg',
        motor: 'Brushless 2000KV',
        battery: '4S LiPo',
        range: '1.8km',
      },
    },
    {
      id: 5,
      name: 'Cruiser 3000',
      category: 'plane',
      price: 15000,
      image:
        'https://images.unsplash.com/photo-1583267746897-e8b70b57797f?w=800&h=600&fit=crop',
      specs: {
        wingspan: '1.2m',
        weight: '1.5kg',
        motor: 'Brushless 1500KV',
        battery: '3S LiPo',
        range: '1km',
      },
    },
    {
      id: 6,
      name: 'Eagle Trainer Pro',
      category: 'plane',
      price: 12000,
      image:
        'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&h=600&fit=crop',
      specs: {
        wingspan: '1.4m',
        weight: '1.8kg',
        motor: 'Brushed 180',
        battery: '2S LiPo',
        range: '800m',
      },
    },
    {
      id: 7,
      name: 'Stunt Master X1',
      category: 'plane',
      price: 32000,
      image:
        'https://images.unsplash.com/photo-1583267746897-e8b70b57797f?w=800&h=600&fit=crop',
      specs: {
        wingspan: '1.9m',
        weight: '3.8kg',
        motor: 'Brushless 2500KV',
        battery: '5S LiPo',
        range: '2.5km',
      },
    },
    {
      id: 8,
      name: 'Velocity Sprint',
      category: 'plane',
      price: 21000,
      image:
        'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&h=600&fit=crop',
      specs: {
        wingspan: '1.3m',
        weight: '2.3kg',
        motor: 'Brushless 1900KV',
        battery: '4S LiPo',
        range: '1.6km',
      },
    },
    {
      id: 9,
      name: 'Cloud Dancer',
      category: 'plane',
      price: 19500,
      image:
        'https://images.unsplash.com/photo-1583267746897-e8b70b57797f?w=800&h=600&fit=crop',
      specs: {
        wingspan: '1.7m',
        weight: '2.6kg',
        motor: 'Brushless 1700KV',
        battery: '3S LiPo',
        range: '1.4km',
      },
    },
    {
      id: 10,
      name: 'Jet Stream 500',
      category: 'plane',
      price: 42000,
      image:
        'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&h=600&fit=crop',
      specs: {
        wingspan: '2.2m',
        weight: '5.2kg',
        motor: 'Brushless 3000KV',
        battery: '6S LiPo',
        range: '3.5km',
      },
    },
    {
      id: 11,
      name: 'Horizon Glider',
      category: 'plane',
      price: 16500,
      image:
        'https://images.unsplash.com/photo-1583267746897-e8b70b57797f?w=800&h=600&fit=crop',
      specs: {
        wingspan: '2.5m',
        weight: '2.0kg',
        motor: 'Brushless 1200KV',
        battery: '3S LiPo',
        range: '2km',
      },
    },
    {
      id: 12,
      name: 'Turbo Ace',
      category: 'plane',
      price: 27500,
      image:
        'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&h=600&fit=crop',
      specs: {
        wingspan: '1.6m',
        weight: '3.1kg',
        motor: 'Brushless 2100KV',
        battery: '4S LiPo',
        range: '2.2km',
      },
    },
    {
      id: 13,
      name: 'Sky Warrior',
      category: 'plane',
      price: 22000,
      image:
        'https://images.unsplash.com/photo-1583267746897-e8b70b57797f?w=800&h=600&fit=crop',
      specs: {
        wingspan: '1.5m',
        weight: '2.7kg',
        motor: 'Brushless 2000KV',
        battery: '4S LiPo',
        range: '1.7km',
      },
    },
    {
      id: 14,
      name: 'WindRider Pro',
      category: 'plane',
      price: 20000,
      image:
        'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&h=600&fit=crop',
      specs: {
        wingspan: '1.8m',
        weight: '2.4kg',
        motor: 'Brushless 1600KV',
        battery: '3S LiPo',
        range: '1.5km',
      },
    },
    {
      id: 15,
      name: 'Falcon Speed',
      category: 'plane',
      price: 25500,
      image:
        'https://images.unsplash.com/photo-1583267746897-e8b70b57797f?w=800&h=600&fit=crop',
      specs: {
        wingspan: '1.4m',
        weight: '2.9kg',
        motor: 'Brushless 2300KV',
        battery: '4S LiPo',
        range: '1.9km',
      },
    },
    {
      id: 16,
      name: 'Cyclone H-400',
      category: 'helicopter',
      price: 38000,
      image:
        'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&h=600&fit=crop',
      specs: {
        rotorDiameter: '1.2m',
        weight: '3.5kg',
        motor: 'Brushless 2400KV',
        battery: '6S LiPo',
        range: '2km',
      },
    },
    {
      id: 17,
      name: 'Viper Heli Pro',
      category: 'helicopter',
      price: 45000,
      image:
        'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&h=600&fit=crop',
      specs: {
        rotorDiameter: '1.5m',
        weight: '4.2kg',
        motor: 'Brushless 2600KV',
        battery: '6S LiPo',
        range: '2.5km',
      },
    },
    {
      id: 18,
      name: 'Swift Mini Copter',
      category: 'helicopter',
      price: 18000,
      image:
        'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&h=600&fit=crop',
      specs: {
        rotorDiameter: '0.8m',
        weight: '1.8kg',
        motor: 'Brushless 1800KV',
        battery: '4S LiPo',
        range: '1.2km',
      },
    },
  ];

  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      selectedCategory === 'all' || p.category === selectedCategory;
    const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
    const matchesSearch = p.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  const ProductCard = ({ product }) => (
    <div
      onClick={() => setSelectedProduct(product)}
      className="group cursor-pointer bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60" />
        <div className="absolute top-4 right-4 bg-cyan-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
          ₹{product.price.toLocaleString()}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {product.name}
        </h3>
        <p className="text-slate-400 text-sm mb-4 capitalize">
          {product.category}
        </p>
        <div className="flex items-center text-cyan-400 text-sm font-medium">
          View Details{' '}
          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );

  const ProductModal = ({ product, onClose }) => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700 shadow-2xl">
        <div className="relative h-96">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-6 right-6 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-transparent p-8">
            <h2 className="text-4xl font-bold text-white mb-2">
              {product.name}
            </h2>
            <p className="text-cyan-400 text-2xl font-bold">
              ₹{product.price.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <div className="w-1 h-8 bg-cyan-500 mr-4 rounded-full" />
            Technical Specifications
          </h3>
          <div className="grid grid-cols-2 gap-6 mb-8">
            {Object.entries(product.specs).map(([key, value]) => (
              <div
                key={key}
                className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50"
              >
                <p className="text-slate-400 text-sm capitalize mb-1">
                  {key.replace(/([A-Z])/g, ' $1')}
                </p>
                <p className="text-white text-lg font-semibold">{value}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => {
              setShowContact(true);
              onClose();
            }}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
          >
            Inquire About This Product
          </button>
        </div>
      </div>
    </div>
  );

  const ContactForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      message: '',
    });

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl max-w-2xl w-full border border-slate-700 shadow-2xl p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
            <button
              onClick={onClose}
              className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <form className="space-y-6">
            <div>
              <label className="block text-slate-300 mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-all"
                placeholder="Your name"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-2 font-medium">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-all"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>
            <div>
              <label className="block text-slate-300 mb-2 font-medium">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows="4"
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-all resize-none"
                placeholder="Tell us about your requirements..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8 pt-8 border-t border-slate-700 grid grid-cols-3 gap-4">
            <div className="text-center">
              <Phone className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <p className="text-slate-400 text-sm">+91 98765 43210</p>
            </div>
            <div className="text-center">
              <Mail className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <p className="text-slate-400 text-sm">info@aerowings.com</p>
            </div>
            <div className="text-center">
              <MapPin className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <p className="text-slate-400 text-sm">Jaipur, India</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-cyan-500/10'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Plane className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AeroWings
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#products"
              className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Products
            </a>
            <button
              onClick={() => setShowContact(true)}
              className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>
          <button
            onClick={() => setShowContact(true)}
            className="hidden md:block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
          >
            Get In Touch
          </button>
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        {mobileMenu && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-800">
            <nav className="flex flex-col p-6 space-y-4">
              <a
                href="#"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#products"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Products
              </a>
              <button
                onClick={() => {
                  setShowContact(true);
                  setMobileMenu(false);
                }}
                className="text-slate-300 hover:text-cyan-400 transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fadeIn">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Elevate Your Flight
            </span>
          </h1>
          <p
            className="text-xl md:text-2xl text-slate-300 mb-12 animate-fadeIn"
            style={{ animationDelay: '0.2s' }}
          >
            Premium RC Aircraft & Helicopters for Enthusiasts
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn"
            style={{ animationDelay: '0.4s' }}
          >
            <a
              href="#products"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
            >
              Explore Collection
            </a>
            <button
              onClick={() => setShowContact(true)}
              className="border-2 border-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Collection
            </h2>
            <p className="text-slate-400 text-lg">
              Discover precision-engineered RC aircraft
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12 flex flex-col lg:flex-row gap-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search aircraft..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl pl-12 pr-4 py-4 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-all"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden bg-slate-800/50 border border-slate-700 rounded-xl px-6 py-4 flex items-center justify-center gap-2 hover:border-cyan-500 transition-all"
            >
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div
              className={`lg:w-72 space-y-6 ${
                showFilters ? 'block' : 'hidden lg:block'
              }`}
            >
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Category
                </h3>
                <div className="space-y-3">
                  {['all', 'plane', 'helicopter'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                        selectedCategory === cat
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                          : 'bg-slate-700/30 text-slate-300 hover:bg-slate-700/50'
                      }`}
                    >
                      {cat === 'all'
                        ? 'All Products'
                        : cat.charAt(0).toUpperCase() + cat.slice(1) + 's'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Price Range
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-slate-400">
                    <span>₹{priceRange[0].toLocaleString()}</span>
                    <span>₹{priceRange[1].toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="50000"
                    step="1000"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([0, parseInt(e.target.value)])
                    }
                    className="w-full accent-cyan-500"
                  />
                </div>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold mb-3 text-white">
                  Results
                </h3>
                <p className="text-3xl font-bold text-cyan-400">
                  {filteredProducts.length}
                </p>
                <p className="text-slate-400 text-sm">Products found</p>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
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
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 border-t border-slate-800 py-12 px-6">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Plane className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AeroWings
            </span>
          </div>
          <p className="text-slate-400 mb-6">
            Premium RC Aircraft & Helicopters
          </p>
          <p className="text-slate-500 text-sm">
            © 2024 AeroWings. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Modals */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
      {showContact && <ContactForm onClose={() => setShowContact(false)} />}
    </div>
  );
};

export default AeroModellingWebsite;
