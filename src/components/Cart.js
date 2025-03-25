import React from "react";
import { useCart } from "../context/CartContext"; // Import your Cart Context
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
    const { cart, removeFromCart } = useCart(); // Access cart and remove function

    // Calculate the total price of items in the cart
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <h1>Your Cart</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty. Start shopping!</p>
            ) : (
                <div className="cart-items">
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="cart-item-image"
                            />
                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                <p>Quantity: {item.quantity} lbs</p>
                                <p>Price: ${item.price} per lb</p>
                                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                                <button onClick={() => removeFromCart(item.id)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="cart-total">
                <h2>Total: ${total.toFixed(2)}</h2>
            </div>

            {cart.length > 0 && (
                <Link to="/checkout" className="checkout-button">
                    Proceed to Checkout
                </Link>
            )}
        </div>
    );
};

export default Cart;
