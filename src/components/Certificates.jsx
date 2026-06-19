import React, { useState } from 'react';
import { Search, Award, Calendar, ExternalLink, X, Trophy, Milestone } from 'lucide-react';
import './Certificates.css';

const Certificates = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCert, setSelectedCert] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const hackathons = [
    {
      title: "3rd Prize @ Omnitrix Hackathon 2025",
      type: "Hackathon Win",
      organization: "VR Siddhartha Engineering College",
      date: "Oct 2025",
      description: "🏆 Secured 3rd Prize at the Omnitrix National-Level Hackathon 2025 as Team Lead! Our team proudly represented LBRCE. Developed DevCraftz—a website deployment system—collaborating with दिनेश कगिथा (Dinesh Kagitha) and अक्षयनाथ (Chitithoti Akshaynath). Recognized for innovation, design complexity, and rapid deployment orchestration.",
      image: "https://res.cloudinary.com/dju35hfu2/image/upload/v1761650322/Portfolio/w60ocxka6jalq2jmlpwh.jpg",
      tags: ["DevCraftz", "Team Lead", "National Level"]
    },
    {
      title: "Internship Prize @ CodeSpark India 2025",
      type: "Hackathon Win",
      organization: "KBN College, Vijayawada",
      date: "Aug 2025",
      description: "💡 Won the stipend-based Internship Offer from VXL IT Solutions Pvt. Ltd. at the 24-hour National Level Hackathon – CodeSpark India 2025. Pitched, built, and optimized DevCraftz—a platform making website creation as simple as form completion—alongside Manikanta Yalamanchili and Venkatesh Jamalapurapu.",
      image: "https://res.cloudinary.com/dju35hfu2/image/upload/v1761651006/Portfolio/ofoujunyjen90wvjzj5r.jpg",
      tags: ["DevCraftz", "Team Lead", "24-Hour Hackathon"]
    }
  ];

  const certificatesData = [
    {
      title: "Databricks Fundamentals",
      date: "2026-01-10",
      issuer: "Databricks Academy",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80",
      description: "Successfully certified in Databricks workspace operations, Delta Lake features, collaborative notebook analytics, and Apache Spark cluster structures."
    },
    {
      title: "Microsoft SQL Migration - Delivery Expert (3 Badges)",
      date: "2025-11-20",
      issuer: "Microsoft",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=400&q=80",
      description: "Awarded three migration path badges for expertise in migrating on-premises SQL Server workloads to Azure SQL Databases, optimizing transactional query pipelines, and handling secure database migrations."
    },
    {
      title: "Tableau Certification",
      date: "2025-04-18",
      issuer: "Tableau",
      image: "https://res.cloudinary.com/drc8bufjn/image/upload/v1748693951/message_attachments/riwj8asslhyoioituyku.png",
      description: "Demonstrated skills in data aggregation, visualization creation, interactive dashboard design, and storytelling through reports."
    },
    {
      title: "Salesforce Certified AI Associate",
      date: "2024-10-27",
      issuer: "Salesforce",
      image: "https://res.cloudinary.com/drc8bufjn/image/upload/v1748798991/message_attachments/otynawgcrgcmfyqeiadp.png",
      description: "Acquired fundamental knowledge of AI principles in Salesforce, ethical AI implementations, data strategies, and CRM optimization."
    },
    {
      title: "Biztron Softech Internship Certificate",
      date: "2024-07-20",
      issuer: "Biztron Softech",
      image: "https://res.cloudinary.com/drc8bufjn/image/upload/v1747323724/message_attachments/cjdimq7itcpoiaeraj6x.jpg",
      description: "Completed full MERN Stack Developer internship, building secure auth routers and integrating MongoDB schemas."
    },
    {
      title: "IBM Introduction to Cloud Computing",
      date: "2024-06-05",
      issuer: "IBM",
      image: "https://res.cloudinary.com/drc8bufjn/image/upload/v1748799410/message_attachments/tk1ytr8fjjwj02muznza.png",
      description: "Learned cloud service models (IaaS, PaaS, SaaS), cloud hosting platforms, architectures, and serverless computing structures."
    },
    {
      title: "HarvardX Introduction to Data Science with Python",
      date: "2024-06-05",
      issuer: "HarvardX (edX)",
      image: "https://res.cloudinary.com/drc8bufjn/image/upload/v1748799569/message_attachments/yiuho6mixfwih9nfadhh.png",
      description: "Acquired fundamentals of Python-based data cleaning, statistical modeling, data visualization, and basic machine learning regressions."
    },
    {
      title: "OpenEDG Python Institute Certification",
      date: "2024-03-20",
      issuer: "OpenEDG Python Institute",
      image: "https://res.cloudinary.com/drc8bufjn/image/upload/v1748825852/message_attachments/xi4j8jovmcdfht4ds1tz.png",
      description: "Validated competencies in advanced programming concepts, object-oriented paradigms, exception patterns, and standard operations."
    },
    {
      title: "Generative AI Fundamentals",
      date: "2024-03-20",
      issuer: "edX / Google",
      image: "https://res.cloudinary.com/drc8bufjn/image/upload/v1748850955/message_attachments/ezpl76myxrslmsbzwlkv.png",
      description: "Introduced to LLM concepts, prompt engineering, generative architectures, and ethical considerations of generative AI models."
    },
    {
      title: "PCAP: Programming Essentials in Python",
      date: "2024-03-28",
      issuer: "Cisco Networking Academy",
      image: "https://res.cloudinary.com/drc8bufjn/image/upload/v1748861223/message_attachments/u8dicmlddval8iwflntk.png",
      description: "Completed Cisco Python PCAP series, covering scripting, modules, loops, function mapping, and data structures."
    },
    {
      title: "Cybersecurity Essentials",
      date: "2024-06-05",
      issuer: "Cisco",
      image: "https://res.cloudinary.com/drc8bufjn/image/upload/v1749103412/message_attachments/baf7aotcfxu2eesdb1sc.png",
      description: "Studied core principles of digital asset protection, threat models, cryptography methods, network security, and risk containment."
    },
    {
      title: "NPTEL Introduction to Internet of Things",
      date: "2024-11-03",
      issuer: "NPTEL / IIT",
      image: "https://res.cloudinary.com/drc8bufjn/image/upload/v1749110049/message_attachments/ltgrxkqtjp5okswkxw9q.png",
      description: "Acquired understandings in sensor networks, microcontrollers, communication protocols (MQTT, HTTP), and cloud IoT integrations."
    },
    {
      title: "EBOX Programming & Problem Solving using C",
      date: "2024-10-22",
      issuer: "EBOX (EV)",
      image: "https://media.licdn.com/dms/image/v2/D4E22AQGkCIm_U3PGdg/feedshare-shrink_2048_1536/B4EZU3NNzRHUAo-/0/1740387966741?e=1752105600&v=beta&t=HAOy-WiQEo4YfPfTHYc8JeVSYQf28bquVc2wSI_wya4",
      description: "Extensive problem-solving coursework covering memory management, file handling, pointers, structures, and algorithmic logic in C."
    }
  ];

  // Filtering based on search queries
  const filteredCerts = certificatesData.filter(cert => 
    cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.issuer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedCerts = showAll ? filteredCerts : filteredCerts.slice(0, 6);

  return (
    <section id="credentials" className="certificates-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Achievements & <span className="section-title-accent">Credentials</span>
          </h2>
          <p className="section-subtitle">
            Proving competence through national hackathons, coding contests, and professional technology certifications.
          </p>
        </div>

        {/* Hackathon Winners Spotlights */}
        <div className="hackathon-spotlights">
          <h3 className="section-subheading">
            <Trophy className="subheading-icon" size={22} /> Hackathon Triumphs
          </h3>
          
          <div className="hackathons-grid">
            {hackathons.map((hack, index) => (
              <div key={index} className="hackathon-card glass-panel">
                <div className="hackathon-image-wrapper">
                  <img src={hack.image} alt={hack.title} className="hackathon-image" />
                  <div className="hackathon-date-tag">
                    <Calendar size={12} style={{ marginRight: '4px' }} />
                    {hack.date}
                  </div>
                </div>
                <div className="hackathon-details">
                  <span className="badge badge-emerald hack-badge">{hack.type}</span>
                  <h4 className="hack-title">{hack.title}</h4>
                  <h5 className="hack-org">{hack.organization}</h5>
                  <p className="hack-description">{hack.description}</p>
                  <div className="hack-tags">
                    {hack.tags.map((t, idx) => (
                      <span key={idx} className="hack-tag">#{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coding Ranks Milestone */}
        <div className="coding-milestone-panel glass-panel">
          <div className="milestone-content">
            <div className="milestone-icon-wrapper">
              <Milestone size={24} />
            </div>
            <div className="milestone-text">
              <h4 className="milestone-title">TCS CodeVita Season 13 Achievement</h4>
              <p className="milestone-desc">
                Secured an impressive <strong>Global Rank of 1169</strong> in the prestigious international coding 
                contest TCS CodeVita, validating advanced algorithmic thinking and competitive programming speed.
              </p>
            </div>
          </div>
          <div className="milestone-rank-badge">
            <span className="rank-label">Global Rank</span>
            <span className="rank-value">#1169</span>
          </div>
        </div>

        {/* Professional Certifications Grid */}
        <div className="certifications-area">
          <div className="certs-header">
            <h3 className="section-subheading">
              <Award className="subheading-icon" size={22} /> Verified Certifications
            </h3>
            
            {/* Search Bar */}
            <div className="certs-search-wrapper">
              <Search className="search-icon" size={16} />
              <input 
                type="text" 
                placeholder="Search certificates..." 
                className="certs-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="certs-grid">
            {displayedCerts.map((cert, index) => (
              <div 
                key={index} 
                className="cert-item-card glass-panel"
                onClick={() => setSelectedCert(cert)}
                title="Click to view full credential"
              >
                <div className="cert-thumb-wrapper">
                  <img src={cert.image} alt={cert.title} className="cert-thumb" loading="lazy" />
                  <div className="cert-thumb-hover">
                    <ExternalLink size={20} />
                    <span className="hover-text">View Credential</span>
                  </div>
                </div>
                <div className="cert-info">
                  <h4 className="cert-title">{cert.title}</h4>
                  <div className="cert-meta">
                    <span className="cert-issuer">{cert.issuer}</span>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCerts.length === 0 && (
            <div className="certs-empty-state">
              <p>No certificates found matching your search term.</p>
            </div>
          )}

          {filteredCerts.length > 6 && (
            <div className="certs-toggle-action">
              <button 
                className="btn btn-secondary"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show Less" : `View All Certificates (${filteredCerts.length})`}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Certificate Modal Overlay */}
      {selectedCert && (
        <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>
              <X size={20} />
            </button>
            <div className="cert-modal-body">
              <div className="cert-modal-image-container">
                <img src={selectedCert.image} alt={selectedCert.title} className="cert-modal-image" />
              </div>
              <div className="cert-modal-details">
                <h3 className="modal-cert-title">{selectedCert.title}</h3>
                <div className="modal-cert-meta">
                  <div className="modal-meta-item">
                    <span className="meta-label">Issued By:</span>
                    <span className="meta-val">{selectedCert.issuer}</span>
                  </div>
                  <div className="modal-meta-item">
                    <span className="meta-label">Date:</span>
                    <span className="meta-val">{selectedCert.date}</span>
                  </div>
                </div>
                <p className="modal-cert-description">{selectedCert.description}</p>
                <div className="modal-cert-actions">
                  <a href={selectedCert.image} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-modal-link">
                    <ExternalLink size={16} /> Open Image in New Tab
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
