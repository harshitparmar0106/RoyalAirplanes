import React from "react";
import { motion } from "framer-motion";
import { galleryData } from "../assets/data.js";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 via-sky-100/40 to-blue-50 py-24 px-6 md:px-16 pt-54">
      <div className="text-center mb-16">
        <h1 className="text-3xl pb-12 md:pb-4 md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-800">
          ✈️ Aviation Gallery
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Discover iconic airplanes, breathtaking stunts, and historic milestones
          that shaped the world of aviation.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {galleryData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-3xl shadow-xl border border-slate-200/50 bg-white/60 backdrop-blur-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="overflow-hidden h-64">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-20">
        <p className="text-slate-500 italic">
          “Aviation is proof that given the will, we have the capacity to achieve the impossible.” — Eddie Rickenbacker
        </p>
      </div>
    </div>
  );
};

export default Gallery;
