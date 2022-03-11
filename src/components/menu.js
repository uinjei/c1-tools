import { define } from "heresy";

export const Menu = {
    render() {
      this.html`
        <aside class="menu">
            <ul class="menu-list">
            <li><a href="/">Payload Generator</a></li>
            <li><a href="editor">Edit Payload</a></li>
            </ul>
        </aside>
      `;
    }
  };
  
  define('Menu', Menu);