class Layout extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `<header class="bg-white shadow-md p-4">
      <div class="container mx-auto">
        <a href="#/">
          <img src="/img/logo.png" class="h-9">
        </a>
      </div>
    </header>
    <main>${this.innerHTML}</main>
    <footer></footer>`;
  }
}

customElements.define('c-layout', Layout);