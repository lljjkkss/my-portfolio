class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
            --primary: #f8c8c8;
            --secondary: #2d2d2d;
            --accent: #d93b3b;
            --light: #ffffff;
            --dark: #000000;
        }

        nav {
          background: linear-gradient(135deg, var(--accent) 0%, var(--dark) 100%);
          padding: 1rem 2rem;
          position: fixed;
          top: -200px;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: top 0.5s ease-in-out;
        }
        nav.visible {
          top: 0;
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .logo {
          font-family: 'Luckiest Guy', cursive;
          font-size: 2.2rem;
          font-weight: bold;
          color: var(--light);
          text-decoration: none;
          text-shadow: 2px 2px 0 var(--secondary);
          transition: transform 0.2s ease;
        }
        .logo:hover {
            transform: scale(1.05);
        }

        .nav-links-desktop {
          display: flex;
          gap: 2rem;
        }
        .nav-link {
          font-family: 'Amatic SC', cursive;
          font-size: 1.8rem;
          font-weight: bold;
          color: var(--light);
          text-decoration: none;
          padding: 0.3rem 0.8rem;
          transition: all 0.2s ease;
          border: 2px dashed transparent;
        }
        .nav-link:hover {
          color: #FFD700;
          border-color: #FFD700;
        }

        .nav-toggle {
          width: 30px;
          height: 24px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          position: fixed;
          top: 1rem;
          right: 2rem;
          z-index: 1002;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.5s ease-in-out;
        }
        
        :host(.nav-is-visible) .nav-toggle {
            opacity: 1;
            visibility: visible;
        }

        .hamburger-bar {
          display: block;
          width: 100%;
          height: 3px;
          background-color: var(--light);
          border-radius: 3px;
          position: absolute;
          left: 0;
          transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
        }
        .hamburger-bar:nth-child(1) { top: 0; }
        .hamburger-bar:nth-child(2) { top: 10px; }
        .hamburger-bar:nth-child(3) { top: 20px; }

        :host(.nav-open) .hamburger-bar:nth-child(1) { transform: rotate(45deg) translate(7px, 7px); }
        :host(.nav-open) .hamburger-bar:nth-child(2) { opacity: 0; transform: scale(0); }
        :host(.nav-open) .hamburger-bar:nth-child(3) { transform: rotate(-45deg) translate(6px, -6px); }

        .nav-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(45, 45, 45, 0.95);
          backdrop-filter: blur(5px);
          display: flex;
          justify-content: center;
          align-items: center;
          transform: translateX(100%);
          opacity: 0;
          visibility: hidden;
          transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
          z-index: 1001;
        }
        :host(.nav-open) .nav-overlay {
          transform: translateX(0);
          opacity: 1;
          visibility: visible;
        }
        .nav-overlay-content {
          display: flex;
          flex-direction: column;
          text-align: center;
          gap: 2rem;
        }
        .overlay-link {
          font-family: 'Amatic SC', cursive;
          font-size: 3.5rem;
          font-weight: bold;
          color: var(--light);
          text-decoration: none;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.3s ease 0.3s;
        }
        .overlay-link:hover {
          color: #FFD700;
          transform: scale(1.1);
        }
        :host(.nav-open) .overlay-link { opacity: 1; transform: translateY(0); }
        :host(.nav-open) .overlay-link:nth-child(2) { transition-delay: 0.4s; }
        :host(.nav-open) .overlay-link:nth-child(3) { transition-delay: 0.5s; }
        :host(.nav-open) .overlay-link:nth-child(4) { transition-delay: 0.6s; }

        .nav-links-desktop { display: none; }
        .nav-toggle { display: block; }

        @media (min-width: 769px) {
          .nav-links-desktop { display: flex; }
          .nav-toggle { display: none; }
          .nav-overlay { display: none; }
        }
        
        @media (max-width: 768px) {
            nav {
                padding: 1rem 1.5rem;
            }
            .nav-toggle {
                right: 1.5rem;
                top: 1rem;
            }
        }

      </style>

      <nav>
        <div class="nav-container">
          <a href="index.html" class="logo">TUAN NGHIA</a>
          
          <div class="nav-links-desktop">
            <a href="#about" class="nav-link">About</a>
            <a href="#skills" class="nav-link">Skills</a>
            <a href="#approach" class="nav-link">Approach</a>
            <a href="#contact" class="nav-link">Contact</a>
          </div>
        </div>
      </nav>
      
      <button class="nav-toggle" aria-label="Toggle navigation">
        <span class="hamburger-bar"></span>
        <span class="hamburger-bar"></span>
        <span class="hamburger-bar"></span>
      </button>

      <div class="nav-overlay">
        <div class="nav-overlay-content">
          <a href="#about" class="overlay-link">About</a>
          <a href="#skills" class="overlay-link">Skills</a>
          <a href="#approach" class="overlay-link">Approach</a>
          <a href="#contact" class="overlay-link">Contact</a>
        </div>
      </div>
    `;

    const toggleBtn = this.shadowRoot.querySelector('.nav-toggle');
    const links = this.shadowRoot.querySelectorAll('.overlay-link');
    const nav = this.shadowRoot.querySelector('nav');
    
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isVisible = nav.classList.contains('visible');
          if (isVisible) {
            this.classList.add('nav-is-visible');
          } else {
            this.classList.remove('nav-is-visible');
          }
        }
      });
    });
    observer.observe(nav, { attributes: true });


    const toggleMenu = () => {
      this.classList.toggle('nav-open');
    };

    toggleBtn.addEventListener('click', toggleMenu);
    links.forEach(link => {
      link.addEventListener('click', toggleMenu);
    });
  }
}
customElements.define('custom-navbar', CustomNavbar);