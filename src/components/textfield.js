import { define } from "heresy";

const _data = new WeakMap;

export const Textfield = {
  get data() { return _data.get(this) || {}; },
  set data(data) {
    _data.set(this, data);
    this.render();
  },
  render() {
    const { label, value, handleChange } = this.data;
    this.html`
      <label class="label">${label}</label>
      <div class="control">
          <input class="input" type="text" placeholder="Text input" value="${value}" onchange="${handleChange}"/>
      </div>
      `;
    }
  };
  
define('Textfield', Textfield);