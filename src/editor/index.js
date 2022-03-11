import { define } from "heresy";

export const Editor = {
  render() {
      this.html`
      <div class="container">
        <div class="content">
            <h3>Payload Editor</h3>
            <p>
              Coming soon!
            </p>
        </div>
      </div>
      `;
    }
  };
  
define('Editor', Editor);