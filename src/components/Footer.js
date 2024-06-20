import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <FontAwesomeIcon icon={faShoppingBag} className="logo-icon" />
            <span>Multimart</span>
          </div>
          <p className='para'>
          It features an intuitive interface with categorized filters, allowing users to easily find products tailored to their preferences. Each product listing includes detailed information and an option to add items to the cart seamlessly.          </p>
        </div>
        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li><button className="link-button">Careers</button></li>
            <li><button className="link-button">Our Stores</button></li>
            <li><button className="link-button">Our Cares</button></li>
            <li><button className="link-button">Terms & Conditions</button></li>
            <li><button className="link-button">Privacy Policy</button></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Customer Care</h4>
          <ul>
            <li><button className="link-button">Help Center</button></li>
            <li><button className="link-button">How to Buy</button></li>
            <li><button className="link-button">Track Your Order</button></li>
            <li><button className="link-button">Corporate & Bulk Purchasing</button></li>
            <li><button className="link-button">Returns & Refunds</button></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li>123 Main Street, Karachi, Pakistan</li>
            <li>Email: info@example.com</li>
            <li>Phone: +92 123 456789</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
