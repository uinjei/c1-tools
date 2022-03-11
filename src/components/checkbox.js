import { define } from "heresy";

const _data = new WeakMap;

export const Checkbox = {
  get data() { return _data.get(this) || {}; },
  set data(data) {
    _data.set(this, data);
    this.render();
  },
  render() {
    const { label, value, handleChange } = this.data;
    this.html`
      <label class="checkbox">
        <input type="checkbox" checked="${value}" onchange="${handleChange}"/>
        ${label}
      </label>
      `;
    }
  };
  
define('Checkbox', Checkbox);