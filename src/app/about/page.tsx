// import type { NextPage } from "next";

// const About: NextPage = () => {
//   return (
//     <main>
//       <section className="about section" id="about">
//         <div className="container">
//           <div className="row">
//             <div className="section-title padd-15">
//               <h2>About Me</h2>
//             </div>
//           </div>
//           <div className="row">
//             <div className="about-content padd-15">
//               <div className="row">
//                 <div className="about-text padd-15">
//                   <h2>
//                     I am Umar Farooq a <span>FullStack Developer</span>
//                   </h2>
//                   <p>
//                     Hi! My name is Muhammad Umar Farooq. I am a FullStack
//                     developer, and I am very passionate and dedicated to my
//                     work. With 1 years experience as a Website and Mobile
//                     Developer, I have acquired the skills and knowledge
//                     necessary to make your project a success. I enjoy every step
//                     of the design process, from discussion and collaboration.
//                   </p>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="personal-info padd-15">
//                   <div className="row">
//                     <div className="info-item padd-15">
//                       <p>
//                         Website : <span>www.urfolio.vercel.app</span>
//                       </p>
//                     </div>
//                     <div className="info-item padd-15">
//                       <p>
//                         Email : <span>umerfarooqamjad2000@gmail.com</span>
//                       </p>
//                     </div>
//                     <div className="info-item padd-15">
//                       <p>
//                         Degree : <span>CS</span>
//                       </p>
//                     </div>
//                     <div className="info-item padd-15">
//                       <p>
//                         Phone : <span>+92 313 6304133</span>
//                       </p>
//                     </div>
//                     <div className="info-item padd-15">
//                       <p>
//                         City : <span>Lahore</span>
//                       </p>
//                     </div>
//                     <div className="info-item padd-15">
//                       <p>
//                         Freelance : <span>Available</span>
//                       </p>
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="buttons padd-15">
//                       <a
//                         href="/assets/docs/resume.pdf"
//                         target="_blank"
//                         className="btn"
//                       >
//                         Download CV
//                       </a>
//                       <a
//                         href="#contact"
//                         data-section-index={0}
//                         className="btn hire-me"
//                       >
//                         Hire Me
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="skills padd-15">
//                   <div className="row">
//                     <div className="skill-item padd-15">
//                       <h5>ReactJS</h5>
//                       <div className="progress">
//                         <div className="progress-in" style={{ width: "80%" }} />
//                         <div className="skill-percent">80%</div>
//                       </div>
//                     </div>
//                     <div className="skill-item padd-15">
//                       <h5>NextJS</h5>
//                       <div className="progress">
//                         <div className="progress-in" style={{ width: "70%" }} />
//                         <div className="skill-percent">70%</div>
//                       </div>
//                     </div>
//                     <div className="skill-item padd-15">
//                       <h5>Javascript</h5>
//                       <div className="progress">
//                         <div className="progress-in" style={{ width: "80%" }} />
//                         <div className="skill-percent">80%</div>
//                       </div>
//                     </div>
//                     <div className="skill-item padd-15">
//                       <h5>Flutter</h5>
//                       <div className="progress">
//                         <div className="progress-in" style={{ width: "70%" }} />
//                         <div className="skill-percent">70%</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="education padd-15">
//                   <h3 className="title">Education</h3>
//                   <div className="row">
//                     <div className="timeline-box padd-15">
//                       <div className="timeline shadow-dark">
//                         {/* Timeline Item */}
//                         <div className="timeline-item">
//                           <div className="circle-dot" />
//                           <h6 className="timeline-date">
//                             <i className="fa fa-calendar" /> 2020 to 2024
//                           </h6>
//                           <h4 className="timeline-title">
//                             Bachelor of Science in Computer Science (BSCS)
//                           </h4>
//                           <p className="timeline-text">
//                             Graduated from the University of Management and
//                             Technology, Lahore with a CGPA of 3.40.
//                           </p>
//                         </div>
//                         {/* Timeline Item end */}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="experience padd-15">
//                   <h3 className="title">Experience</h3>
//                   <div className="row">
//                     <div className="timeline-box padd-15">
//                       <div className="timeline shadow-dark">
//                         {/* Timeline Item */}
//                         <div className="timeline-item">
//                           <div className="circle-dot" />
//                           <h6 className="timeline-date">
//                             <i className="fa fa-calendar" /> March 2024 to
//                             Present
//                           </h6>
//                           <h4 className="timeline-title">
//                             Mobile App Developer at UMT Connected
//                           </h4>
//                           <p className="timeline-text">
//                             Developing user engagement features and enhancements
//                             for liveX.tech using Next.js for frontend
//                             development. Leading Flutter development efforts for
//                             the liveX.tech mobile application. Collaborating
//                             with cross-functional teams to ensure smooth
//                             integration between web and mobile platforms,
//                             optimizing user experience and functionality.
//                           </p>
//                         </div>
//                         {/* Timeline Item end */}
//                         {/* Timeline Item */}
//                         <div className="timeline-item">
//                           <div className="circle-dot" />
//                           <h6 className="timeline-date">
//                             <i className="fa fa-calendar" /> November 2023 to
//                             February 2024
//                           </h6>
//                           <h4 className="timeline-title">
//                             Full Stack Developer at TripDeal.pk
//                           </h4>
//                           <p className="timeline-text">
//                             Spearheaded the transition of Trip Deal's website
//                             from WordPress to a MERN stack (MongoDB, Express.js,
//                             React.js, Node.js) architecture to enhance
//                             performance and scalability. Utilized Next.js for
//                             frontend development, ensuring a responsive and
//                             user-friendly interface. Developed server-side
//                             components and APIs with Express.js to support
//                             dynamic content and data management. Collaborated
//                             closely with a team to integrate new features and
//                             enhancements, optimizing user interactions and data
//                             flow.
//                           </p>
//                         </div>
//                         {/* Timeline Item end */}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default About;




