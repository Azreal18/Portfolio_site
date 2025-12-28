import './style.css'

// Navigation
const createNavigation = () => `
  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <a href="#home" class="nav-brand">Viraj Bhanushali</a>
      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul class="nav-menu" id="nav-menu">
        <li><a href="#home" class="nav-link">Home</a></li>
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#resume" class="nav-link">Resume</a></li>
        <li><a href="#projects" class="nav-link">Projects</a></li>
        <li><a href="#contact" class="nav-link">Contact</a></li>
      </ul>
    </div>
  </nav>
`

// Hero Section
const createHero = () => `
  <section id="home" class="hero">
    <div class="hero-background">
      <div class="gradient-overlay"></div>
      <div class="particles" id="particles"></div>
    </div>
    <div class="hero-content">
      <div class="hero-text">
        <p class="hero-greeting">Hello!</p>
        <h1 class="hero-title">I'm <span class="highlight">Viraj</span></h1>
        <div class="typing-container">
          <span id="typing-text" class="typing-text"></span>
          <span class="cursor">|</span>
        </div>
        <h2 class="hero-subtitle">Data Scientist</h2>
        <div class="hero-buttons">
          <a href="https://www.linkedin.com/in/viraj-bhanushali-3339201ab/" target="_blank" class="btn btn-primary">LinkedIn</a>
          <a href="https://github.com/Azreal18" target="_blank" class="btn btn-secondary">My Works</a>
        </div>
      </div>
      <div class="hero-image">
        <div class="image-wrapper">
          <img src="/backup/images/bg1.png" alt="Viraj Bhanushali" />
        </div>
      </div>
    </div>
    <a href="#about" class="scroll-down" aria-label="Scroll to about section">
      <span></span>
    </a>
  </section>
`

// About Section
const createAbout = () => `
  <section id="about" class="about">
    <div class="section-container">
      <div class="about-grid">
        <div class="about-image-wrapper">
          <div class="about-image-container">
            <img src="/backup/images/about-me.jpeg" alt="Viraj Bhanushali" class="about-image" />
            <div class="about-info-card">
              <div class="info-item">
                <span class="info-label">Name:</span>
                <span class="info-value">Viraj Bhanushali</span>
              </div>
              <div class="info-item">
                <span class="info-label">Job Role:</span>
                <span class="info-value">Data Scientist</span>
              </div>
              <div class="info-item">
                <span class="info-label">Experience:</span>
                <span class="info-value">2 Years 2 Months</span>
              </div>
              <div class="info-item">
                <span class="info-label">Address:</span>
                <span class="info-value">Mumbai, India</span>
              </div>
            </div>
            
            <div class="skills-card">
              <h3 class="skills-title">Skills</h3>
              ${[
    { name: 'SQL', value: 75 },
    { name: 'Python', value: 80 },
    { name: 'Data Visualization', value: 75 },
    { name: 'Statistical Analysis', value: 70 },
    { name: 'Machine Learning', value: 75 }
  ].map(skill => `
                <div class="skill-item">
                  <div class="skill-header">
                    <span class="skill-name">${skill.name}</span>
                    <span class="skill-percentage">${skill.value}%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-progress" data-progress="${skill.value}"></div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
        
        <div class="about-content">
          <h2 class="section-title">About Me</h2>
          <p class="about-description">
            As a dedicated Data Scientist, I specialize in cutting-edge natural language processing
            and computer vision technologies. My expertise lies in fine-tuning GPT-2 models,
            optimizing large language models (LLMs), and developing innovative projects using
            CLIP and Stable Diffusion.
          </p>
          
          <div class="tech-stack">
            <div class="tech-item">
              <strong>Programming Languages:</strong> Python & SQL
            </div>
            <div class="tech-item">
              <strong>Deep Learning Frameworks:</strong> PyTorch, TensorFlow, Keras
            </div>
            <div class="tech-item">
              <strong>AI Libraries & Tools:</strong> NumPy, SciPy, Pandas, scikit-learn, Hugging Face, Transformers, OpenCV
            </div>
            <div class="tech-item">
              <strong>Version Control:</strong> Git, GitHub
            </div>
            <div class="tech-item">
              <strong>AI Concepts:</strong> Computer Vision, Natural Language Processing, Generative AI, Supervised & Unsupervised Learning
            </div>
            <div class="tech-item">
              <strong>Development Environments:</strong> Jupyter Notebook, Visual Studio Code
            </div>
            <div class="tech-item">
              <strong>Interest:</strong> Traveling, Cycling, Teaching
            </div>
          </div>
          
          <div class="counter">
            <div class="counter-number" data-target="30">0</div>
            <div class="counter-label">+ Projects Completed</div>
          </div>
          
          <a href="https://www.linkedin.com/in/viraj-bhanushali-3339201ab/" target="_blank" class="btn btn-primary">LinkedIn Profile</a>
        </div>
      </div>
    </div>
  </section>
