'use client';

import type { NextPage } from "next";
import { useState } from "react";

const Contact: NextPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main>
      <section className="contact section" id="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact Me</h2>
            <p>Let&apos;s discuss your next project and bring your ideas to life</p>
          </div>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="icon">
                  <i className="fa fa-map-marker" />
                </div>
                <div className="info-content">
                  <h4>Address</h4>
                  <p>Johar Town, Lahore, Pakistan</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="icon">
                  <i className="fa fa-phone" />
                </div>
                <div className="info-content">
                  <h4>Phone</h4>
                  <p>+92 313 6304133</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="icon">
                  <i className="fa fa-envelope" />
                </div>
                <div className="info-content">
                  <h4>Email</h4>
                  <p>umerfarooqamjad2000@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="icon">
                  <i className="fa fa-globe" />
                </div>
                <div className="info-content">
                  <h4>Website</h4>
                  <p>https://portfolio-uf.vercel.app/</p>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Send Me a Message</h3>
                <p>I&apos;d love to hear about your project. Send me a message and I&apos;ll get back to you as soon as possible.</p>
              </div>
              
              <div className="form-grid">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group full-width">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject *"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group full-width">
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Your Message *"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-footer">
                <button type="submit" className="btn btn-primary">
                  <i className="fa fa-paper-plane"></i>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
