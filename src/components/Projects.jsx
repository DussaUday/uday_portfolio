import React, { useState } from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projectsData = [
    {
      title: "DevCraftz",
      category: "fullstack",
      description: "A powerful platform built for creators, students, startups, and businesses to craft stunning websites with ease. Features customizable MERN templates, an integrated AI assistant (#iraH) powered by RAG, SEO analytics, and one-click student portfolio deployments.",
      image: "https://res.cloudinary.com/drc8bufjn/image/upload/v1751295351/portfolios/emfwud2r16vaarwpnmvu.png",
      github: "https://github.com/DussaUday/portfolio_website",
      live: "https://portfolio-website-tau-azure.vercel.app/",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "AI RAG", "Vercel API"]
    },
    {
      title: "Hand Sign Emotion Detection",
      category: "ai",
      description: "A real-time emotion detection system combining hand gesture parsing and facial expressions. Built alerts that trigger when sad or fear states are identified. Features high-performance video capturing and image manipulation.",
      image: "https://res.cloudinary.com/drc8bufjn/image/upload/v1752984129/portfolios/dvhlfjlxjbhaxosi3cgo.png",
      github: "https://github.com/DussaUday/Hand-Sign",
      live: "",
      tech: ["Python", "Flask", "OpenCV", "NumPy", "Image Processing"]
    },
    {
      title: "Sociality & Bingo Hub",
      category: "fullstack",
      description: "A vibrant social network featuring real-time chat, story updates, and post sharing. Integrates a custom real-time multiplayer Bingo gaming lounge for users to play together dynamically while chatting.",
      image: "https://res.cloudinary.com/drc8bufjn/image/upload/v1747324122/message_attachments/czxquspkujxzhdc2tofc.png",
      github: "https://github.com/DussaUday/Uday_final",
      live: "https://uday-final-y22h.vercel.app",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "WebSockets"]
    },
    {
      title: "OGYM Training Platform",
      category: "frontend",
      description: "A comprehensive online fitness training web platform offering personalized workout tutorials, trainer assistance, and structured fitness routines tailored to individual health targets.",
      image: "https://res.cloudinary.com/drc8bufjn/image/upload/v1747323543/message_attachments/bbdzgjvei9d4taeb7rfg.png",
      github: "https://github.com/DussaUday/O_GYM",
      live: "",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Animation CSS"]
    },
    {
      title: "MERN Stack Portfolio",
      category: "fullstack",
      description: "A clean portfolio application showcasing full-stack capabilities, MERN state operations, schema designs, responsive client routing, and secure hosting models.",
      image: "https://res.cloudinary.com/drc8bufjn/image/upload/v1748693504/message_attachments/lt6tdvsx99fifssmoxby.png",
      github: "https://github.com/DussaUday/Portfolio",
      live: "https://portfolio-z0f2.onrender.com",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS Modules"]
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Featured <span className="section-title-accent">Projects</span>
          </h2>
          <p className="section-subtitle">
            A curation of development projects spanning full-stack web applications, machine learning algorithms, and software utilities.
          </p>
        </div>

        {/* Filter Navigation Toggles */}
        <div className="projects-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
            onClick={() => setFilter('fullstack')}
          >
            Full Stack (MERN)
          </button>
          <button 
            className={`filter-btn ${filter === 'ai' ? 'active' : ''}`}
            onClick={() => setFilter('ai')}
          >
            AI & Python
          </button>
          <button 
            className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
            onClick={() => setFilter('frontend')}
          >
            Frontend / Design
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card-container">
              <div className="project-card glass-panel">
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
                  <div className="project-image-overlay">
                    <div className="overlay-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-icon-only overlay-link-btn" title="View Source on GitHub">
                        <Github size={18} />
                      </a>
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-icon-only overlay-link-btn" title="View Live Deployment">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-details">
                  <div className="project-header">
                    <h3 className="project-card-title">{project.title}</h3>
                    <span className={`badge category-badge ${
                      project.category === 'fullstack' ? 'badge-cyan' : 
                      project.category === 'ai' ? 'badge-indigo' : 'badge-emerald'
                    }`}>
                      {project.category === 'fullstack' ? 'MERN Stack' : 
                       project.category === 'ai' ? 'AI & Python' : 'UI & Frontend'}
                    </span>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-tech-list">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="project-tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="project-mobile-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary mobile-link-btn">
                      <Github size={16} /> GitHub
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary mobile-link-btn">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
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

export default Projects;
