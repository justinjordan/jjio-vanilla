import State from '../state.js';

class BlogCards extends HTMLElement {
  connectedCallback() {
    this.state = new State({
      posts: [],
    });

    this.state.subscribe(state => {
      this.displayPosts(state.posts);
    });

    this.loadPosts();
  }

  loadPosts() {
    this.innerHTML = `<p>Loading...</p>`;

    setTimeout(() => {
      this.state.posts = [
        { name: 'Post 1' },
        { name: 'Post 2' },
        { name: 'Post 3' },
      ];
    }, 1000);
  }

  displayPosts(posts) {
    this.innerHTML = `<div>
      ${posts.map(post => `<div>${post.name}</div>`).join('')}
    </div>`;
  }
}

customElements.define('blog-cards', BlogCards);
