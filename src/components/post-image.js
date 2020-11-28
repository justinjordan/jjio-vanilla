import { getPostImage } from '../api.js';

class PostImage extends HTMLElement {
  async connectedCallback() {
    const id = this.getAttribute('image-id');
    const image = await getPostImage(id);

    this.innerHTML = `<img class="m-0" src="${image.source_url}" />`;
  }
}

customElements.define('post-image', PostImage);
