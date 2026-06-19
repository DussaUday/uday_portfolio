import React, { useState, useCallback } from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [avatarSrc, setAvatarSrc] = useState('/uday_photo.jpg');
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAvatarError = useCallback(() => {
    const fallbackUrl = 'https://media.naukri.com/media/jphotov1/l244%253ALukcMTu43AURG7%252B0XQgEbp8%252BwX4pZso4g1t73KRd%252B%252FSAUSZl%252B7jNDKQj9uoL';
    if (avatarSrc !== fallbackUrl) {
      setAvatarSrc(fallbackUrl);
    }
  }, [avatarSrc]);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <section id="home" className="hero-section" aria-label="Hero Section">
      <div className="container hero-container">
        {/* Left side: Intro text */}
        <div className="hero-content">
          <div className="badge hero-badge badge-cyan">
            <span>💼 Open to Full-Time Opportunities</span>
          </div>
          
          <h1 className="hero-greeting">
            Hi, I'm <span className="highlight-text">Dussa Uday Krishna</span>
          </h1>
          
          <h2 className="hero-subtitle">
            Software Engineer • AI Developer • Full-Stack Developer • Databricks
          </h2>
          
          <p className="hero-description">
            Passionate Computer Science undergraduate and full-stack MERN developer specializing in building 
            no-code website creation platforms, real-time computer vision engines, and enterprise data analytics on 
            cloud systems like Databricks. Double hackathon champion and active problem solver.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary" aria-label="Explore Projects">
              Explore Projects
            </a>
            <a href="#contact" className="btn btn-secondary" aria-label="Contact Me">
              Let's Connect
            </a>
          </div>

          <div className="social-links-container">
            <span className="social-title">Connect:</span>
            <div className="social-links" role="navigation" aria-label="Social Links">
              <a 
                href="https://github.com/DussaUday" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-icon-only" 
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/udaydussa469" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-icon-only" 
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:dussauday469@gmail.com" 
                className="btn-icon-only" 
                aria-label="Send Email"
                title="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+916304478845" 
                className="btn-icon-only" 
                aria-label="Call Phone"
                title="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right side: Glassmorphic Photo Card + Terminal Card */}
        <div className="hero-visual">
          {/* Profile Glass Card */}
          <div className="profile-card glass-panel">
            <div className="profile-card-glow"></div>
            <div 
              className={`profile-img-container ${!imageLoaded ? 'image-loading' : ''}`}
              style={!imageLoaded ? { background: 'rgba(255,255,255,0.05)' } : {}}
            >
              <img 
                src={avatarSrc} 
                alt="Dussa Uday Krishna - Software Engineer" 
                className="profile-img" 
                onError={handleAvatarError}
                onLoad={handleImageLoad}
                loading="eager"
                width="90"
                height="90"
              />
            </div>
            <div className="profile-info">
              <h3 className="profile-name">Dussa Uday Krishna</h3>
              <span className="profile-role">Software Engineer • AI & Full-Stack</span>
            </div>
          </div>

          {/* Code Block Terminal */}
          <div className="terminal-window glass-panel">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red" aria-hidden="true"></span>
                <span className="dot yellow" aria-hidden="true"></span>
                <span className="dot green" aria-hidden="true"></span>
              </div>
              <div className="terminal-title">uday_krishna.js</div>
              <div className="terminal-spacer"></div>
            </div>
            <div className="terminal-body">
              <div className="line-numbers" aria-hidden="true">
                {Array.from({ length: 11 }).map((_, i) => (
                  <span key={i}>{i + 1}</span>
                ))}
              </div>
              <pre className="code-content">
                <code>
                  <span className="keyword">const</span> <span className="variable">developer</span> = &#123;
                  {'\n  '}name: <span className="string">"Dussa Uday Krishna"</span>,
                  {'\n  '}title: <span className="string">"Software Engineer • AI Developer • Full-Stack Developer • Databricks"</span>,
                  {'\n  '}college: <span className="string">"LBRCE, Mylavaram"</span>,
                  {'\n  '}skills: [<span className="string">"React"</span>, <span className="string">"Node"</span>, <span className="string">"Python"</span>, <span className="string">"Databricks"</span>],
                  {'\n  '}achievements: [
                  {'\n    '}<span className="string">"Omnitrix Hackathon '25"</span>,
                  {'\n    '}<span className="string">"CodeSpark India '25"</span>
                  {'\n  '}],
                  {'\n  '}currentFocus: <span className="string">"Databricks & Generative AI"</span>,
                  {'\n  '}status: <span className="string">"Open to Full-Time"</span>
                  {'\n'}&#125;;
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;