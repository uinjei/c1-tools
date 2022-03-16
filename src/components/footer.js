import { define } from "heresy";

export const Footer = {
  render() {
    this.html`
      <footer class="footer">
        <div class="content has-text-centered">
            <p>Made with ❤️</p>
        </div>
      </footer>
      `;
    }
  };
  
define('Footer', Footer);