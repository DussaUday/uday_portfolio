import React from 'react';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Left Side: Brand info */}
        <div className="footer-left">
          <span className="footer-brand">&lt;Uday.Krishna /&gt;</span>
          <p className="footer-copyright">
            &copy; {currentYear} Dussa Uday Krishna. All Rights Reserved.
          </p>
        </div>

        {/* Center: Quick navigation links */}
        <div className="footer-links">
          <a href="#home" className="footer-link">Home</a>
          <a href="#about" className="footer-link">About</a>
          <a href="#experience" className="footer-link">Experience</a>
          <a href="#projects" className="footer-link">Projects</a>
          <a href="#credentials" className="footer-link">Achievements</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>

        {/* Right Side: Back to top button */}
        <div className="footer-right">
          <a href="#" className="btn-icon-only back-to-top-btn" onClick={scrollToTop} title="Back to Top" aria-label="Back to Top">
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
      
      {/* Decorative colored glow strip */}
      <div className="footer-glow-strip"></div>
    </footer>
  );
};

export default Footer;
