import React from 'react';
import Home from './components/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import NoPage from './pages/NoPage';
import Navbar from './components/Navbar';
import ViewProduct from "./components/ViewProduct";
import Footer from './components/Footer';
import { Routes,Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <div className="bg-linear-to-br from-white via-blue-50 to-blue-200 min-h-screen font-sans relative">
      <ScrollToTop />
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
