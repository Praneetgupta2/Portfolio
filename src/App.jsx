import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import AnimatedCard from './components/AnimatedCard';
import './App.css';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/Praneetgupta2',
    image: 'shoes.png'
  },
  {
    title: 'ChatBot Application', 
    description: 'A Chatbot application using the ChatGPT API is an AI-powered conversational tool that understands natural language and provides human-like responses in real time.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    liveUrl: 'https://example-tasks.com',
    githubUrl: 'https://github.com/Praneetgupta2',
    image: 'chat.jpg'
  },
  
  {
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website showcasing my skills and projects with smooth animations and professional design.',
    technologies: ['React', 'Vite', 'CSS3', 'Responsive Design'],
    liveUrl: 'https://example-portfolio.com',
    githubUrl: 'https://github.com/Praneetgupta2',
    image: 'portfolio.png'
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="logo.png" className="logo-image" alt="Logo" />
            <h1 className="dev">DEVELOPER</h1>
          </div>
          <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" className="nav-link" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={closeMenu}>About</a></li>
            <li><a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a></li>
            <li><a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <HeroSection />
      
      <section id="about" className="section">
        <div className="container">
          <h2 className="heading-2">About Me</h2>
          <div className="grid grid-cols-2 gap-lg">
            <div>
              <h3 className="heading-3">Professional Background</h3>
              <p className="text-base text-muted">
                I’m an aspiring full-stack developer passionate about building creative, 
                interactive digital experiences. Skilled in React, Node.js, Python, and modern web technologies,
                 I focus on clean code, intuitive design, and smooth user interactions, while exploring
                  AI-powered solutions and innovative ideas.
              </p>
              
              <h3 className="heading-3">Skills & Expertise</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4 className="heading-4">Frontend</h4>
                  <div className="skill-list">
                    <span className="skill-tag">React.js</span>
                    <span className="skill-tag">Html5</span>
                    <span className="skill-tag">CSS3</span>
                    <span className="skill-tag">Tailwind CSS</span>
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">Next.js</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4 className="heading-4">Backend</h4>
                  <div className="skill-list">
                    <span className="skill-tag">Node.js</span>
                    <span className="skill-tag">C</span>
                    <span className="skill-tag">C++</span>
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">Java</span>
                    
                    <span className="skill-tag">MongoDB</span>
                    <span className="skill-tag">SQL</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4 className="heading-4">Tools & Others</h4>
                  <div className="skill-list">
                    <span className="skill-tag">Git</span>
                    <span className="skill-tag">Boult</span>
                    <span className="skill-tag">Cursor</span>
                    <span className="skill-tag">Dora</span>
                    
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="heading-3">Experience</h3>
              <div className="experience-timeline">
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="heading-4">Bottle.Wrap(Startup)</h4>
                    <p className="text-muted">Co-Founder • 2025 - Present</p>
                    <p className="text-base">Bottle.Wrap offers stylish custom water bottles with logos and QR codes for cafés and restaurants.
</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="heading-4">TheIndianConclave</h4>
                    <p className="text-muted">Marketing & Social media • 2023- 2024</p>
                    <p className="text-base">I was a Marketing & Social Media Intern at Indian Conclave,
                       where I created engaging content and innovative ideas to drive audience reach and brand impact.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="heading-4">Social Media Marketing</h4>
                    <p className="text-muted"> Creative & Social • 2025</p>
                    <p className="text-base">Created and scheduled Instagram content (posts, reels, stories) to boost engagement and brand visibility through targeted strategies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <h2 className="heading-2">Featured Projects</h2>
          <p className="text-base text-muted text-center mb-8">
            Here are some of my recent projects that showcase my skills and expertise
          </p>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <AnimatedCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2 className="heading-2">Let's Work Together</h2>
          <p className="text-base text-muted text-center mb-8">
            Ready to bring your ideas to life? Let's discuss your project
          </p>
          <div className="grid grid-cols-2 gap-lg">
            <div>
              <h3 className="heading-3">Get In Touch</h3>
             
              <form className="contact-form"
                action="https://formspree.io/f/mblajrqy"
                method="POST">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" >Send Message</button>
              </form>
            </div>
            <div>
              <h3 className="heading-3">Contact Information</h3>
              <div className="contact-info">
                <p><strong>Email:</strong> guptapraneet48@gmail.com</p>
                <p><strong>Location:</strong> Hyderabad,India</p>
                <p><strong>Available for:</strong> Full-time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2024 Praneet Gupta</p>
            <div className="footer-links">
              <a href="https://github.com/Praneetgupta2" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/praneet-gupta-823609285/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:guptapraneet48@gmail.com">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
