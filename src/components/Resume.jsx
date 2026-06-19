import React, { useState, useCallback } from 'react';
import { FileText, Globe, Mail, Phone, MapPin, Github, Linkedin, Award, Code, BookOpen, Briefcase, RotateCw, Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import './Resume.css';
// Import the PDF file
import plainResumePDF from '../../public/Uday_dussa.pdf';

const Resume = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [avatarSrc] = useState('/uday_dussa.jpg');
  const [pdfError, setPdfError] = useState(false);

  // Single reusable function to export Designed PDF as A4
  const exportDesignedResumePDF = useCallback(async () => {
    const element = document.getElementById('printable-resume-area');
    if (!element) {
      throw new Error('Resume element not found');
    }

    // Add rendering class for A4 optimization
    element.classList.add('rendering-pdf');

    try {
      // Wait for fonts and images to load
      await new Promise(resolve => setTimeout(resolve, 400));

      // Wait for all images to load in the element
      const images = element.querySelectorAll('img');
      await Promise.all(Array.from(images).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = () => {
            console.warn('Image failed to load:', img.src);
            resolve(); // Continue even if image fails
          };
        });
      }));

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: false,
        backgroundColor: '#08080c',
        logging: false,
        onclone: (clonedDoc) => {
          // Ensure images are loaded in cloned document
          const clonedImages = clonedDoc.querySelectorAll('img');
          return Promise.all(Array.from(clonedImages).map(img => {
            if (img.complete) return Promise.resolve();
            return new Promise(resolve => {
              img.onload = resolve;
              img.onerror = resolve;
            });
          }));
        }
      });

      // Create A4 PDF (210mm x 297mm)
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const pageWidth = pdf.internal.pageSize.getWidth(); // 210mm
      const pageHeight = pdf.internal.pageSize.getHeight(); // 297mm

      const imgData = canvas.toDataURL('image/png', 1.0);

      // Place image to fill entire A4 page without margins
      pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, pageHeight);
      
      return pdf;
    } finally {
      element.classList.remove('rendering-pdf');
    }
  }, []);

  // Handle download based on current view
  const handleDownload = useCallback(async () => {
    if (isFlipped) {
      // Download the plain PDF directly using the imported variable
      const link = document.createElement('a');
      link.href = plainResumePDF;
      link.download = 'Dussa_Uday_Krishna_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    // Export designed PDF
    setIsExporting(true);
    try {
      const pdf = await exportDesignedResumePDF();
      pdf.save('Dussa_Uday_Krishna_Designed_Resume.pdf');
    } catch (err) {
      console.error('Export failed:', err);
      alert('Failed to export PDF. Please try again.');
    } finally {
      setIsExporting(false);
    }
  }, [isFlipped, exportDesignedResumePDF]);

  // Handle iframe error
  const handleIframeError = useCallback(() => {
    setPdfError(true);
  }, []);

  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Professional <span className="section-title-accent">Resume</span>
          </h2>
          <p className="section-subtitle">
            Toggle between my plain Word template and glassy design resume, and download a copy.
          </p>
        </div>

        {/* Action Controls */}
        <div className="resume-actions-container">
          {/* Flip Toggle Button */}
          <button 
            className="btn btn-secondary" 
            onClick={() => setIsFlipped(!isFlipped)}
            title="Toggle between Glassy and Plain Resume templates"
          >
            <RotateCw size={16} /> {isFlipped ? "Show Glassy Designed" : "Show Plain Word"}
          </button>

          {/* Single Download Button */}
          <button 
            onClick={handleDownload} 
            className="btn btn-primary"
            disabled={isExporting}
          >
            {isExporting ? (
              <>
                <span className="spinner"></span>
                Exporting...
              </>
            ) : (
              <>
                <FileText size={16} /> {isFlipped ? "Download Plain Resume" : "Export Designed PDF"}
              </>
            )}
          </button>
        </div>

        {/* 3D Flip Card Perspective Wrapper */}
        <div className="resume-card-perspective">
          <div className={`resume-card-flipper ${isFlipped ? 'flipped' : ''}`}>
            
            {/* FRONT SIDE: Beautiful Glassy Designed Resume - A4 Layout */}
            <div className="resume-card-front">
              <div className="resume-a4-scroll-container">
                <div className="resume-sheet glass-panel" id="printable-resume-area">
                  
                  {/* Header Section */}
                  <div className="resume-sheet-header">
                    <div className="resume-header-avatar-container">
                      <img 
                        src={avatarSrc} 
                        alt="Dussa Uday Krishna" 
                        className="resume-header-avatar"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <div className="resume-header-info">
                      <h1 className="resume-name">DUSSA UDAY KRISHNA</h1>
                      <h2 className="resume-title">Software Engineer • AI Developer • Full-Stack Developer • Databricks</h2>
                      
                      <div className="resume-header-links-row">
                        <div className="resume-contact-item">
                          <Mail size={12} className="resume-icon" />
                          <a href="mailto:dussauday469@gmail.com">dussauday469@gmail.com</a>
                        </div>
                        <span className="dot-separator">•</span>
                        <div className="resume-contact-item">
                          <Phone size={12} className="resume-icon" />
                          <a href="tel:+916304478845">+916304478845</a>
                        </div>
                        <span className="dot-separator">•</span>
                        <div className="resume-contact-item">
                          <Github size={12} className="resume-icon" />
                          <a href="https://github.com/DussaUday" target="_blank" rel="noopener noreferrer">github.com/DussaUday</a>
                        </div>
                      </div>
                      
                      <div className="resume-header-links-row" style={{ marginTop: '0.25rem' }}>
                        <div className="resume-contact-item">
                          <Linkedin size={12} className="resume-icon" />
                          <a href="https://linkedin.com/in/udaydussa469" target="_blank" rel="noopener noreferrer">linkedin.com/in/udaydussa469</a>
                        </div>
                        <span className="dot-separator">•</span>
                        <div className="resume-contact-item">
                          <Globe size={12} className="resume-icon" />
                          <a href="https://uday469.vercel.app" target="_blank" rel="noopener noreferrer">uday469.vercel.app</a>
                        </div>
                        <span className="dot-separator">•</span>
                        <div className="resume-contact-item">
                          <MapPin size={12} className="resume-icon" />
                          <span>Vijayawada, AP, India</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="resume-divider"></div>

                  {/* Career Objective */}
                  <div className="resume-section-block">
                    <h3 className="resume-section-title">Career Objective</h3>
                    <p className="resume-section-content">
                      Self-motivated B.Tech Computer Science student (2026) with strong foundation in programming, and software development. Experienced in full-stack development using React.js, Node.js, and MongoDB, along with hands-on experience in building AI systems using LLMs and Retrieval-Augmented Generation (RAG). Proficient in Python, Java, and C. Quick learner and team player, seeking a Software Engineer role to build intelligent and scalable solutions.
                    </p>
                  </div>

                  {/* Two Column Layout Grid */}
                  <div className="resume-grid-two-col">
                    
                    {/* Left Column: Internships and Projects */}
                    <div className="resume-col-left">
                      <div className="resume-section-block">
                        <h3 className="resume-section-title">
                          <Briefcase size={14} style={{ marginRight: '6px' }} /> Internships
                        </h3>
                        
                        <div className="resume-item">
                          <div className="resume-item-header">
                            <span className="resume-item-role">Intern</span>
                            <span className="resume-item-date">Present</span>
                          </div>
                          <div className="resume-item-company">Hoonartek Pvt. Ltd.</div>
                          <p className="resume-item-desc">
                            Working with SQL and Databricks, developing optimized queries for data extraction, transformation, and analysis while gaining hands-on experience in data analytics and reporting.
                          </p>
                        </div>

                        <div className="resume-item">
                          <div className="resume-item-header">
                            <span className="resume-item-role">AI & ML Intern</span>
                            <span className="resume-item-date">Jul- 2025</span>
                          </div>
                          <div className="resume-item-company">SmartBridge Educational Services Pvt. Ltd.</div>
                          <p className="resume-item-desc">
                            Completed 2-month internship on AI & ML, implementing algorithms and real-time data processing in collaboration with APSCHE.
                          </p>
                        </div>

                        <div className="resume-item">
                          <div className="resume-item-header">
                            <span className="resume-item-role">MERN Stack Developer Intern</span>
                            <span className="resume-item-date">Jul- 2024</span>
                          </div>
                          <div className="resume-item-company">Bitzron Softech</div>
                          <p className="resume-item-desc">
                            Built secure authentication with role-based authorization, developed RESTful APIs, and integrated MongoDB for efficient data handling.
                          </p>
                        </div>
                      </div>

                      <div className="resume-section-block">
                        <h3 className="resume-section-title">
                          <Code size={14} style={{ marginRight: '6px' }} /> Selected Projects
                        </h3>

                        <div className="resume-item">
                          <div className="resume-item-header-with-link">
                            <span className="resume-item-role">DevCraftz (No-Code, No-Prompt)</span>
                            <a href="http://www.devcraftz.in" target="_blank" rel="noopener noreferrer" className="resume-link-url">
                              www.devcraftz.in <Globe size={10} style={{ marginLeft: '2px' }} />
                            </a>
                          </div>
                          <p className="resume-item-desc">
                            Developed a website deployment platform that enables users to launch portfolios. Automated GitHub repo creation and Vercel workflows. Built Irah AI assistant using RAG.
                          </p>
                        </div>

                        <div className="resume-item">
                          <div className="resume-item-header-with-link">
                            <span className="resume-item-role">Hand Sign Emotion Detection</span>
                            <a href="https://github.com/DussaUday/Hand-Sign" target="_blank" rel="noopener noreferrer" className="resume-link-url">
                              https://github.com/DussaUday/Hand-Sign <Globe size={10} style={{ marginLeft: '2px' }} />
                            </a>
                          </div>
                          <p className="resume-item-desc">
                            Python & OpenCV-based system detecting hand gestures and facial cues to trigger alerts for sad/fear emotions.
                          </p>
                        </div>

                        <div className="resume-item">
                          <div className="resume-item-header-with-link">
                            <span className="resume-item-role">SOCIALITY (Social Media Website)</span>
                            <a href="https://uday-final-y22h.vercel.app" target="_blank" rel="noopener noreferrer" className="resume-link-url">
                              https://uday-final-y22h.vercel.app <Globe size={10} style={{ marginLeft: '2px' }} />
                            </a>
                          </div>
                          <p className="resume-item-desc">
                            A MERN social platform featuring sharing, stories, real-time chats, and a multiplayer Bingo game lounge.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Education, Skills, and Achievements */}
                    <div className="resume-col-right">
                      <div className="resume-section-block">
                        <h3 className="resume-section-title">
                          <BookOpen size={14} style={{ marginRight: '6px' }} /> Education
                        </h3>
                        
                        <div className="resume-item">
                          <div className="resume-item-header">
                            <span className="resume-item-role">Lakireddy Bali Reddy College of Engineering</span>
                            <span className="resume-item-date">2022-2026</span>
                          </div>
                          <div className="resume-item-company">Bachelor of Technology — CGPA: 7.5</div>
                        </div>

                        <div className="resume-item">
                          <div className="resume-item-header">
                            <span className="resume-item-role">Sri Chaitanya Jr. College</span>
                            <span className="resume-item-date">2020-2022</span>
                          </div>
                          <div className="resume-item-company">IPE Percentage: 84.7%</div>
                        </div>

                        <div className="resume-item">
                          <div className="resume-item-header">
                            <span className="resume-item-role">Sri Chaitanya School</span>
                            <span className="resume-item-date">2019-2020</span>
                          </div>
                          <div className="resume-item-company">SSC Percentage: 96%</div>
                        </div>
                      </div>

                      <div className="resume-section-block">
                        <h3 className="resume-section-title">Technical Skills</h3>
                        
                        <div className="resume-skills-group">
                          <div className="resume-skill-cat">Languages</div>
                          <div className="resume-skill-vals">C, Java, Python, SQL, JavaScript</div>
                        </div>

                        <div className="resume-skills-group">
                          <div className="resume-skill-cat">Web Technologies</div>
                          <div className="resume-skill-vals">React.js, Node.js, Express.js, WebSockets, HTML5, CSS3, Tailwind CSS</div>
                        </div>

                        <div className="resume-skills-group">
                          <div className="resume-skill-cat">Databases</div>
                          <div className="resume-skill-vals">MongoDB, Firebase, MySQL, Supabase</div>
                        </div>

                        <div className="resume-skills-group">
                          <div className="resume-skill-cat">Cloud & AI</div>
                          <div className="resume-skill-vals">Databricks, Apache Spark, RAG, Generative AI, Prompt Engineering</div>
                        </div>
                      </div>

                      <div className="resume-section-block">
                        <h3 className="resume-section-title">
                          <Award size={14} style={{ marginRight: '6px' }} /> Achievements & Certs
                        </h3>
                        <ul className="resume-skills-list-bullets">
                          <li>Won <strong>Omnitrix Hackathon 2025</strong> as Team Lead at VRSEC (represented LBRCE).</li>
                          <li>Won Internship Prize at <strong>CodeSpark 2025</strong> (VXL IT Solutions offer).</li>
                          <li><strong>TCS CodeVita Season 13</strong> — Global Rank 1169.</li>
                          <li>Databricks Fundamentals — Databricks Academy</li>
                          <li>Generative AI Certification — edX</li>
                          <li>Salesforce AI Associate Certification — Salesforce</li>
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* BACK SIDE: Plain Resume PDF Viewer */}
            <div className="resume-card-back">
              <div className="plain-pdf-container">
                {pdfError ? (
                  <div className="plain-pdf-fallback">
                    <p>PDF preview unavailable.</p>
                    <a 
                      href={plainResumePDF} 
                      download="Dussa_Uday_Krishna_Resume.pdf" 
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        const link = document.createElement('a');
                        link.href = plainResumePDF;
                        link.download = 'Dussa_Uday_Krishna_Resume.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      <Download size={16} /> Download Resume
                    </a>
                  </div>
                ) : (
                  <iframe 
                    src={plainResumePDF}
                    className="plain-pdf-iframe"
                    title="Plain Resume PDF"
                    onError={handleIframeError}
                  >
                    <div className="plain-pdf-fallback">
                      <p>Your browser doesn't support PDF preview.</p>
                      <a 
                        href={plainResumePDF} 
                        download="Dussa_Uday_Krishna_Resume.pdf" 
                        className="btn btn-primary"
                      >
                        <Download size={16} /> Download Resume
                      </a>
                    </div>
                  </iframe>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;