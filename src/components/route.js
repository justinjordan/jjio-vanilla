import State from '../state.js';

export const router = new State({
  path: `/${location.hash.substr(1)}`,
  args: [],
});

class Route extends HTMLElement {
  connectedCallback() {
    addEventListener('hashchange', this.update.bind(this));
    this.update();
  }

  update() {
    scrollTo(0, 0);
    const currentPath = location.hash.substr(1) || '/';
    const routePath = this.getAttribute('path');
    const routeTitle = this.getAttribute('title');
    const routePattern = new RegExp('^' + routePath.replaceAll('/', '[\\/]+').replaceAll('?', '([^\/]+)') + '$');

    const match = currentPath.match(routePattern);

    if (match) {
      this.style.display = 'block';
      document.title = routeTitle || routePath;

      const [, ...args] = match;
      router.path = currentPath;
      router.args = args;
    } else {
      this.style.display = 'none';
    }
  }
}

customElements.define('c-route', Route);
