// components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
    const { cart } = useCart();  // Access cart instead of cartItems
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <Link to="/" className="navbar-logo-link">
                <img src="../../public/assets/logo.png" alt="Fabian Foods Logo" className="navbar-logo" />
            </Link>

            <div className="nav-links">
                {["Home", "About", "Products", "Contact"].map((item) => (
                    <Link key={item} to={item === "Home" ? "" : `/${item.toLowerCase()}`}>{item}</Link>
                ))}
                <Link to="/cart" className="cart-icon">
                    <FaShoppingCart />
                    {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}  {/* Display cart length */}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
