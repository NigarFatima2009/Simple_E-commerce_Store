// src/components/Home.js

import React, { useState } from 'react';
import Footer from './Footer';
import './Home.css';

// Import images
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.png';
import image5 from '../images/5.jpg';
import image6 from '../images/6.jpg';
import image7 from '../images/7.jpg';
import image8 from '../images/8.jpg';
import image9 from '../images/9.jpg';
import image10 from '../images/10.jpg';

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showFullScreen, setShowFullScreen] = useState(false);

  // Array of image paths excluding 6.jpg (for grid display)
  const images = [image1, image2, image3, image4, image5, image7, image8, image9, image10];

  // Function to handle image click
  const handleImageClick = (image) => {
    if (image === image6) {
      setShowFullScreen(true);
    } else {
      setSelectedImage(image);
      setShowModal(true);
    }
  };

  // Function to close modal
  const handleCloseModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  // Function to close full screen view of 6.jpg
  const handleCloseFullScreen = () => {
    setShowFullScreen(false);
  };

  return (
    <div>
      <h1 className="welcome-heading">Welcome to the Simple E-Commerce Store</h1>

      <div className="full-width-row">
        <div onClick={() => handleImageClick(image6)}>
          <img src={image6} alt="6" />
          <div className="image-text">Shop the best products, at the <br/>best prices, from the comfort of <br/>your home.</div>
          <div className="image-text1">Discover.<br/>Shop.<br/> Enjoy.</div>
        </div>
      </div>

      {/* Hidden container for images */}
      <div className="hidden-images">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`${index + 1}`} className="hidden-image" />
        ))}
      </div>

      {/* Grid container for other images */}
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-item" onClick={() => handleImageClick(image)}>
            <img src={image} alt={`${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Modal for displaying non-full screen images */}
      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={handleCloseModal}>×</span>
            <img src={selectedImage} alt="Full size" className="modal-image" />
          </div>
        </div>
      )}

      {/* Full screen view for image6 */}
      {showFullScreen && (
        <div className="fullscreen-overlay" onClick={handleCloseFullScreen}>
          <div className="fullscreen-content">
            <span className="fullscreen-close" onClick={handleCloseFullScreen}>×</span>
          </div>
        </div>
      )}

      <Footer />
    </div>

  );
}

export default Home;
