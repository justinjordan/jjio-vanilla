customElements.define('social-icons', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <a
        class="social-icon"
        href="https://www.linkedin.com/in/justintjordan/"
        target="_blank"
      >
        <i class="fab fa-linkedin"></i>
      </a>
      <a
        class="social-icon"
        href="https://github.com/justinjordan"
        target="_blank"
      >
        <i class="fab fa-github"></i>
      </a>
      <a
        class="social-icon"
        href="https://www.instagram.com/justin.jordan_"
        target="_blank"
      >
        <i class="fab fa-instagram"></i>
      </a>
      <a
        class="social-icon"
        href="https://soundcloud.com/realfataltransmission"
        target="_blank"
      >
        <i class="fab fa-soundcloud"></i>
      </a>
    `;
  }
});
