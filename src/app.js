import './components/layout.js';
import './components/route.js';
import './views/home.js';

class App extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<c-layout>
      <c-route path="/" title="Home | JustinJordan.io">
        <home-page></home-page>
      </c-route>
    </c-layout>`;
  }
}

customElements.define('c-app', App);
