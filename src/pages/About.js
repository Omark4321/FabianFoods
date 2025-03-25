import React from 'react';
import './About.css'; // Make sure the CSS is imported

const AboutPage = () => {
    return (
        <div className="about-container">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <h1>About Us</h1>
                    <p>Delivering Premium Halal Meats with Integrity and Quality</p>
                </div>
            </section>

            {/* About Content Section */}
            <section className="about-details">
                <div className="about-item">
                    <h2>Our Commitment to Quality</h2>
                    <p>
                        At Fabian Foods, quality is our top priority. From sourcing our meats to delivering the final product to your table,
                        we follow the most rigorous standards to guarantee that only the best cuts reach you. Our commitment to excellence
                        spans every stage of our process – from selecting and processing to packaging and delivery.
                    </p>
                </div>

                <div className="about-item">
                    <h2>HFSAA Certified: Guaranteeing Halal Authenticity</h2>
                    <p>
                        Our certification from the Halal Food Standards Alliance of America (HFSAA) reflects our steadfast commitment
                        to maintaining halal authenticity and integrity. With the HFSAA seal, you can be assured that our meats adhere to
                        the strictest halal guidelines, giving you confidence and peace of mind with every purchase.
                    </p>
                </div>

                <div className="about-item">
                    <h2>USDA Inspected Meat</h2>
                    <p>
                        At Fabian Foods Halal meats, we prioritize quality and safety above all else. All our meat is sourced from USDA-inspected
                        facilities, ensuring it meets the highest standards for hygiene, processing, and food safety. This certification guarantees
                        that every cut is carefully inspected and handled with precision, providing you with confidence and superior quality
                        in every bite.
                    </p>
                </div>

                <div className="about-item">
                    <h2>Delivery Information</h2>
                    <p>
                        All meat orders will be delivered on Fridays by a refrigerated truck. After placing your order, please include your
                        preferred delivery location, along with your name and phone number, in the comments section.
                    </p>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="about-footer">
                <p>Thank you for choosing Fabian Foods Halal Meat. We look forward to serving you!</p>
            </footer>
        </div>
    );
};

export default AboutPage;
