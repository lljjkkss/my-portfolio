class VintageCartoon extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 150px;
          cursor: crosshair;
        }
        svg {
          width: 100%;
          height: 100%;
        }
        .face-bg {
          fill: #FFFBEA;
          stroke: #2d2d2d;
          stroke-width: 4;
        }
        .eye {
          fill: #2d2d2d;
        }
        .mouth {
          fill: none;
          stroke: #2d2d2d;
          stroke-width: 4;
          stroke-linecap: round;
        }
      </style>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="80" height="80" rx="15" class="face-bg"/>
        
        <g id="eyes-group">
          <circle class="eye" id="eye-left" cx="35" cy="40" r="8"/>
          <circle class="eye" id="eye-right" cx="65" cy="40" r="8"/>
        </g>

        <path class="mouth" d="M 30 70 Q 50 80, 70 70" />
      </svg>
    `;
  }
}
customElements.define('vintage-cartoon', VintageCartoon);