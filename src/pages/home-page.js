import '../components/blog-cards.js';

customElements.define('home-page', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="container mx-auto max-w-7xl px-8">
      <blog-cards></blog-cards>
    </div>`;
  }
});
