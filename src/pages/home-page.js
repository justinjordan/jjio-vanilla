import '../components/blog-cards.js';

class Home extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="container mx-auto max-w-7xl px-8">
      <blog-cards></blog-cards>
    </div>`;
  }
}

customElements.define('home-page', Home);
