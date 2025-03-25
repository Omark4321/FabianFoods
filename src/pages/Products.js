import React, { useState } from 'react';
import { useCart } from '../context/CartContext'; // Import Cart Context
import './Products.css';

const Products = () => {
    const [selectedMeat, setSelectedMeat] = useState(null);
    const [quantities, setQuantities] = useState({}); // Store quantity per item 

    const { addToCart } = useCart(); // Use Cart Context 

    const meatCuts = {
        goat: [
            { id: 1, name: "Goat 35lb and up", price: 8.50, image: "/assets/Goat-removebg-preview.png", minOrder: 35, maxOrder: 100 },
            { id: 2, name: "Goat 25-34lb", price: 9.50, image: "/assets/Goat-removebg-preview.png", minOrder: 25, maxOrder: 34 },
            { id: 3, name: "Goat 20-24lb", price: 11.50, image: "/assets/Goat-removebg-preview.png", minOrder: 20, maxOrder: 24 },
            { id: 4, name: "Goat 1-19lb", price: 12.50, image: "/assets/Goat-removebg-preview.png", minOrder: 1, maxOrder: 19 },
        ],
        chicken: [
            { id: 5, name: "Whole Chicken", price: 10.75, image: "/assets/Chicken-removebg-preview.png", minOrder: 1, maxOrder: 50 },
            { id: 6, name: "Chicken Breast", price: 5.75, image: "/assets/Chicken-removebg-preview.png", minOrder: 1, maxOrder: 50 },
            { id: 7, name: "Chicken leg quarters", price: 2.25, image: "/assets/Chicken-removebg-preview.png", minOrder: 1, maxOrder: 50 },
            { id: 8, name: "Chicken tenders", price: 7.00, image: "/assets/Chicken-removebg-preview.png", minOrder: 1, maxOrder: 50 },
        ],
        beef: [
            { id: 9, name: "Veal with Bone", price: 4.25, image: "/assets/cow-removebg-preview.png", minOrder: 1, maxOrder: 50 },
            { id: 10, name: "Veal Boneless", price: 5.95, image: "/assets/cow-removebg-preview.png", minOrder: 1, maxOrder: 50 },
            { id: 11, name: "Keema", price: 4.75, image: "/assets/cow-removebg-preview.png", minOrder: 1, maxOrder: 50 },
        ],
    };

    // Function to update quantity for a specific meat cut 
    const handleQuantityChange = (id, value) => {
        // Ensure that the value is a number and within the allowed range
        const selectedCut = meatCuts[selectedMeat].find((cut) => cut.id === id);
        const minOrder = selectedCut.minOrder;
        const maxOrder = selectedCut.maxOrder;

        // Convert the input to an integer and ensure it is within the range
        let newValue = Math.max(minOrder, Math.min(maxOrder, Math.floor(value)));

        // Prevent negative numbers and set to minOrder if negative
        newValue = newValue < 0 ? minOrder : newValue;

        setQuantities((prev) => ({
            ...prev,
            [id]: newValue, // Store value specific to that meat cut
        }));
    };

    const renderMeatCuts = () => {
        if (!selectedMeat) return null;
        return meatCuts[selectedMeat].map((cut) => (
            <li key={cut.id}>
                <a href={cut.link} target="_blank" rel="noopener noreferrer">
                    <img src={cut.image} alt={cut.name} />
                </a>
                <p>{cut.name}</p> {/* Display item name under the image */}
                <input
                    type="number"
                    min={cut.minOrder} // Set min quantity based on specific cut's minOrder
                    max={cut.maxOrder} // Set max quantity based on specific cut's maxOrder
                    value={quantities[cut.id] || cut.minOrder} // Default to min quantity if undefined
                    onChange={(e) => handleQuantityChange(cut.id, e.target.value)}
                    placeholder="Enter pounds"
                    step="1" // Ensure step is 1 for whole number inputs
                />
                <button
                    className="action-btn"
                    onClick={() => {
                        addToCart({ ...cut, quantity: quantities[cut.id] || cut.minOrder });
                    }}
                >
                    Add to Cart
                </button>
            </li>
        ));
    };

    return (
        <div className="products-container">
            <h1>Select Your Meat</h1>
            <div className="animal-selection">
                <div onClick={() => setSelectedMeat("goat")} style={{ cursor: "pointer", textAlign: "center" }}>
                    <img src="/assets/Goat-removebg-preview.png" alt="Goat" style={{ width: "300px", height: "auto" }} />
                    <p>Goat</p> {/* Display animal name */}
                </div>
                <div onClick={() => setSelectedMeat("chicken")} style={{ cursor: "pointer", textAlign: "center" }}>
                    <img src="/assets/Chicken-removebg-preview.png" alt="Chicken" style={{ width: "300px", height: "auto" }} />
                    <p>Chicken</p>
                </div>
                <div onClick={() => setSelectedMeat("beef")} style={{ cursor: "pointer", textAlign: "center" }}>
                    <img src="/assets/cow-removebg-preview.png" alt="Beef" style={{ width: "300px", height: "auto" }} />
                    <p>Beef</p>
                </div>
            </div>

            {selectedMeat && <h3>Choose Your Cut for {selectedMeat.charAt(0).toUpperCase() + selectedMeat.slice(1)}</h3>}
            <ul className="meat-cut-list">{renderMeatCuts()}</ul>
        </div>
    );
};

export default Products;
