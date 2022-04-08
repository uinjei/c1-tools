const _data = new WeakMap;

export default {
  get data() { return _data.get(this) || {}; },
  set data(data) {
    _data.set(this, data);
    this.render();
  },
  render() {
    const { label, handleClick } = this.data;
    this.html`
      <div class="file">
        <label class="file-label">
          <input class="file-input" type="input" onclick="${handleClick}">
          <span class="file-cta">
            <span class="file-icon">
              <i class="fa-solid fa-upload"></i>
            </span>
            <span class="file-label">
                ${label}
            </span>
          </span>
        </label>
      </div>
    `;
  }
}