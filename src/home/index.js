import { define, defineHook } from "heresy";
import { Textfield } from "../components/textfield";
import { Tag } from "../components/tag";
import { File } from "../components/file";
import { Checkbox } from "../components/checkbox";

import { Util, objectMap, PRODUCT_OFFERING_FOLDER } from "../util/util";
import { Main } from "../util/main";

const _data = new WeakMap;

const main = new Main;
const util = new Util;

const _saveSettings = data => {
  const settingsData = objectMap(data, (prop) => {
      return prop.value;
    });
    const bpoIds = data.bpoIds.value.map(prop => prop.value);
    settingsData.bpoIds = bpoIds ;
    Neutralino.filesystem.writeFile("./settings.json", JSON.stringify(settingsData, null, 4)).then(data => {
      console.log(data);
  });
}

const _handleRemove = tagify => {
  console.log(tagify);
  //contents.find(content => LOCALE === content.locale).value;
};

export const Home = {
  includes: { Textfield, Tag, File, Checkbox },
  get data() { return _data.get(this) || {}; },
  set data(data) {
    _data.set(this, data);
    this.render();
  },
  onconnected() {
    util.getSettings().then(setting => {
      this.data = { 
        fdLocation: { label: "FD Location", value: setting.fdLocation },
        bpoIds: { label: "BPO IDs", value: setting.bpoIds.map(id => {
          return {value: id}
        })},
        outputFolder: { label: "Output Folder", value: setting.outputFolder },
        prettify: { label: "Prettify", value: setting.prettify },
        allowRandomQty: { label: "Allow Random Qty", value: setting.allowRandomQty },
        includeAllSpo: { label: "Include All SPO", value: setting.includeAllSpo },
        offNet3rdPartyProvider: { label: "Off Net 3rd Party Provider", value: setting.offNet3rdPartyProvider },
        productOffersWithPlace: { label: "Product Offers with Place", value: setting.productOffersWithPlace }
      };
    });
  },
  render({useState}) {
    const [data, update] = useState({});
    this.html`
    <div class="container">
      <div class="content">
          <h3>Payload Generator</h3>
          <div class="field">
            <File data="${{...this.data.fdLocation, handleClick: () => {
              Neutralino.os.showFolderDialog('Select Directory').then(directory => {
                if (directory!=="") {
                  this.data.fdLocation = {...this.data.fdLocation, value: directory};
                  update({});
                  _saveSettings(this.data);
                }
              });
            }}}"/>
          </div>
          <div class="field">
            <Tag data="${{...this.data.bpoIds, handleInput: (e) => {
                const { tagify } = e.detail;
                let { value } = e.detail;
                if (!(value.indexOf("\\")>-1)||value==="\\") return;
                value = value.replace("\\", "");
                
                tagify.whitelist = null;
                let controller;
                controller && controller.abort();
                controller = new AbortController();

                tagify.loading(true).dropdown.hide();

                const dir = `${this.data.fdLocation.value}\\${PRODUCT_OFFERING_FOLDER}`;

                Neutralino.filesystem.readDirectory(dir).then(entries => {
                  entries.splice(0, 2); // remove ./ & ../
                  let bpoIds = entries.map(entry => {
                    const jsonPath = `${this.data.fdLocation.value}\\${PRODUCT_OFFERING_FOLDER}\\${entry.entry}`;
                    return util.readJSONFile(jsonPath);
                  });
                  return Promise.all(bpoIds).then(offers => {
                      let tagList = [];
                      offers.forEach(offer => {
                        const { localizedName } = offer;
                        if (offer.isBundle&&localizedName[0].value.toLowerCase().indexOf(value.toLowerCase())>-1) {
                          tagList.push(localizedName[0].value+"@"+offer.id);
                        }
                      });
                      return tagList;
                    });
                }).then(tagList => {
                  tagify.whitelist = tagList;
                  tagify.loading(false).dropdown.show(value);
                });
              }, 
              handleAdd: tagify => {
                this.data.bpoIds = {...this.bpoIds, value: tagify.value};
                _saveSettings(this.data);
              },
              handleRemove: tagify => _handleRemove(this.data.bpoIds, tagify)}}"/>
          </div>
          <div class="field">
            <File data="${{...this.data.outputFolder, handleClick: () => {
              Neutralino.os.showFolderDialog('Select Directory').then(directory => {
                if (directory!=="") {
                  this.data.outputFolder = {...this.data.outputFolder, value: directory};
                  update({});
                }
              });
            }}}"/>
          </div>
          <div class="field">
            <Checkbox data="${{...this.data.prettify, handleChange: e => {
              this.data.prettify = { ...this.data.prettify, value: e.target.checked };
              _saveSettings(this.data);
            }}}"/>
          </div>
          <div class="field">
            <Checkbox data="${{...this.data.allowRandomQty, handleChange: e => {
              this.data.allowRandomQty = { ...this.data.allowRandomQty, value: e.target.checked };
              _saveSettings(this.data);
            }}}"/>
          </div>
          <div class="field">
            <Checkbox data="${{...this.data.includeAllSpo, handleChange: e => {
              this.data.includeAllSpo = { ...this.data.includeAllSpo, value: e.target.checked };
              _saveSettings(this.data);
            }}}"/>
          </div>
          <div class="field">
            <Checkbox data="${{...this.data.offNet3rdPartyProvider, handleChange: e => {
              this.data.offNet3rdPartyProvider = { ...this.data.offNet3rdPartyProvider, value: e.target.checked };
              _saveSettings(this.data);
            }}}"/>
          </div>
          <div class="field">
            <Textfield data="${{...this.data.productOffersWithPlace, handleChange: e => {
              this.data.productOffersWithPlace = { ...this.data.productOffersWithPlace.toString(), value: e.target.value.split(",") };
              _saveSettings(this.data);
            }}}"/>
          </div>
          <button class="button" onclick="${main.generate}">Generate</button>
      </div>
    </div>
    `;
  }
  };

define('Home', Home);