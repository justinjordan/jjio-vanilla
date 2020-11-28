import '../components/blog-cards.js';

class Home extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `<blog-cards></blog-cards>`;
  }
}

customElements.define('home-page', Home);
