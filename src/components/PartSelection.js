// components/PartSelection.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PartSelection.css";

// Define meat cuts for each type of meat with links
const meatCuts = {
    goat: [
        { name: "Goat - 35lb and up", price: "$8.50/lb", image: "https://via.placeholder.com/150", minWeight: 35, link: "/goat/35lb-and-up" },
        { name: "Goat - 25 to 34lb", price: "$9.50/lb", image: "https://via.placeholder.com/150", minWeight: 25, link: "/goat/25-to-34lb" },
        { name: "Goat - 20 to 24lb", price: "$10.50/lb", image: "https://via.placeholder.com/150", minWeight: 20, link: "/goat/20-to-24lb" },
        { name: "Goat - Under 20lb", price: "$11.50/lb", image: "https://via.placeholder.com/150", minWeight: 1, link: "/goat/under-20lb" },
    ],
    chicken: [
        { name: "Chicken Whole", price: "$10.75/lb", image: "https://via.placeholder.com/150", minWeight: 1, link: "/chicken/whole" },
        { name: "Chicken Breast", price: "$5.75/lb", image: "https://via.placeholder.com/150", minWeight: 1, link: "/chicken/breast" },
        { name: "Chicken Leg Quarters", price: "$2.25/lb", image: "https://via.placeholder.com/150", minWeight: 1, link: "/chicken/leg-quarters" },
        { name: "Chicken Tenders", price: "$7.00/lb", image: "https://via.placeholder.com/150", minWeight: 1, link: "/chicken/tenders" },
    ],
    beef: [
        { name: "Beef Veal w/Bone", price: "$4.25/lb", image: "https://via.placeholder.com/150", minWeight: 1, link: "/beef/veal-with-bone" },
        { name: "Beef Veal Boneless", price: "$5.95/lb", image: "https://via.placeholder.com/150", minWeight: 1, link: "/beef/veal-boneless" },
        { name: "Keema", price: "$4.75/lb", image: "https://via.placeholder.com/150", minWeight: 1, link: "/beef/keema" },
    ],
};

const PartSelection = () => {
    const [selectedMeat, setSelectedMeat] = useState(null); // Track selected meat type
    const [quantity, setQuantity] = useState(1); // Track quantity (pounds)
    const navigate = useNavigate();

    // Render meat cuts based on selected meat type
    const renderMeatCuts = () => {
        if (!selectedMeat) return null;

        const cuts = meatCuts[selectedMeat];
        return cuts.map((cut, index) => (
            <li key={index}>
                <a href={cut.link} target="_blank" rel="noopener noreferrer">
                    <img src={cut.image} alt={cut.name} />
                </a>
                <span>{cut.name}</span>
                <p>{cut.price}</p>

                <input
                    type="number"
                    min={cut.minWeight}
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Enter pounds"
                />

                <button
                    className="action-btn"
                    onClick={() => navigate("/cart")}
                >
                    Add to Cart
                </button>
            </li>
        ));
    };

    return (
        <div className="part-selection-container">
            <h1>Select Your Meat Type</h1>
            <div className="meat-buttons">
                <button onClick={() => setSelectedMeat("goat")}>Goat</button>
                <button onClick={() => setSelectedMeat("chicken")}>Chicken</button>
                <button onClick={() => setSelectedMeat("beef")}>Beef</button>
            </div>

            {selectedMeat && <h3>Choose Your Cut for {selectedMeat.charAt(0).toUpperCase() + selectedMeat.slice(1)}</h3>}
            <ul>
                {renderMeatCuts()}
            </ul>
        </div>
    );
};

export default PartSelection;
