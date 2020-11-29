class ContactForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `CONTACT FORM`;
  }
}

customElements.define('contact-form', ContactForm);
