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
        callbacks : {
            add : () => this.data.handleAdd(tagify),  // callback when adding a tag
            remove : () => this.data.handleRemove(tagify)   // callback when removing a tag
        }
    });
    tagify.on('input', e => {
        this.data.handleInput(e);
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
      tagify.whitelist = this.data.value?this.data.value.map(id => id.value):[]
      tagify.addTags(this.data.value?this.data.value:"");
    }
    this.html`
        <label class="label">${label}</label>
        <textarea class="tagify" placeholder="${label}">
        </textarea>
      `;
    }
  };
  
define('Tag', Tag);