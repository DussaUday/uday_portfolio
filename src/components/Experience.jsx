import React from 'react';
import { Briefcase, Calendar, CheckCircle2, MapPin } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const internships = [
    {
      role: "Data Analytics Intern",
      company: "Hoonartek Pvt. Ltd.",
      location: "Pune, India (Remote)",
      duration: "Present",
      colorClass: "experience-current",
      badgeColor: "badge-cyan",
      highlights: [
        "Developing optimized queries using SQL and Databricks for fast data extraction and manipulation.",
        "Transforming raw datasets into structured formats ready for modeling and pipeline ingestion.",
        "Collaborating on data analytics and reporting dashboards to drive metrics visibility.",
        "Gaining hands-on industrial experience in cloud-based data warehouses and analytics tooling."
      ],
      techStack: ["SQL", "Databricks", "Apache Spark", "Data Analytics", "Power BI"]
    },
    {
      role: "AI & ML Intern",
      company: "SmartBridge Educational Services Pvt. Ltd.",
      location: "Vijayawada, India (Hybrid)",
      duration: "Jul 2025 - Sep 2025",
      colorClass: "experience-ai",
      badgeColor: "badge-indigo",
      highlights: [
        "Completed a intensive 2-month internship focusing on Artificial Intelligence and Machine Learning implementations.",
        "Developed and executed machine learning algorithms and real-time data processing engines.",
        "Collaborated on project deliverables in association with APSCHE (Andhra Pradesh State Council of Higher Education).",
        "Applied computer vision and prediction methodologies to real-world edge-computing datasets."
      ],
      techStack: ["Python", "Machine Learning", "Data Processing", "Algorithms", "OpenCV"]
    },
    {
      role: "MERN Stack Developer Intern",
      company: "Bitzron Softech",
      location: "Vijayawada, India",
      duration: "Jul 2024 - Aug 2024",
      colorClass: "experience-web",
      badgeColor: "badge-emerald",
      highlights: [
        "Designed and implemented secure user authentication systems featuring role-based access authorization.",
        "Built highly performant RESTful APIs using Express.js and Node.js for data transactions.",
        "Integrated MongoDB schemas with mongoose validation for robust and efficient database storage.",
        "Improved front-end states to dynamically load and display records from database queries."
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth"]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Professional <span className="section-title-accent">Internships</span>
          </h2>
          <p className="section-subtitle">
            Gaining hands-on industrial experience, building production-ready architectures, and solving enterprise problems.
          </p>
        </div>

        <div className="experience-timeline">
          {internships.map((intern, index) => (
            <div key={index} className={`experience-card-wrapper ${intern.colorClass}`}>
              {/* Timeline center line dot representation */}
              <div className="experience-timeline-dot-container">
                <div className="experience-timeline-dot">
                  <Briefcase size={16} />
                </div>
                <div className="experience-timeline-line"></div>
              </div>

              {/* The glassy card contents */}
              <div className="experience-card glass-panel">
                <div className="experience-card-header">
                  <div className="experience-title-area">
                    <h3 className="experience-role">{intern.role}</h3>
                    <h4 className="experience-company">{intern.company}</h4>
                  </div>
                  
                  <div className="experience-meta-area">
                    <span className="experience-duration">
                      <Calendar size={13} style={{ marginRight: '5px' }} />
                      {intern.duration}
                    </span>
                    <span className="experience-location">
                      <MapPin size={13} style={{ marginRight: '5px' }} />
                      {intern.location}
                    </span>
                  </div>
                </div>

                <div className="experience-card-body">
                  <ul className="experience-highlights-list">
                    {intern.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="experience-highlight-item">
                        <CheckCircle2 size={16} className="bullet-icon" />
                        <span className="highlight-text-content">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="experience-card-footer">
                  <span className="tech-label">Tech Used:</span>
                  <div className="experience-tech-tags">
                    {intern.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className={`badge ${intern.badgeColor || ''}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
