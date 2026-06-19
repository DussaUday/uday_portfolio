import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Copy, Check, Sparkles } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copiedType, setCopiedType] = useState(null); // 'email' | 'phone' | null
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Fall back to a successful simulation if EmailJS is not configured in local .env
    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS keys are not set. Falling back to local simulation mode.");
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      }, 1600);
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: "Dussa Uday Krishna"
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      }, (error) => {
        console.error("EmailJS Error:", error);
        setIsSubmitting(false);
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 6000);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Get In <span className="section-title-accent">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have an exciting opportunity, a project concept, or just want to chat about tech? Let's connect!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Info Cards */}
          <div className="contact-info-column">
            <div className="info-intro-card glass-panel">
              <Sparkles className="info-sparkle-icon" size={24} />
              <h3 className="info-card-title">Let's Build Something Great</h3>
              <p className="info-card-text">
                I am actively seeking B.Tech internships and entry-level developer roles. I'm always open to discussing web application architectures, machine learning integrations, and backend databases.
              </p>
            </div>

            <div className="contact-details-panel">
              {/* Email Detail Row */}
              <div className="contact-detail-item glass-panel">
                <div className="detail-icon-wrapper mail-wrapper">
                  <Mail size={20} />
                </div>
                <div className="detail-text-content">
                  <span className="detail-label">Email Me</span>
                  <a href="mailto:dussauday469@gmail.com" className="detail-value">dussauday469@gmail.com</a>
                </div>
                <button 
                  className="btn-icon-only btn-copy" 
                  onClick={() => handleCopy('dussauday469@gmail.com', 'email')}
                  title="Copy Email Address"
                >
                  {copiedType === 'email' ? <Check size={16} className="copied-check" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone Detail Row */}
              <div className="contact-detail-item glass-panel">
                <div className="detail-icon-wrapper phone-wrapper">
                  <Phone size={20} />
                </div>
                <div className="detail-text-content">
                  <span className="detail-label">Call / WhatsApp</span>
                  <a href="tel:+916304478845" className="detail-value">+91 63044 78845</a>
                </div>
                <button 
                  className="btn-icon-only btn-copy" 
                  onClick={() => handleCopy('+916304478845', 'phone')}
                  title="Copy Phone Number"
                >
                  {copiedType === 'phone' ? <Check size={16} className="copied-check" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location Detail Row */}
              <div className="contact-detail-item glass-panel">
                <div className="detail-icon-wrapper loc-wrapper">
                  <MapPin size={20} />
                </div>
                <div className="detail-text-content">
                  <span className="detail-label">Current Location</span>
                  <span className="detail-value">Vijayawada, Andhra Pradesh, India</span>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="contact-social-footer glass-panel">
              <span className="social-label-text">Find me on:</span>
              <div className="social-links-row">
                <a href="https://github.com/DussaUday" target="_blank" rel="noopener noreferrer" className="btn btn-secondary contact-social-btn">
                  <Github size={18} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/udaydussa469" target="_blank" rel="noopener noreferrer" className="btn btn-secondary contact-social-btn">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form Panel */}
          <div className="contact-form-column">
            <div className="contact-form-panel glass-panel">
              {submitStatus === 'success' ? (
                <div className="form-success-state">
                  <div className="success-badge">
                    <Check size={36} />
                  </div>
                  <h3 className="success-title">Message Sent!</h3>
                  <p className="success-text">
                    Thank you for reaching out, Uday Krishna has received your message and will respond shortly.
                  </p>
                  <button className="btn btn-secondary" onClick={() => setSubmitStatus(null)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <h3 className="form-title">Send a Direct Message</h3>
                  
                  <div className="form-row-grid">
                    <div className="input-group">
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        className="form-input" 
                        placeholder=" " 
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="name" className="form-label">Your Name</label>
                    </div>

                    <div className="input-group">
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        className="form-input" 
                        placeholder=" " 
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="email" className="form-label">Your Email</label>
                    </div>
                  </div>

                  <div className="input-group">
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      className="form-input" 
                      placeholder=" " 
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="subject" className="form-label">Subject</label>
                  </div>

                  <div className="input-group">
                    <textarea 
                      id="message" 
                      name="message" 
                      required 
                      rows="5" 
                      className="form-input form-textarea" 
                      placeholder=" " 
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                    <label htmlFor="message" className="form-label">Your Message</label>
                  </div>

                  {submitStatus === 'error' && (
                    <div style={{ color: '#f87171', fontSize: '0.85rem', marginTop: '-0.75rem', fontWeight: '600' }}>
                      ⚠️ Transmission failed. Please try again or email directly.
                    </div>
                  )}

                  <button 
                    type="submit" 
                    className="btn btn-primary btn-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        Transmitting...
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
