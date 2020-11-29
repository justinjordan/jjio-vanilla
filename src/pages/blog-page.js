import { router } from '../components/route.js';
import { getPost } from '../api.js';

class BlogPage extends HTMLElement {
  connectedCallback() {
    router.subscribe(route => {
      const [slug] = route.args;

      if (slug) {
        this.loadPost(slug);
      } else {
        this.innerHTML = '';
      }
    });
  }

  async loadPost(slug) {
    try {
      const post = await getPost(slug);

      this.innerHTML = `<div class="container mx-auto max-w-7xl prose-xl">
        ${post.content.rendered}
      </div>`;
    } catch (e) {
      console.error(e);
    }
  }
}

customElements.define('blog-page', BlogPage);
