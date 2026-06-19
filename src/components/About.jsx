import React, { useState } from 'react';
import { GraduationCap, Code2, Database, BrainCircuit, Wrench, Languages, Calendar } from 'lucide-react';
import './About.css';

const About = () => {
  const [avatarSrc, setAvatarSrc] = useState('/uday_photo.jpg');

  const handleAvatarError = () => {
    const fallbackUrl = 'https://media.naukri.com/media/jphotov1/l244%253ALukcMTu43AURG7%252B0XQgEbp8%252BwX4pZso4g1t73KRd%252B%252FSAUSZl%252B7jNDKQj9uoL';
    if (avatarSrc !== fallbackUrl) {
      setAvatarSrc(fallbackUrl);
    }
  };
  const education = [
    {
      institution: "Lakireddy Bali Reddy College of Engineering",
      location: "Mylavaram",
      degree: "Bachelor of Technology in Computer Science & Engineering",
      duration: "2022 - 2026",
      score: "CGPA: 7.5",
      details: "Building solid foundations in Data Structures, Algorithms, Software Engineering, Database Systems, and Cloud Computing. Active participant in coding hackathons and technical events."
    },
    {
      institution: "Sri Chaitanya Jr. College",
      location: "Vijayawada",
      degree: "Intermediate Education (IPE)",
      duration: "2020 - 2022",
      score: "Percentage: 84.7%",
      details: "Focused on Mathematics, Physics, and Chemistry, establishing strong analytical and problem-solving fundamentals."
    },
    {
      institution: "Sri Chaitanya School",
      location: "Vijayawada",
      degree: "Secondary School Certificate (SSC)",
      duration: "2019 - 2020",
      score: "Percentage: 96%",
      details: "Graduated with honors, demonstrating high academic performance across all general subjects."
    }
  ];

  const skillCategories = [
    {
      id: "languages",
      title: "Languages",
      icon: <Languages size={20} className="skill-cat-icon" />,
      skills: ["C", "Java", "Python", "JavaScript", "SQL"]
    },
    {
      id: "webdev",
      title: "Frontend/Backend",
      icon: <Code2 size={20} className="skill-cat-icon" />,
      skills: ["HTML5", "CSS3", "React.js", "Tailwind CSS", "Node.js", "Express.js", "WebSockets"]
    },
    {
      id: "databases",
      title: "Databases",
      icon: <Database size={20} className="skill-cat-icon" />,
      skills: ["MongoDB", "Firebase", "MySQL", "Supabase"]
    },
    {
      id: "ai-data",
      title: "AI & Data Engineering",
      icon: <BrainCircuit size={20} className="skill-cat-icon" />,
      skills: ["Databricks", "Apache Spark", "RAG (Retrieval-Augmented)", "Generative AI", "Prompt Engineering"]
    },
    {
      id: "tools",
      title: "Tools & Platforms",
      icon: <Wrench size={20} className="skill-cat-icon" />,
      skills: ["GitHub", "Postman", "Power BI", "Cloudinary", "Vercel", "Render"]
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            About <span className="section-title-accent">Me</span>
          </h2>
          <p className="section-subtitle">
            A developer combining robust software craftsmanship with cutting-edge artificial intelligence and cloud engineering.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Objective and Education */}
          <div className="about-left">
            {/* restructured objective panel with photo */}
            <div className="objective-panel glass-panel">
              <div className="objective-content-wrapper">
                <div className="objective-img-container">
                  <img 
                    src={avatarSrc} 
                    alt="Dussa Uday Krishna" 
                    className="objective-img" 
                    onError={handleAvatarError}
                  />
                </div>
                <div className="objective-text-area">
                  <h3 className="panel-title">Career Objective</h3>
                  <p className="objective-text">
                    Self-motivated B.Tech Computer Science student (2026) with strong foundation in programming, and software development. Experienced in full-stack development using React.js, Node.js, and MongoDB, along with hands-on experience in building AI systems using LLMs and Retrieval-Augmented Generation (RAG). Proficient in Python, Java, and C. Quick learner and team player, seeking a Software Engineer role to build intelligent and scalable solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="education-timeline-container">
              <h3 className="panel-title-large">
                <GraduationCap className="title-icon" size={24} /> Education
              </h3>
              
              <div className="education-timeline">
                {education.map((item, index) => (
                  <div key={index} className="timeline-item glass-panel">
                    <div className="timeline-badge">
                      <GraduationCap size={16} />
                    </div>
                    <div className="timeline-header">
                      <h4 className="institution-name">{item.institution}</h4>
                      <span className="timeline-duration">
                        <Calendar size={12} style={{ marginRight: '4px' }} />
                        {item.duration}
                      </span>
                    </div>
                    <div className="degree-info">
                      <span className="degree-title">{item.degree}</span>
                      <span className="degree-score">{item.score}</span>
                    </div>
                    <p className="timeline-details">{item.details}</p>
                    <span className="timeline-location">{item.location}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Skills Section */}
          <div className="about-right">
            <div className="skills-container glass-panel">
              <h3 className="panel-title">Technical Expertise</h3>
              <p className="skills-intro">
                Here is a breakdown of languages, libraries, platforms, and databases I work with on a regular basis.
              </p>

              <div className="skills-grid">
                {skillCategories.map((category) => (
                  <div key={category.id} className="skill-category-card">
                    <div className="skill-category-header">
                      {category.icon}
                      <h4 className="skill-category-title">{category.title}</h4>
                    </div>
                    <div className="skill-tags">
                      {category.skills.map((skill, sIdx) => {
                        let badgeClass = "badge";
                        if (category.id === "ai-data") badgeClass = "badge badge-cyan";
                        else if (category.id === "databases") badgeClass = "badge badge-emerald";
                        else if (category.id === "languages") badgeClass = "badge badge-amber";
                        
                        return (
                          <span key={sIdx} className={badgeClass}>
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
