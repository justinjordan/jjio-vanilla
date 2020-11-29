class SocialIcons extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `SOCIAL ICONS`;
  }
}

customElements.define('social-icons', SocialIcons);
