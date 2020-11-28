import State from '../state.js';
import { getPosts } from '../api.js';
import './post-image.js';
import './post-author.js';
import './post-date.js';

class BlogCards extends HTMLElement {
  connectedCallback() {
    this.state = new State({
      posts: [],
    });

    // display posts on state change
    this.state.subscribe(state => {
      this.renderPosts(state.posts);
    });

    this.loadPosts();
  }

  async loadPosts() {
    try {
      this.innerHTML = `<p>Loading...</p>`;

      this.state.posts = await getPosts();
    } catch (e) {
      this.innerHTML = `<p>Error loading blog posts.</p>`;
    }
  }

  renderPosts(posts) {
    this.innerHTML = `<div class="grid grid-cols-2 gap-6">
      ${posts.map(post => `<article class="bg-white rounded-lg shadow-md overflow-hidden">
        <a href="#/blog/${post.slug}">
          <div>
            <post-image image-id="${post.featured_media}"></post-image>
          </div>
          <div class="prose p-4">
            <h2>${post.title}</h2>
            <address>
              By <post-author author-id="${post.author}"></post-author> on <post-date date="${post.date}"></post-date>
            </address>
            <p>${post.description}</p>
          </div>
        </a>
      </article>`).join('')}
    </div>`;
  }
}

customElements.define('blog-cards', BlogCards);
