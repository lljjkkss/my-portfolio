class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
            --primary: #f8c8c8;
            --secondary: #2d2d2d;
            --accent: #d93b3b;
            --dark: #000000;
            --light: #ffffff;
        }

        footer {
          padding-top: 1rem;
          padding-bottom: 0.5rem; 
          text-align: center;
          background-color: var(--primary); 
          border-top: 4px dashed var(--accent); 
          
          position: fixed; 
          bottom: -200px;
          left: 0;
          right: 0;
          z-index: 999; 
          transition: bottom 0.8s cubic-bezier(0.19, 1, 0.22, 1);
        }
        
        :host(.visible) footer {
          bottom: 0;
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .contact-container {
            margin: 0.5rem auto 0.5rem; 
            text-align: center;
            font-family: 'Caveat', cursive;
            display: flex; 
            justify-content: center;
            gap: 3rem; 
            flex-wrap: wrap;
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 1.1rem;
        }
        .contact-item svg {
            width: 18px; 
            height: 18px;
            stroke: var(--secondary);
            stroke-width: 2;
        }
        
        .copyright {
            font-size: 0.9rem; 
            color: var(--secondary);
            margin-top: 0.5rem; 
            font-family: 'Caveat', cursive; 
        }
        
        .link-text {
            color: var(--secondary);
            text-decoration: none;
            transition: color 0.2s ease;
        }
        .link-text:hover {
            color: var(--accent);
            text-decoration: none;
        }
        
        @media (max-width: 600px) {
            .contact-container {
                flex-direction: column; 
                gap: 0.5rem;
            }
        }
      </style>
      
      <footer>
        <div class="footer-content">
          
          <div class="contact-container">
                <div class="contact-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <span >tuannghia11a1@gmail.com</span>
                </div>
                
                <div class="contact-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.8c0-1.3-.4-2.2-1.3-3.2 2.7-.4 5.5-1.3 5.5-6.2 0-1.3-.5-2.2-1.3-3 .2-.7.2-2.1 0-2.8-2.3 0-3.5 1.2-4.2 2.7-.8-.2-1.6-.3-2.4-.3s-1.6.1-2.4.3c-.7-1.5-1.9-2.7-4.2-2.7 0 .7 0 2.1 0 2.8-.8.8-1.3 1.7-1.3 3 0 4.9 2.8 5.8 5.5 6.2-.4.4-.7 1-.7 1.7v2.2"></path></svg>
                    <a href="https://github.com/lljjkkss" target="_blank" class="link-text">github.com/lljjkkss</a>
                </div>

          </div>
          
          <p class="copyright">&copy; ${new Date().getFullYear()} Tuan Nghia - Built with Passion, Code, and Vintage Style.</p>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);