import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[92vw] z-50 bg-white/90 backdrop-blur-md border border-slate-200/50 shadow-lg rounded-2xl transition-all duration-300">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo & Brand */}
        <NavLink to="/">
          <div className="flex items-center gap-3 text-blue-900">
            <img
              src={logo}
              alt="Royal Airplanes Logo"
              className="w-14 h-14 md:w-22 md:h-22 object-contain"
            />
            <div className="flex flex-col leading-tight logo-text">
              <p className="font-bold text-sm md:text-lg tracking-tight">
                The Royal Airplanes
              </p>
              <span className="text-sm md:text-2xl text-blue-600">
                by Sanjana Singh Chauhan
              </span>
            </div>
          </div>
        </NavLink>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 font-semibold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-800">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-cyan-500 transition ${
                isActive ? "text-cyan-500" : "text-slate-500"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/planes"
            className={({ isActive }) =>
              `hover:text-cyan-500 transition ${
                isActive ? "text-cyan-500" : "text-slate-500"
              }`
            }
          >
            Planes & Helis
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `hover:text-cyan-500 transition ${
                isActive ? "text-cyan-500" : "text-slate-500"
              }`
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-cyan-500 transition ${
                isActive ? "text-cyan-500" : "text-slate-500"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-cyan-500 transition ${
                isActive ? "text-cyan-500" : "text-slate-500"
              }`
            }
          >
            Contact
          </NavLink>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-800"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-80 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 font-semibold text-blue-800">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-cyan-500 transition"
          >
            Home
          </NavLink>
          <NavLink
            to="/planes"
            onClick={() => setIsOpen(false)}
            className="hover:text-cyan-500 transition"
          >
            Planes & Helis
          </NavLink>
          <NavLink
            to="/gallery"
            onClick={() => setIsOpen(false)}
            className="hover:text-cyan-500 transition"
          >
            Gallery
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-cyan-500 transition"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-cyan-500 transition"
          >
            Contact
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