`

// Resume Section
const createResume = () => `
  <section id="resume" class="resume">
    <div class="section-container">
      <h2 class="section-title centered">Resume</h2>
      <p class="section-description">
        Seasoned Senior Data Science with 2+ years of experience driving business strategies through
        data-driven insights. Proven expertise in data science, statistical analysis, machine learning
        algorithms and project management.
      </p>
      
      <div class="resume-section">
        <h3 class="resume-heading">Experience</h3>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-date">Aug 2022 - Dec 2024</div>
            <div class="timeline-content">
              <h4>Data Scientist</h4>
              <p class="company">Arcadis</p>
              <p class="description">
                Arcadis is the world's leading company delivering sustainable design, engineering, and consultancy solutions for natural and built assets.
              </p>
              <ul class="achievements">
                <li>Created tools utilizing Large Language Models (LLMs) for data extraction and analysis</li>
                <li>Developed a high-performance data extraction application using RAG techniques</li>
                <li>Led a digitization project that converted over 2 million records</li>
                <li>Developed a Python-based OCR tool for chemical data processing</li>
                <li>Co-developed an enhanced web-based solution using Plotly-Dash</li>
                <li>Built an OCR table extraction system</li>
                <li>Implemented automation and NLP solutions using Python</li>
                <li>Contributed to neural network model development for predictive modeling</li>
              </ul>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-date">2019 - 2020</div>
            <div class="timeline-content">
              <h4>WordPress Developer</h4>
              <p class="company">Canvasist</p>
              <p class="description">
                Canvasist was an e-commerce website that sells customised products like customised portraits, posters, frames, etc.
              </p>
              <ul class="achievements">
                <li>Developed and maintained WordPress website after transferring data from Shopify</li>
                <li>Implemented Python-based automations to streamline data organization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div class="resume-section">
        <h3 class="resume-heading">Education</h3>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-date">2019 - 2022</div>
            <div class="timeline-content">
              <h4>Bachelor of Science in Information Technology</h4>
              <p class="company">Somaiya College (Mumbai University)</p>
              <p class="description">Grade: First class distinction (8.45/10)</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="resume-download">
        <a href="https://drive.google.com/file/d/1SD7c6_4RgjOWKpNkUZNCy8R9yf3yjMtz/view?usp=sharing" target="_blank" class="btn btn-primary btn-large">Download CV</a>
      </div>
    </div>
  </section>
