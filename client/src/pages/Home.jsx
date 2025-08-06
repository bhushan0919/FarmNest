import React from 'react';
import './Home.css'; // Make sure to create matching CSS

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-text">
          <h2>Welcome to FarmNest 👨‍🌾</h2>
          <p>Your one-stop digital platform for smarter farming.</p>

        </div>
        <img className="hero-img" src="imgs/img1.png" alt="Farm illustration" />
        <button className="btn">Explore Features</button>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h3>Why Choose FarmNest?</h3>
        <div className="features-grid">
          <div className="feature-card">
            <h4>🌾 Smart Marketplace</h4>
            <p>Buy & sell crops, fertilizers, tools and more at fair prices.</p>
          </div>
          <div className="feature-card">
            <h4>🤝 Farmer Community</h4>
            <p>Connect with farmers, share tips, and learn together.</p>
          </div>
          <div className="feature-card">
            <h4>📊 Crop Records</h4>
            <p>Track your farm’s performance and yields efficiently.</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials-section">
        <h3>What Farmers Say</h3>
        <div className="testimonial">
          <p>"FarmNest helped me sell my produce directly and earn better profits!"</p>
          <span>- Rajesh Patil, Nashik</span>
        </div>
        <div className="testimonial">
          <p>"I found trusted suppliers and met other farmers who gave great advice."</p>
          <span>- Anjali Deshmukh, Kolhapur</span>
        </div>
      </div>

      {/* Marketplace CTA Section */}
      <div className="marketplace-section">
        <h3>Visit Our Marketplace 🛒</h3>
        <p>
          Discover a wide range of products—fertilizers, seeds, equipment, and more—all from trusted sellers.
        </p>
        <a href="/market" className="btn marketplace-btn">Go to Marketplace</a>
      </div>



    </div>
  );
};

export default Home;
