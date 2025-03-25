import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext"; // Importing Cart Context
import "./Checkout.css";

const Checkout = () => {
    const { cart } = useCart();

    // State for form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        deliveryLocation: "", // This will be used to select from the predefined locations
    });

    // State for order weight
    const [orderWeight, setOrderWeight] = useState(0);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Calculate the total weight of the cart
    useEffect(() => {
        const totalWeight = cart.reduce(
            (total, item) => total + item.weight * item.quantity,
            0
        );
        setOrderWeight(totalWeight);
    }, [cart]);

    // Calculate total price
    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    // Tax Calculation (Assume 8% tax rate)
    const taxRate = 0.08;
    const taxAmount = totalPrice * taxRate;

    // Final total after tax
    const finalTotal = totalPrice + taxAmount;

    // Submit form (mocked)
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle submission, e.g., sending data to a server
        alert("Order submitted!");
    };

    return (
        <div className="checkout-container">
            {/* Hero Section */}
            <div className="checkout-hero">
                <h1>Checkout</h1>
                <p>Complete your purchase below</p>
            </div>

            {/* Order Summary Section */}
            <div className="order-summary">
                <h2>Order Summary</h2>
                <div className="cart-items">
                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        cart.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <h3>{item.name}</h3>
                                <p>
                                    ${item.price} x {item.quantity}
                                </p>
                            </div>
                        ))
                    )}
                </div>
                {/* Total Before Tax */}
                <div className="total">
                    <p>Total Before Tax: <strong>${totalPrice.toFixed(2)}</strong></p>
                </div>

                {/* Tax Amount */}
                <div className="total">
                    <p>Tax (8%): <strong>${taxAmount.toFixed(2)}</strong></p>
                </div>

                {/* Total After Tax */}
                <div className="total">
                    <p>Total After Tax: <strong>${finalTotal.toFixed(2)}</strong></p>
                </div>
            </div>

            {/* Delivery Information */}
            <div className="delivery-info">
                <h3>Delivery Options:</h3>
                <p>
                    We offer free delivery to the following locations for orders of 20 lbs or more:
                </p>
                <ul>
                    <li>ICSD</li>
                    <li>MCC</li>
                    <li>Al Nour Center</li>
                    <li>Masjid Hamza</li>
                    {/* Add any other locations you want */}
                </ul>

                {/* Show Address Field for Orders Over 20 lbs */}
                {orderWeight > 20 && (
                    <div className="form-group">
                        <label htmlFor="address">Shipping Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                )}
            </div>

            {/* Checkout Form */}
            <form onSubmit={handleSubmit} className="checkout-form">
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                {/* Delivery Location - Only Allow Specific Locations */}
                <div className="form-group">
                    <label htmlFor="deliveryLocation">Delivery Location</label>
                    <select
                        id="deliveryLocation"
                        name="deliveryLocation"
                        value={formData.deliveryLocation}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Select Delivery Location</option>
                        <option value="ICSD">ICSD</option>
                        <option value="MCC">MCC</option>
                        <option value="Al Nour Center">Al Nour Center</option>
                        <option value="Masjid Hamza">Masjid Hamza</option>
                        {/* Add any other delivery locations as needed */}
                    </select>
                </div>

                {/* Submit Button */}
                <button type="submit" className="submit-btn">Submit Order</button>
            </form>
        </div>
    );
};

export default Checkout;