`

// Projects Section
const createProjects = () => `
  <section id="projects" class="projects">
    <div class="section-container">
      <h2 class="section-title centered">Projects</h2>
      <p class="section-description">
        Below are sample Computer Vision and GenAI projects listed.
      </p>
      
      <div class="projects-grid">
        <div class="project-card">
          <div class="project-image">
            <img src="/backup/images/proj_1.jpeg" alt="GPT-2 Chatbot Project" />
            <div class="project-overlay">
              <a href="https://github.com/Azreal18/TSAI-ERAv2-S21" target="_blank" class="project-link">View on GitHub</a>
            </div>
          </div>
          <div class="project-content">
            <h3>Building and Deploying a Custom GPT-2 Chatbot</h3>
            <p>
              This project contains a PyTorch implementation of a GPT-2 model based on tutorials by Andrew Karpathy.
              The model includes a CausalSelfAttention module and is deployed using Gradio.
            </p>
            <div class="project-tags">
              <span class="tag">PyTorch</span>
              <span class="tag">GPT-2</span>
              <span class="tag">NLP</span>
            </div>
            <a href="https://huggingface.co/spaces/Azreal18/GPT2" target="_blank" class="btn btn-secondary btn-small">Live Demo</a>
          </div>
        </div>
        
        <div class="project-card">
          <div class="project-image">
            <img src="/backup/images/proj_2.jpeg" alt="Hindi Tokenizer Project" />
            <div class="project-overlay">
              <a href="https://github.com/Azreal18/TSAI-ERAv2-S20" target="_blank" class="project-link">View on GitHub</a>
            </div>
          </div>
          <div class="project-content">
            <h3>Byte Pair Encoding for Hindi Text</h3>
            <p>
              This project demonstrates the training of Byte Pair Encoding (BPE) on Hindi text, a subword tokenization
              method that reduces vocabulary size while preserving semantic content.
            </p>
            <div class="project-tags">
              <span class="tag">BPE</span>
              <span class="tag">Hindi</span>
              <span class="tag">Tokenization</span>
            </div>
            <a href="https://huggingface.co/spaces/Azreal18/Hindi-Tokenizer" target="_blank" class="btn btn-secondary btn-small">Live Demo</a>
          </div>
        </div>
      </div>
      
      <div class="github-cta">
        <h3>More projects on <span class="highlight">GitHub</span></h3>
        <p>I love to build Neural networks & playing with LLM & Stable diffusion</p>
        <a href="https://github.com/Azreal18" target="_blank" class="btn btn-primary">Visit GitHub</a>
      </div>
    </div>
  </section>
`

// Contact Section
const createContact = () => `
  <section id="contact" class="contact">
    <div class="section-container">
      <h2 class="section-title centered">Contact Me</h2>
      <p class="section-description">
        Below are the details to reach out to me!
      </p>
      
      <div class="contact-grid">
        <div class="contact-card">
          <div class="contact-icon">📍</div>
          <h3>Address</h3>
          <p>Mumbai, India</p>
        </div>
        
        <div class="contact-card">
          <div class="contact-icon">📱</div>
          <h3>Contact Number</h3>
          <p><a href="tel:+917977595227">+91 7977595227</a></p>
        </div>
        
        <div class="contact-card">
          <div class="contact-icon">✉️</div>
          <h3>Email Address</h3>
          <p><a href="mailto:bhanushaliviraaj@gmail.com">bhanushaliviraaj@gmail.com</a></p>
        </div>
        
        <div class="contact-card">
          <div class="contact-icon">📄</div>
          <h3>Download Resume</h3>
          <p><a href="https://drive.google.com/file/d/1SD7c6_4RgjOWKpNkUZNCy8R9yf3yjMtz/view?usp=drive_link" target="_blank">Resume Link</a></p>
        </div>
      </div>
      
      <div class="contact-cta">
        <h3>Have a <span class="highlight">Question?</span></h3>
        <button class="btn btn-primary btn-large" id="contact-modal-btn">Click Here</button>
      </div>
      
      <div class="social-links">
        <p>Find me on</p>
        <a href="https://www.linkedin.com/in/viraj-bhanushali-3339201ab/" target="_blank" class="social-link" aria-label="LinkedIn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
