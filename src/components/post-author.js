import { getPostAuthor } from '../api.js';

class PostAuthor extends HTMLElement {
  async connectedCallback() {
    const id = this.getAttribute('author-id');
    const author = await getPostAuthor(id);

    this.innerHTML = author.name;
  }
}

customElements.define('post-author', PostAuthor, { is: 'span' });
