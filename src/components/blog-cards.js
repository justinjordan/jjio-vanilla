import State from '../state.js';

const state = new State({
  posts: [],
});

class BlogCards extends HTMLElement {
  constructor() {
    super();

    state.subscribe(state => {
      this.displayPosts(state.posts);
    });

    this.loadPosts();
  }

  loadPosts() {
    this.innerHTML = `<p>Loading...</p>`;

    setTimeout(() => {
      state.posts = [
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
