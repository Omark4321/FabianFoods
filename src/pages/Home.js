import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Home.css";


const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Welcome to Fabian Foods
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Fresh, Quality, and 100% Halal Meats Delivered to You
                    </motion.p>

                    {/* Buttons */}
                    <div className="hero-buttons">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="cta-button"
                            onClick={() => navigate("/products")}
                        >
                            Shop Now
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="cta-button about-button"
                            onClick={() => navigate("/about")}
                        >
                            About Us
                        </motion.button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
