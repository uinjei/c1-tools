import { define } from "heresy";
import Tagify from "@yaireo/tagify";

const _data = new WeakMap;

let tagify = null;

export const Tag = {
  onconnected() {
    const tagInput = this.querySelector('.tagify');
    tagify = new Tagify(tagInput, {
        enforceWhitelist: true,
        editTags: false,
        delimiters: null,
        dropdown: {
            closeOnSelect: true
        },
        skipInvalid: true,
        backspace: false,
        originalInputValueFormat: valuesArr => valuesArr.map(item => item.value).join(','),
        hooks: {
          beforePaste: this.data.handlePaste,
          beforeRemoveTag: this.data.handleRemoveTag

        }
    });
    tagify.on('input', e => {
        this.data.handleInput(e);
    });
    
    tagify.on('dropdown:select', e => {
        this.data.handleSelect(e);
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