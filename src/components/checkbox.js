const _data = new WeakMap;

export default {
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
}