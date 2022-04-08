export default {
    onclick(e) {
      const children = e.target.parentNode.parentNode.children;
      for (let i = 0; i < children.length; i++) {
        children[i].children[0].removeAttribute('class');
      }
      e.target.setAttribute('class', 'is-active');
    },
    render() {
      this.html`
      <aside class="menu">
          <ul class="menu-list">
          <li><a onclick="${this.onclick}" class="is-active" href="/">Payload Generator</a></li>
          <li><a onclick="${this.onclick}" href="editor">Edit Payload</a></li>
          <li><a onclick="${this.onclick}" href="validator">Validator</a></li>
          </ul>
      </aside>
    `;
  }
}  