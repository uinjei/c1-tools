import { define, render, html } from "heresy"
import "router-component";

import Menu from "./components/menu";
import Footer from "./components/footer";
import "./home";
import "./editor";
import "./validator";

import "./app.scss";

Neutralino.init();
Neutralino.events.on("windowClose", () => Neutralino.app.exit());
document.addEventListener('contextmenu', event => event.preventDefault());

const App = {
  includes: {Menu, Footer},
  onclick(e) {
    if (e.target.id)
      this.main.current.setAttribute("active-page", e.target.id);
  },
  render() {
    this.html`
    <div class="p-1">
      <div class="columns">
          <div class="column is-one-fifth is-gapless">
            <Menu/>
          </div>
          <div class="column is-gapless">
            <section class="section">
              <router-component>
                  <validator-c1t path="validator"></validator-c1t>
                  <editor-c1t path="editor"></editor-c1t>
                  <home-c1t path=".*"></home-c1t>
              </router-component>
            </section>
          </div>
      </div>
      <Footer/>
    </div>
    `;
  }
};

define('AppC1T', App);
render(document.body, html`<AppC1T/>`);