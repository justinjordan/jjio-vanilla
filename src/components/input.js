customElements.define('c-input', class extends HTMLElement {
  getInput() {
    return `
      <input
        type="text"
        ${[...this.attributes].map(a => `${a.name}="${a.value}"`).join(' ')}
      />
    `;
  }

  getTextarea() {
    return `
      <textarea
        type="text"
        ${[...this.attributes].map(a => `${a.name}="${a.value}"`).join(' ')}
      >${this.getAttribute('value') || ''}</textarea>
    `;
  }

  connectedCallback() {
    const shadow = this.attachShadow({mode: 'open'});
    
    shadow.innerHTML = `
      <style>
        input, textarea {
          border: none;
          border-bottom: 1px solid var(--black);
          outline: none;
          background: none;
          color: var(--black);
        }

        input::placeholder, textarea::placeholder {
          color: var(--black);
        }
      </style>

      ${this.hasAttribute('textarea') ? this.getTextarea() : this.getInput()}
    `;
  }
});