`

// Modal
const createModal = () => `
  <div id="contact-modal" class="modal">
    <div class="modal-content">
      <button class="modal-close" id="modal-close" aria-label="Close modal">&times;</button>
      <h3>Get in Touch</h3>
      <p>Email me at: <a href="mailto:bhanushaliviraaj@gmail.com">bhanushaliviraaj@gmail.com</a></p>
      <p class="modal-note">(Click on the email to send a message)</p>
    </div>
  </div>
`

// Initialize the app
document.querySelector('#app').innerHTML = `
  ${createNavigation()}
  ${createHero()}
  ${createAbout()}
  ${createResume()}
  ${createProjects()}
  ${createContact()}
  ${createModal()}
`

// Initialize interactive features
initializeApp()

function initializeApp() {
  // Typing animation
  const typingTexts = ['Data Scientist  ', 'Athlete ', '   ']
  let textIndex = 0
  let charIndex = 0
  const typingElement = document.getElementById('typing-text')

  function type() {
    if (charIndex < typingTexts[textIndex].length) {
      typingElement.textContent += typingTexts[textIndex].charAt(charIndex)
      charIndex++
      setTimeout(type, 200)
    } else {
      setTimeout(erase, 2000)
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingElement.textContent = typingTexts[textIndex].substring(0, charIndex - 1)
      charIndex--
      setTimeout(erase, 100)
    } else {
      textIndex = (textIndex + 1) % typingTexts.length
      setTimeout(type, 500)
    }
  }

  type()

  // Mobile navigation toggle
  const navToggle = document.getElementById('nav-toggle')
  const navMenu = document.getElementById('nav-menu')

  navToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('active')
    navToggle.classList.toggle('active')
  })

  // Close menu when clicking on links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu?.classList.remove('active')
      navToggle?.classList.remove('active')
    })
  })

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar')
    if (window.scrollY > 100) {
      navbar?.classList.add('scrolled')
    } else {
      navbar?.classList.remove('scrolled')
    }
  })

  // Skill bars animation
  const animateSkills = () => {
    const skillBars = document.querySelectorAll('.skill-progress')
    skillBars.forEach(bar => {
      const progress = bar.getAttribute('data-progress')
      bar.style.width = `${progress}%`
    })
  }

  // Counter animation
  const animateCounters = () => {
    const counters = document.querySelectorAll('.counter-number')
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'))
      let current = 0
      const increment = target / 50

      const updateCounter = () => {
        if (current < target) {
          current += increment
          counter.textContent = Math.ceil(current)
          setTimeout(updateCounter, 40)
        } else {
          counter.textContent = target
        }
      }

      updateCounter()
    })
  }

  // Intersection Observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')

        if (entry.target.classList.contains('skills-card')) {
          animateSkills()
        }
        if (entry.target.classList.contains('counter')) {
          animateCounters()
        }
      }
    })
  }, { threshold: 0.2 })

  document.querySelectorAll('.about-image-wrapper, .about-content, .timeline-item, .project-card, .contact-card, .skills-card, .counter').forEach(el => {
    observer.observe(el)
  })

  // Modal functionality
  const modal = document.getElementById('contact-modal')
  const modalBtn = document.getElementById('contact-modal-btn')
  const modalClose = document.getElementById('modal-close')

  modalBtn?.addEventListener('click', () => {
    modal?.classList.add('active')
  })

  modalClose?.addEventListener('click', () => {
    modal?.classList.remove('active')
  })

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal?.classList.remove('active')
    }
  })

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  })

  // Particles effect
  createParticles()
}

function createParticles() {
  const container = document.getElementById('particles')
  if (!container) return

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div')
    particle.className = 'particle'
    particle.style.left = `${Math.random() * 100}%`
    particle.style.top = `${Math.random() * 100}%`
    particle.style.animationDelay = `${Math.random() * 3}s`
    particle.style.animationDuration = `${3 + Math.random() * 4}s`
    container.appendChild(particle)
  }
}
