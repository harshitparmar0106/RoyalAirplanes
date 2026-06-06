import React from "react";
import Home from "./components/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import NoPage from "./pages/NoPage";
import Navbar from "./components/Navbar";
import ViewProduct from "./components/ViewProduct";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AdminRoute from "./admin/AdminRoute";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  if (isAdmin) {
    return (
      <Routes>
        <Route path="/admin/*" element={<AdminRoute />} />
      </Routes>
    );
  }

  return (
    <div className="bg-linear-to-br from-white via-blue-50 to-blue-200 min-h-screen font-sans relative">
      <ScrollToTop />
      <Analytics />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planes" element={<Products />} />
        <Route path="/planes/:id" element={<ViewProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
