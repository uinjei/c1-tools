import { define, render, html } from "heresy"
import "router-component";
import "./app.scss";
import { Menu } from "./components/menu";
import { Footer } from "./components/footer";
import "./home";
import "./editor";

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
    <div class="columns">
        <div class="column is-one-fifth is-gapless">
          <Menu/>
        </div>
        <div class="column is-gapless">
          <section class="section">
            <router-component>
                <editor-heresy path="editor"></editor-heresy>
                <home-heresy path=".*"></home-heresy>
            </router-component>
          </section>
        </div>
    </div>
    <Footer/>
    `;
  }
};

define('App', App);
render(document.body, html`<App id="app"/>`);