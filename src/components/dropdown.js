const _data = new WeakMap;

export default {
  get data() { return _data.get(this) || {}; },
  set data(data) {
    _data.set(this, data);
    this.render();
  },
  render() {
    const { label, values, handleChange } = this.data;
    this.html`
    <div class="select">
      <select onchange="${handleChange}">
        <option>${label}</option>
        ${values}
      </select>
    </div>
    `;
  }
}