const months = [
  'January', 'February', 'March',
  'April', 'May', 'June',
  'July','August', 'September',
  'October', 'November', 'December'
];

class PostDate extends HTMLElement {
  connectedCallback() {
    const rawDate = this.getAttribute('date');
    const date = new Date(rawDate);

    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    this.innerHTML = `<time datetime="${rawDate}">${month} ${day}, ${year}</time>`;
  }
}

customElements.define('post-date', PostDate);