import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Umar Farooq, a <span>FullStack Developer</span>
                  </h2>
                  <p>
                    Hi! My name is Muhammad Umar Farooq. I am a FullStack
                    developer, and I am very passionate and dedicated to my
                    work. With 1 year's experience as a Website and Mobile
                    Developer, I have acquired the skills and knowledge
                    necessary to make your project a success. I enjoy every step
                    of the design process, from discussion and collaboration.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website: <span>www.urfolio.vercel.app</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email: <span>umerfarooqamjad2000@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree: <span>CS</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone: <span>+92 313 6304133</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City: <span>Lahore</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance: <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/assets/docs/resume.pdf"
                        target="_blank"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <a
                        href="#contact"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>ReactJS</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>NextJS</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Javascript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Flutter</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2020 to 2024
                          </h6>
                          <h4 className="timeline-title">
                            Bachelor of Science in Computer Science (BSCS)
                          </h4>
                          <p className="timeline-text">
                            Graduated from the University of Management and
                            Technology, Lahore with a CGPA of 3.40.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> March 2024 to
                            Present
                          </h6>
                          <h4 className="timeline-title">
                            Mobile App Developer at UMT Connected
                          </h4>
                          <p className="timeline-text">
                            Developing user engagement features and enhancements
                            for liveX.tech using Next.js for frontend
                            development. Leading Flutter development efforts for
                            the liveX.tech mobile application. Collaborating
                            with cross-functional teams to ensure smooth
                            integration between web and mobile platforms,
                            optimizing user experience and functionality.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> November 2023 to
                            February 2024
                          </h6>
                          <h4 className="timeline-title">
                            Full Stack Developer at TripDeal.pk
                          </h4>
                          <p className="timeline-text">
                            Spearheaded the transition of Trip Deal's website
                            from WordPress to a MERN stack (MongoDB, Express.js,
                            React.js, Node.js) architecture to enhance
                            performance and scalability. Utilized Next.js for
                            frontend development, ensuring a responsive and
                            user-friendly interface. Developed server-side
                            components and APIs with Express.js to support
                            dynamic content and data management. Collaborated
                            closely with a team to integrate new features and
                            enhancements, optimizing user interactions and data
                            flow.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
