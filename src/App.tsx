import { useState } from 'react'
import './App.css'

interface Project {
  id: number
  title: string
  category: string
  description: string
  videoUrl: string
}

function App() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formMessage, setFormMessage] = useState('')

  const projects: Project[] = [
    {
      id: 1,
      title: 'Corporate Branding',
      category: 'commercial',
      description: 'High-impact corporate video production',
      videoUrl: 'https://vimeo.com/showcase/10108831'
    },
    {
      id: 2,
      title: 'Music Video Production',
      category: 'music',
      description: 'Creative music video editing and color grading',
      videoUrl: 'https://vimeo.com/showcase/10108831'
    },
    {
      id: 3,
      title: 'Documentary Series',
      category: 'documentary',
      description: 'Long-form documentary editing and storytelling',
      videoUrl: 'https://vimeo.com/showcase/10108831'
    },
    {
      id: 4,
      title: 'Event Coverage',
      category: 'events',
      description: 'Professional event videography and editing',
      videoUrl: 'https://vimeo.com/showcase/10108831'
    },
    {
      id: 5,
      title: 'Cinematic Reels',
      category: 'commercial',
      description: 'Cinematic product and promotional videos',
      videoUrl: 'https://vimeo.com/showcase/10108831'
    },
    {
      id: 6,
      title: 'Social Media Content',
      category: 'social',
      description: 'Engaging short-form content for social platforms',
      videoUrl: 'https://vimeo.com/showcase/10108831'
    }
  ]

  const categories = ['all', 'commercial', 'music', 'documentary', 'events', 'social']

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('loading')
    
    const formData = new FormData(e.currentTarget)
    
    try {
      const response = await fetch('https://formspree.io/f/xyzpqrst', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setFormStatus('success')
        setFormMessage('Thank you! Your message has been sent successfully.')
        ;(e.target as HTMLFormElement).reset()
        setTimeout(() => {
          setFormStatus('idle')
          setFormMessage('')
        }, 5000)
      } else {
        setFormStatus('error')
        setFormMessage('Something went wrong. Please try again.')
      }
    } catch (error) {
      setFormStatus('error')
      setFormMessage('Error sending message. Please try again.')
    }
  }

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Ambady H Lal</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Film & Video Editor</h1>
          <p className="hero-subtitle">Crafting compelling visual stories through precise editing and creative direction</p>
          <a href="#work" className="cta-button">View My Work</a>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="portfolio-section">
        <div className="container">
          <h2 className="section-title">Portfolio</h2>
          
          {/* Category Filter */}
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <div className="placeholder-video">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I am a passionate film and video editor with expertise in crafting compelling visual narratives. 
                With a keen eye for detail and a deep understanding of pacing, color grading, and sound design, 
                I transform raw footage into polished, professional productions.
              </p>
              <p>
                My work spans across commercials, music videos, documentaries, and corporate content. 
                I specialize in creating engaging stories that resonate with audiences and achieve client objectives.
              </p>
              <p>
                Whether you need a quick social media clip or a full-length documentary, I bring creativity, 
                technical expertise, and professionalism to every project.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p className="contact-text">Ready to bring your vision to life? Let's collaborate!</p>
            <div className="contact-methods">
              <div className="contact-item">
                <h3>Phone</h3>
                <a href="tel:+916238883591">+91 6238883591</a>
              </div>
              <div className="contact-item">
                <h3>Email</h3>
                <a href="mailto:moodymodeler@gmail.com">moodymodeler@gmail.com</a>
              </div>
            </div>
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  required 
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  required 
                />
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows={5} 
                  required
                ></textarea>
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={formStatus === 'loading'}
                >
                  {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
                
                {formStatus === 'success' && (
                  <div className="form-message success">
                    ✓ {formMessage}
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="form-message error">
                    ✗ {formMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Ambady H Lal. All rights reserved.</p>
          <div className="social-links">
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Vimeo">Vimeo</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
