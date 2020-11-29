import './layout.js';
import './route.js';
import '../pages/home-page.js';
import '../pages/blog-page.js';

customElements.define('c-app', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<c-layout>
      <c-route path="/" title="Home | JustinJordan.io">
        <home-page></home-page>
      </c-route>
      <c-route path="/blog/?" title="JustinJordan.io">
        <blog-page></blog-page>
      </c-route>
    </c-layout>`;
  }
});
