import { define } from "heresy";

const _data = new WeakMap;

export const File = {
  get data() { return _data.get(this) || {}; },
  set data(data) {
    _data.set(this, data);
    this.render();
  },
  render() {
    const { label, value, handleClick } = this.data;
    this.html`
      <div class="file has-name is-fullwidth">
            <label class="file-label">
                <input class="file-input" type="input" onclick="${handleClick}"/>
                <span class="file-cta">
                <!-- <span class="file-icon">
                    <i class="fas fa-upload"></i>
                </span> -->
                <span class="file-label">
                    ${label}
                </span>
                </span>
                <span class="file-name">
                    ${value}
                </span>
            </label>
        </div>
      `;
    }
  };
  
define('File', File);