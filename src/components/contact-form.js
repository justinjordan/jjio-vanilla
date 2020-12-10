import State from '../state.js';
import './input.js';

customElements.define('contact-form', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <form>
        <p>
          <c-input name="name" placeholder="Name"></c-input>
        </p>
        <p>
          <c-input name="email" placeholder="Email"></c-input>
        </p>
        <p>
          <c-input textarea name="message" placeholder="Message"></c-input>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    `;

    this.state = new State({
      name: '',
      email: '',
      message: '',
    });

    const form = this.querySelector('form');
    const nameInput = this.querySelector('[name="name"]');
    const emailInput = this.querySelector('[name="email"]');
    const messageInput = this.querySelector('[name="message"]');

    nameInput.onchange = e => {
      this.state.name = e.target.value;
    };
    emailInput.onchange = e => {
      this.state.email = e.target.value;
    };
    nameInput.onchange = e => {
      this.state.name = e.target.value;
    };
    form.onsubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { name, email, message } = e.target;
    console.log(e);
  }
});
