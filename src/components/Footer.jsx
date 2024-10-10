// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#products">Products</a></li>
                        <li><a href="/pricing">Pricing</a></li>
                        <li><a href="#solutions">Solutions</a></li>
                        <li><a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    </ul>
                </div>
                <div className="footer-info">
                    <p>&copy; 2024 Physi-c Tech. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; // Ensure this line is present
