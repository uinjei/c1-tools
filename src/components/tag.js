import { define } from "heresy";
import Tagify from "@yaireo/tagify";

const _data = new WeakMap;

let tagify = null;

export const Tag = {
  onconnected() {
    const tagInput = this.querySelector('.tagify');
    tagify = new Tagify(tagInput, {
        enforceWhitelist: true,
        delimiters: null,
        dropdown: {
            closeOnSelect: true
        },
        originalInputValueFormat: valuesArr => valuesArr.map(item => item.value).join(','),
        hooks: {
          beforePaste: this.data.handlePaste
        }
    });
    tagify.on('input', e => {
        this.data.handleInput(e);
    });

    tagify.on('change', e => {
        this.data.handleChange(e);
    });

  },
  ondisconnected() {
    tagify.destroy();
  },
  get data() { return _data.get(this) || {}; },
  set data(data) {
    _data.set(this, data);
    this.render();
  },
  render() {
    const { label, value } = this.data;
    if (tagify) {
      tagify.removeAllTags();
      tagify.whitelist = value;
      tagify.addTags(value);
    }
    this.html`
        <label class="label">${label}</label>
        <textarea class="tagify" placeholder="${label}"></textarea>
      `;
    }
  };
  
define('Tag', Tag);