class Route extends HTMLElement {
  constructor() {
    super();

    this.update = this.update.bind(this);

    addEventListener('hashchange', this.update);
    this.update();
  }

  update() {
    const routePath = this.getAttribute('path');
    const routeTitle = this.getAttribute('title');
    const currentPath = `/${location.hash.substr(1)}`.replace(/\/+/, '/');

    if (routePath === currentPath) {
      this.style.display = 'block';
      document.title = routeTitle || routePath;
    } else {
      this.style.display = 'none';
    }
  }
}

customElements.define('c-route', Route);
