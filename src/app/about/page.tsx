'use client';

import type { NextPage } from "next";
import { useState, useEffect } from "react";

const About: NextPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('experience');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Enhanced skills with categories and proficiency
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", level: 90, color: "#61dafb" },
        { name: "Next.js", level: 85, color: "#000000" },
        { name: "TypeScript", level: 80, color: "#3178c6" },
        { name: "JavaScript", level: 95, color: "#f7df1e" },
        { name: "HTML5/CSS3", level: 90, color: "#e34f26" },
      ]
    },
    {
      category: "Backend Development", 
      skills: [
        { name: "Node.js", level: 88, color: "#339933" },
        { name: "Express.js", level: 85, color: "#000000" },
        { name: "MongoDB", level: 80, color: "#47a248" },
        { name: "PostgreSQL", level: 75, color: "#336791" },
        { name: "Firebase", level: 82, color: "#ffca28" },
      ]
    },
    {
      category: "Mobile Development",
      skills: [
        { name: "Flutter", level: 92, color: "#02569b" },
        { name: "Dart", level: 88, color: "#0175c2" },
        { name: "React Native", level: 70, color: "#61dafb" },
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 90, color: "#f05032" },
        { name: "Docker", level: 75, color: "#2496ed" },
        { name: "AWS/GCP", level: 70, color: "#ff9900" },
        { name: "Figma", level: 85, color: "#f24e1e" },
      ]
    }
  ];

  const educations = [
    {
      date: "2020 to 2024",
      title: "Bachelor of Science in Computer Science (BSCS)",
      institution: "University of Management and Technology, Lahore",
      text: "Graduated with a CGPA of 3.43. Focused on software engineering, data structures, algorithms, and modern web technologies.",
      achievements: ["Dean's List", "Final Year Project: AI-powered Recruitment Platform"]
    },
  ];

  const experiences = [
    {
      date: "October 2024 to Present",
      title: "Full Stack Developer",
      company: "AgileTech Studio",
      location: "Lahore, Pakistan",
      text: "Leading cross-platform development for web and mobile applications. Building responsive React/Next.js frontends and designing Node/Express APIs backed by MySQL and PostgreSQL.",
      highlights: [
        "Team Lead for Flutter and MERN teams",
        "Architected GCP deployments and CI/CD pipelines", 
        "Mentored junior developers and conducted code reviews",
        "Streamlined development processes and best practices"
      ]
    },
    {
      date: "March 2024 to October 2024", 
      title: "Mobile App Developer",
      company: "UMT Connected",
      location: "Lahore, Pakistan",
      text: "Developed user engagement features for liveX.tech platform using Next.js and Flutter. Led mobile development efforts with focus on cross-platform integration.",
      highlights: [
        "Built real-time chat and streaming features",
        "Optimized mobile app performance by 40%",
        "Integrated WebRTC for live streaming capabilities"
      ]
    },
    {
      date: "November 2023 to February 2024",
      title: "Full Stack Developer", 
      company: "TripDeal.pk",
      location: "Lahore, Pakistan",
      text: "Spearheaded migration from WordPress to MERN stack architecture, enhancing performance and scalability significantly.",
      highlights: [
        "Migrated legacy WordPress site to modern MERN stack",
        "Improved site performance by 60%",
        "Implemented secure payment gateway integration",
        "Built responsive booking management system"
      ]
    },
  ];

  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
              <p className="section-subtitle">
                Get to know more about my journey, skills, and passion for development
              </p>
            </div>
          </div>

          <div className={`about-content ${isLoaded ? 'loaded' : ''}`}>
            {/* Hero Introduction */}
            <div className="about-hero">
              <div className="about-text">
                <h2 className="about-title">
                  I'm <span className="name-highlight">Muhammad Umar Farooq</span>
                  <br />
                  <span className="role-highlight">Full‑Stack Developer</span>
                </h2>
                <p className="about-description">
                  Passionate full-stack developer with <strong>2+ years</strong> of experience crafting 
                  digital solutions that make a difference. I specialize in building scalable web and 
                  mobile applications using modern technologies like <strong>React</strong>, <strong>Next.js</strong>, 
                  and <strong>Flutter</strong>. My journey is driven by curiosity, continuous learning, 
                  and the desire to create seamless user experiences.
                </p>
                
                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-number">15+</div>
                    <div className="stat-label">Projects Completed</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">2+</div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">3</div>
                    <div className="stat-label">Companies Worked</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Client Satisfaction</div>
                  </div>
                </div>
              </div>

              <div className="personal-info-modern">
                <div className="info-card">
                  <div className="info-grid">
                    <div className="info-item">
                      <div className="info-icon">
                        <i className="fa fa-globe"></i>
                      </div>
                      <div className="info-content">
                        <span className="info-label">Website</span>
                        <span className="info-value">https://portfolio-uf.vercel.app/</span>
                      </div>
                    </div>
                    <div className="info-item">
                      <div className="info-icon">
                        <i className="fa fa-envelope"></i>
                      </div>
                      <div className="info-content">
                        <span className="info-label">Email</span>
                        <span className="info-value">umerfarooqamjad2000@gmail.com</span>
                      </div>
                    </div>
                    <div className="info-item">
                      <div className="info-icon">
                        <i className="fa fa-phone"></i>
                      </div>
                      <div className="info-content">
                        <span className="info-label">Phone</span>
                        <span className="info-value">+92 313 6304133</span>
                      </div>
                    </div>
                    <div className="info-item">
                      <div className="info-icon">
                        <i className="fa fa-map-marker"></i>
                      </div>
                      <div className="info-content">
                        <span className="info-label">Location</span>
                        <span className="info-value">Lahore, Pakistan</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="action-buttons">
                    <a href="/assets/docs/resume.pdf" target="_blank" className="btn btn-primary">
                      <i className="fa fa-download"></i>
                      <span>Download CV</span>
                    </a>
                    <a href="/contact" className="btn btn-secondary">
                      <i className="fa fa-paper-plane"></i>
                      <span>Hire Me</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="skills-section">
              <h3 className="section-heading">Technical Skills</h3>
              <div className="skills-grid">
                {skillCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="skill-category">
                    <h4 className="category-title">{category.category}</h4>
                    <div className="skills-list">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="skill-item-modern">
                          <div className="skill-header">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-percentage">{skill.level}%</span>
                          </div>
                          <div className="skill-bar">
                            <div 
                              className="skill-progress" 
                              style={{ 
                                width: `${skill.level}%`,
                                backgroundColor: skill.color,
                                animationDelay: `${skillIndex * 0.1}s`
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience & Education Tabs */}
            <div className="timeline-section">
              <div className="tab-navigation">
                <button 
                  className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
                  onClick={() => setActiveTab('experience')}
                >
                  <i className="fa fa-briefcase"></i>
                  <span>Experience</span>
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
                  onClick={() => setActiveTab('education')}
                >
                  <i className="fa fa-graduation-cap"></i>
                  <span>Education</span>
                </button>
              </div>

              <div className="tab-content">
                {activeTab === 'experience' && (
                  <div className="timeline-modern">
                    {experiences.map((exp, idx) => (
                      <div className="timeline-item-modern" key={`exp-${idx}`}>
                        <div className="timeline-marker">
                          <div className="marker-dot"></div>
                          <div className="marker-line"></div>
                        </div>
                        <div className="timeline-content">
                          <div className="timeline-header">
                            <div className="timeline-date">{exp.date}</div>
                            <div className="timeline-location">{exp.location}</div>
                          </div>
                          <h4 className="timeline-title">{exp.title}</h4>
                          <h5 className="timeline-company">{exp.company}</h5>
                          <p className="timeline-description">{exp.text}</p>
                          <div className="timeline-highlights">
                            {exp.highlights.map((highlight, hIdx) => (
                              <div key={hIdx} className="highlight-item">
                                <i className="fa fa-check"></i>
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'education' && (
                  <div className="timeline-modern">
                    {educations.map((edu, idx) => (
                      <div className="timeline-item-modern" key={`edu-${idx}`}>
                        <div className="timeline-marker">
                          <div className="marker-dot"></div>
                          <div className="marker-line"></div>
                        </div>
                        <div className="timeline-content">
                          <div className="timeline-header">
                            <div className="timeline-date">{edu.date}</div>
                          </div>
                          <h4 className="timeline-title">{edu.title}</h4>
                          <h5 className="timeline-company">{edu.institution}</h5>
                          <p className="timeline-description">{edu.text}</p>
                          <div className="timeline-highlights">
                            {edu.achievements.map((achievement, aIdx) => (
                              <div key={aIdx} className="highlight-item">
                                <i className="fa fa-star"></i>
                                <span>{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
