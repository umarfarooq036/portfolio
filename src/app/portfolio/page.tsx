'use client';

import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Enhanced projects array with more details
const projects = [
  {
    id: "r4r",
    title: "Right4Role",
    description: "AI-powered recruitment platform connecting talent with opportunities through intelligent matching algorithms.",
    img: "/imgs/portfolio/R4R.png",
    category: "web",
    technologies: ["React", "Node.js", "AI/ML", "PostgreSQL"],
    alt: "Right4Role project screenshot",
    href: "https://dev.right4role.com/",
    status: "Live",
    featured: true
  },
  {
    id: "lds",
    title: "LDS Admin Panel",
    description: "Comprehensive admin dashboard for logistics and delivery management with real-time tracking.",
    img: "/imgs/portfolio/LDS.png",
    category: "web",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
    alt: "LDS Admin project screenshot",
    href: "https://lds.agiletechstudio.cloud",
    status: "Live",
    featured: true
  },
  {
    id: "hireable",
    title: "Hireable",
    description: "Modern job marketplace platform with advanced filtering and matching capabilities.",
    img: "/imgs/portfolio/Hireable.png",
    category: "web",
    technologies: ["React", "Express.js", "MySQL", "Redis"],
    alt: "Hireable project screenshot",
    href: "https://gethireable.com",
    status: "Live",
    featured: false
  },
  {
    id: "livex",
    title: "LiveX",
    description: "Interactive live streaming platform with real-time chat and engagement features.",
    img: "/imgs/portfolio/1.png",
    category: "web",
    technologies: ["Next.js", "WebRTC", "Socket.io", "AWS"],
    alt: "LiveX project screenshot",
    href: "https://livex.tech/",
    status: "Live",
    featured: false
  },
  {
    id: "tripdeal",
    title: "TripDeal.pk",
    description: "Travel booking platform with integrated payment gateway and booking management system.",
    img: "/imgs/portfolio/2.png",
    category: "wordpress",
    technologies: ["WordPress", "PHP", "MySQL", "Payment Gateway"],
    alt: "TripDeal project screenshot",
    href: "https://tripdeal.pk/",
    status: "Live",
    featured: false
  },
  {
    id: "scrapify",
    title: "Scrapify",
    description: "Web scraping tool with intuitive interface for data extraction and automation.",
    img: "/imgs/portfolio/3.png",
    category: "web",
    technologies: ["React", "Python", "FastAPI", "Docker"],
    alt: "Scrapify project screenshot",
    href: "https://scrapify-beta.vercel.app/",
    status: "Beta",
    featured: false
  },
];

const Portfolio: NextPage = () => {
  const [activeFilter, setAciveFilter] = useState("all");
  const [filteredProject , setFilteredProject] = useState(projects);

  const filters = [
    { label: "All", value: "all" },
    { label: "Web Development", value: "web" },
    { label: "App Development", value: "mobile" },
    { label: "WordPress", value: "wordpress" },
  ];

  const handleFilterClick = (value : any) => {
    setAciveFilter(value);
    // 👉 Here you can also trigger your filter logic
    // e.g. filterItems(value)
    setFilteredProject(projects.filter((p)=> p.category === value || value === 'all'))
  };



  return (
    <main>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>My Portfolio</h2>
            <p>Showcasing my latest projects and creative solutions</p>
          </div>
          
          <div className="portfolio-filters">
            {filters.map((filter) => (
              <button 
                key={filter.value} 
                onClick={() => handleFilterClick(filter.value)} 
                type="button" 
                className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredProject.length === 0 && (
              <div className="empty-state">
                <i className="fa fa-code"></i>
                <h3>No Projects Found</h3>
                <p>Check back later for exciting projects in this category!</p>
              </div>
            )}

            {filteredProject.map((project, index) => (
              <div
                className={`portfolio-card ${project.featured ? 'featured' : ''} animate-in`}
                key={project.id}
                style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
              >
                <div className="portfolio-image">
                  <Image
                    src={project.img}
                    alt={project.alt ?? project.title}
                    width={400}
                    height={250}
                    className="project-img"
                  />
                  <div className="card-overlay">
                    <div className="overlay-content">
                      <h4>{project.title}</h4>
                      <p>{project.description}</p>
                      <Link
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="overlay-btn"
                      >
                        View Project
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="portfolio-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="tech-tags">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="project-footer">
                    <span className={`project-status status-${project.status.toLowerCase()}`}>
                      {project.status}
                    </span>
                    {project.featured && (
                      <span className="featured-badge">
                        <i className="fa fa-star"></i> Featured
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
