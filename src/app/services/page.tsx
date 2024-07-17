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

import type { NextPage } from "next";

const Service: NextPage = () => {
  return (
    <>
      <section className="service section" id="services">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Our Services</h2>
            </div>
          </div>
          <div className="row">
            {/* Service Item 1: Mobile App Development */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-mobile" />
                </div>
                <h4>Mobile App Development</h4>
                <p>
                  Lead Flutter development efforts to create dynamic and
                  user-friendly mobile applications that enhance user engagement
                  and provide a seamless experience across platforms.
                </p>
              </div>
            </div>
            {/* Service Item 1 End */}
            {/* Service Item 2: Full Stack Development */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-server" />
                </div>
                <h4>Full Stack Development</h4>
                <p>
                  Transition your website to a modern MERN stack architecture.
                  Develop server-side components and APIs with Express.js and
                  design responsive frontend interfaces using Next.js.
                </p>
              </div>
            </div>
            {/* Service Item 2 End */}
            {/* Service Item 3: Frontend Development */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-desktop" />
                </div>
                <h4>Frontend Development</h4>
                <p>
                  Create stunning and responsive user interfaces using
                  JavaScript frameworks like React.js and Next.js, along with
                  HTML5 and CSS3 for optimal user experiences.
                </p>
              </div>
            </div>
            {/* Service Item 3 End */}
            {/* Service Item 4: Backend Development */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-database" />
                </div>
                <h4>Backend Development</h4>
                <p>
                  Develop robust backend systems with Node.js and Express.js,
                  utilizing MongoDB and Firebase Firestore for efficient data
                  storage and management.
                </p>
              </div>
            </div>
            {/* Service Item 4 End */}
            {/* Service Item 5: Web Development */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-code" />
                </div>
                <h4>Web Development</h4>
                <p>
                  Turn your digital ideas into reality with our web development
                  solutions. We specialize in crafting robust and dynamic
                  websites that are tailored to meet your specific business
                  needs and objectives.
                </p>
              </div>
            </div>
            {/* Service Item 5 End */}
            {/* Service Item 6: Authentication & Security */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-lock" />
                </div>
                <h4>Authentication & Security</h4>
                <p>
                  Implement secure authentication systems using Auth0 and
                  Firebase Authentication to protect user data and ensure secure
                  access to your applications.
                </p>
              </div>
            </div>
            {/* Service Item 6 End */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-wordpress" />
                </div>
                <h4>WordPress Development</h4>
                <p>
                  Harness the power of WordPress for your website. Our experts
                  will build a feature-rich and scalable WordPress site that
                  empowers you to manage content effortlessly and stay ahead in
                  the digital landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
