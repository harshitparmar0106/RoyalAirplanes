import React from "react";
import { NavLink } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "../assets/logo.png";




const Footer = () => {
  return (
    <footer className="bg-[#0C1C2C] text-slate-300 py-16 px-6 relative overflow-hidden">
      {/* Gradient Overlays */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div>
          <img
            src={logo}
            alt="Royal Airplanes Logo"
            className="w-32 mb-4"
          />
          <p className="text-slate-400 text-sm leading-relaxed">
            At{" "}
            <span className="text-amber-400 font-semibold">
              Royal Airplanes
            </span>
            , we share your passion for flight — bringing high-quality, tested
            RC planes to enthusiasts across India.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold text-amber-400 mb-4">
            Get in Touch
          </h3>
          <p className="text-slate-400 mb-6">
            Whether you have a question about our fleet, pricing, or need
            support, our team is ready to help you take off!
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-cyan-400" />
              <a
                href="tel:+919464394202"
                className="hover:text-cyan-400 transition"
              >
                +91 94643 94202
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-cyan-400" />
              <a
                href="mailto:royalairplanes@gmail.com"
                className="hover:text-cyan-400 transition"
              >
                royalairplanes@gmail.com
              </a>
            </li>
            {/* <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
              <p className="text-slate-400 text-sm leading-relaxed">
                Royal Airplanes Pvt. Ltd.
                <br />
                C-24 Sethi Colony Vikas Marg
                <br />
                Jaipur, Rajasthan, India – 302004
              </p>
            </li> */}
          </ul>
        </div>

        {/* Quick Links (optional) */}
        <div>
          <h3 className="text-xl font-semibold text-amber-400 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li>
              <NavLink to="/" className="hover:text-cyan-400 transition">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-cyan-400 transition">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/planes" className="hover:text-cyan-400 transition">
                Planes & Helis
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className="hover:text-cyan-400 transition">
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-cyan-400 transition">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="relative z-10 mt-16 border-t border-slate-700 pt-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-amber-400 font-semibold">The Royal Airplanes</span>.
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
