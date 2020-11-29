import { getPostAuthor } from '../api.js';

customElements.define('post-author', class extends HTMLElement {
  async connectedCallback() {
    const id = this.getAttribute('author-id');
    const author = await getPostAuthor(id);

    this.innerHTML = author.name;
  }
}, { is: 'span' });
