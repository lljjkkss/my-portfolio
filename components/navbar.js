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
          top: -100px;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: top 0.5s ease-in-out;
          /* ĐÃ BỎ VIỀN VÀ ĐỔ BÓNG CỨNG */
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

        .nav-links {
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
          background: none;
        }
        
        .active {
          border-bottom: 2px solid var(--light);
        }

        @media (max-width: 768px) {
            nav {
                padding: 0.5rem 1rem;
            }
            .nav-links {
                gap: 1rem;
            }
            .nav-link {
                font-size: 1.5rem;
                padding: 0.3rem 0.6rem;
            }
        }
      </style>
      <nav>
        <div class="nav-container">
          <a href="index.html" class="logo">TUAN NGHIA</a>
          <div class="nav-links">
            <a href="#about" class="nav-link">About</a>
            <a href="#skills" class="nav-link">Skills</a>
            <a href="#contact" class="nav-link">Contact</a>
            <a href="#approach" class="nav-link">Approach</a>
          </div>
        </div>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);