// import type { NextPage } from "next";

// const Service: NextPage = () => {
//   return (
//     <>
//         <section className="service section" id="services">
//   <div className="container">
//     <div className="row">
//       <div className="section-title padd-15">
//         <h2>Our Services</h2>
//       </div>
//     </div>
//     <div className="row">
//       {/* Service Item 1: Logo Design */}
//       <div className="service-item padd-15">
//         <div className="service-item-inner">
//           <div className="icon"><i className="fa fa-paint-brush" /></div>
//           <h4>Professional Logo Design</h4>
//           <p>Elevate your brand with a unique and memorable logo. Our expert designers will create a distinctive
//             logo
//             that reflects your business identity and leaves a lasting impression on your audience.</p>
//         </div>
//       </div>
//       {/* Service Item 1 End */}
//       {/* Service Item 2: Web Design */}
//       <div className="service-item padd-15">
//         <div className="service-item-inner">
//           <div className="icon"><i className="fa fa-laptop" /></div>
//           <h4>Custom Web Design</h4>
//           <p>Create a stunning online presence with our custom web design services. Wel will tailor a website that
//             not only
//             looks impressive but also delivers a seamless user experience, helping you achieve your online goals.
//           </p>
//         </div>
//       </div>
//       {/* Service Item 2 End */}
//       {/* Service Item 3: WordPress */}
//       <div className="service-item padd-15">
//         <div className="service-item-inner">
//           <div className="icon"><i className="fa fa-wordpress" /></div>
//           <h4>WordPress Development</h4>
//           <p>Harness the power of WordPress for your website. Our experts will build a feature-rich and scalable
//             WordPress site that empowers you to manage content effortlessly and stay ahead in the digital
//             landscape.</p>
//         </div>
//       </div>
//       {/* Service Item 3 End */}
//       {/* Service Item 4: Web Development */}
//       <div className="service-item padd-15">
//         <div className="service-item-inner">
//           <div className="icon"><i className="fa fa-code" /></div>
//           <h4>Web Development</h4>
//           <p>Turn your digital ideas into reality with our web development solutions. We specialize in crafting
//             robust
//             and dynamic websites that are tailored to meet your specific business needs and objectives.</p>
//         </div>
//       </div>
//       {/* Service Item 4 End */}
//       {/* Service Item 5: Video Editing */}
//       <div className="service-item padd-15">
//         <div className="service-item-inner">
//           <div className="icon"><i className="fa fa-film" /></div>
//           <h4>Professional Video Editing</h4>
//           <p>Enhance your video content with our professional video editing services. We will transform your raw
//             footage
//             into polished, engaging videos that captivate your audience and convey your message effectively.</p>
//         </div>
//       </div>
//       {/* Service Item 5 End */}
//       {/* Service Item 6: SEO Optimization */}
//       <div className="service-item padd-15">
//         <div className="service-item-inner">
//           <div className="icon"><i className="fa fa-rocket" /></div>
//           <h4>SEO Optimization</h4>
//           <p>Boost your online visibility and drive organic traffic to your website with our SEO optimization
//             services.
//             Our experts employ proven strategies to improve your search engine rankings and grow your online
//             presence.
//           </p>
//         </div>
//       </div>
//       {/* Service Item 6 End */}
//     </div>
//   </div>
// </section>

//     </>
//   );
// };

// export default Service;

//

'use client';

import type { NextPage } from "next";
import { useState, useEffect } from "react";

const services = [
  {
    id: 1,
    icon: "fa-mobile",
    title: "Mobile App Development",
    description: "Lead Flutter development efforts to create dynamic and user-friendly mobile applications that enhance user engagement and provide a seamless experience across platforms.",
    features: ["Cross-platform Development", "Native Performance", "Custom UI/UX", "App Store Deployment"],
    color: "#667eea"
  },
  {
    id: 2,
    icon: "fa-server",
    title: "Full Stack Development",
    description: "Transition your website to a modern MERN stack architecture. Develop server-side components and APIs with Express.js and design responsive frontend interfaces using Next.js.",
    features: ["MERN Stack", "API Development", "Database Design", "Cloud Deployment"],
    color: "#764ba2"
  },
  {
    id: 3,
    icon: "fa-desktop",
    title: "Frontend Development",
    description: "Create stunning and responsive user interfaces using JavaScript frameworks like React.js and Next.js, along with HTML5 and CSS3 for optimal user experiences.",
    features: ["React.js & Next.js", "Responsive Design", "Modern CSS", "Performance Optimization"],
    color: "#f093fb"
  },
  {
    id: 4,
    icon: "fa-database",
    title: "Backend Development",
    description: "Develop robust backend systems with Node.js and Express.js, utilizing MongoDB and Firebase Firestore for efficient data storage and management.",
    features: ["Node.js & Express", "Database Management", "API Integration", "Security Implementation"],
    color: "#4facfe"
  },
  {
    id: 5,
    icon: "fa-code",
    title: "Web Development",
    description: "Turn your digital ideas into reality with our web development solutions. We specialize in crafting robust and dynamic websites that are tailored to meet your specific business needs.",
    features: ["Custom Solutions", "E-commerce", "CMS Development", "SEO Optimization"],
    color: "#43e97b"
  },
  {
    id: 6,
    icon: "fa-lock",
    title: "Authentication & Security",
    description: "Implement secure authentication systems using Auth0 and Firebase Authentication to protect user data and ensure secure access to your applications.",
    features: ["OAuth Integration", "JWT Tokens", "Role-based Access", "Data Encryption"],
    color: "#fa709a"
  }
];

const Service: NextPage = () => {
  const [visibleServices, setVisibleServices] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const serviceId = parseInt(entry.target.getAttribute('data-service-id') || '0');
            setVisibleServices(prev => [...prev, serviceId]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const serviceElements = document.querySelectorAll('.service-card');
    serviceElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <section className="service section" id="services">
        <div className="container">
          <div className="section-title">
            <h2>My Services</h2>
            <p>Comprehensive development solutions tailored to your needs</p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`service-card ${visibleServices.includes(service.id) ? 'animate-in' : ''}`}
                data-service-id={service.id}
                style={{ '--delay': `${index * 0.1}s`, '--accent-color': service.color } as React.CSSProperties}
              >
                <div className="service-card-inner">
                  <div className="service-icon">
                    <i className={`fa ${service.icon}`}></i>
                  </div>
                  <div className="service-content">
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                    <ul className="service-features">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>
                          <i className="fa fa-check"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="service-overlay">
                    <div className="overlay-content">
                      <h5>Get Started</h5>
                      <p>Let&apos;s discuss your project requirements</p>
                      <button className="btn service-btn">
                        <i className="fa fa-arrow-right"></i>
                        Contact Me
                      </button>
                    </div>
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

export default Service;
