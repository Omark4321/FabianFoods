import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Checkout from './components/Checkout';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Cart from './components/Cart';
import PartSelection from './components/PartSelection'; // Import PartSelection component
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />

            {/* Dynamic Route for Part Selection */}
            <Route path="/select-part/:part" element={<PartSelection />} />

            {/* You can keep other static routes if needed */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
