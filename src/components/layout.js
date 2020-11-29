import './contact-form.js';
import './social-icons.js';

class Layout extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header class="bg-white shadow-md p-4 mb-10">
      <div class="container mx-auto max-w-7xl px-8">
        <a href="#/">
          <img src="/img/logo.png" class="h-9">
        </a>
      </div>
    </header>
    <main class="min-h-50">${this.innerHTML}</main>
    <footer class="bg-blue-400 mt-10">
      <div>
        <div class="container mx-auto max-w-7xl px-8 grid grid-cols-2 gap-6 pt-8 pb-8">
          <div class="prose prose-lg">
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet mauris et elit venenatis, volutpat commodo nibh aliquam. Vivamus aliquam ac tortor quis congue. Morbi eget sem nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur fringilla lorem et convallis scelerisque. Duis quis sem accumsan, porttitor tortor eget, aliquam odio. Praesent vel tempus justo. Donec a blandit nulla. Aenean mattis dapibus est, ac sodales massa facilisis vitae. Mauris ac turpis ultricies, tincidunt elit vel, lobortis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit tellus, cursus et gravida ut, sodales eget nulla. Donec pretium arcu vel augue elementum maximus.</p>
          </div>
          <div class="prose prose-lg">
            <contact-form></contact-form>
          </div>
        </div>
      </div>
      <div class="bg-blue-500">
        <div class="container mx-auto max-w-7xl px-8 grid grid-cols-2 gap-6 pt-4 pb-4">
          <div class="prose">
            <p>&copy; Copyright by Justin Jordan ${new Date().getFullYear()}
          </div>
          <div class="prose text-right">
            <social-icons></social-icons>
          </div>
        </div>
      </div>
     <div class="container mx-auto max-w-7xl px-8"></div>
    </footer>`;
  }
}

customElements.define('c-layout', Layout);