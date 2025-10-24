'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "Full Stack Developer",
    "Mobile App Developer", 
    "React.js Expert",
    "Flutter Developer",
    "Next.js Specialist"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <section className="home section" id="home">
        <div className="floating-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        
        <div className="container">
          <div className="intro">
            <div className="profile-frame">
              <div className="profile-frame-inner">
                <Image
                  src="/imgs/alsiam.png"
                  alt="Umar Farooq"
                  width={200}
                  height={200}
                  priority
                />
              </div>
            </div>
            
            <h1>
              Hi, I'm <span className="name">Muhammad Umar Farooq</span>
            </h1>
            
            <div className="role-cycle">
              {roles[currentRole]}
            </div>
            
            <p>
              Passionate about creating seamless digital experiences through modern web and mobile technologies. 
              Specializing in React, Next.js, and Flutter development.
            </p>
            
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=100011387377617" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://github.com/umarfarooq036" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github" />
              </a>
              <a href="https://www.instagram.com/umarfaarukk/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/umar-farooq-1b35b6306/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
