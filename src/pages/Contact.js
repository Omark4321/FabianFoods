import React, { useState } from "react";
import "./Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for reaching out, ${formData.name}! We will get back to you soon.`);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="contact-container">
            <section className="contact-hero">
                <h1>Get in Touch</h1>
                <p>We’d love to hear from you. Whether you have questions or feedback, feel free to reach out!</p>
            </section>

            <div className="contact-content">
                {/* Contact Info */}
                <div className="contact-info">
                    <div className="info-item"><FaMapMarkerAlt /> <p>123 Halal Street, Your City, Your Country</p></div>
                    <div className="info-item"><FaPhoneAlt /> <p>(+123) 456-7890</p></div>
                    <div className="info-item"><FaEnvelope /> <p>contact@fabianfoods.com</p></div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
