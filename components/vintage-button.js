class VintageButton extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        button {
          font-family: 'Amatic SC', cursive;
          font-size: 1.5rem;
          font-weight: bold;
          padding: 0.5rem 1.5rem;
          background: var(--accent);
          color: var(--light);
          border: 2px dashed var(--light);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        button:hover {
          background: var(--highlight);
          transform: translateY(-2px) rotate(1deg);
          box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
        }
        button::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -60%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
          transform: rotate(30deg);
          opacity: 0;
          transition: opacity 0.5s, transform 0.5s;
        }
        button:hover::after {
          opacity: 0.4;
          transform: rotate(30deg) translate(20%, 20%);
        }
      </style>
      <button>
        <slot></slot>
      </button>
    `;
  }
}
customElements.define('vintage-button', VintageButton);