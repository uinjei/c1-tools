import { define } from "heresy";

export const Validator = {
  render() {
      this.html`
      <div class="container">
        <div class="content">
            <h3>Json Validator</h3>
            <p>
              Validator
            </p>
        </div>
      </div>
      `;
    }
  };
  
define('Validator', Validator);