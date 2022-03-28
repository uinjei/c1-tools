import { define } from "heresy";
import Toastify from 'toastify-js'

import { Textfield } from "../components/textfield";
import { Tag } from "../components/tag";
import { File } from "../components/file";
import { Checkbox } from "../components/checkbox";

import { Util, objectMap, PRODUCT_OFFERING_FOLDER, writeJSONFile, readJSONFile, diff } from "../util/util";
import { Main } from "../util/main";

const _data = new WeakMap;

const main = new Main;
const util = new Util;

const _saveSettings = data => {
  const settingsData = objectMap(data, (prop) => {
      return prop.value;
    });
    writeJSONFile("./settings.json", settingsData).then(data => {
      _showToast("Settings saved", 'info');
    });
}

const _showToast = (text, type) => {
  const notifType = {
    info: '#00c4a7',
    error: '#f14668'
  }
  Toastify({
    text: text,
    style: {
      background: notifType[type],
    }
  }).showToast();
}

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
        fdLocation: {
          label: "FD Location",
          value: setting.fdLocation,
          handleClick: () => this.onFdLocClick()
        },
        bpoIds: {
          label: "BPO IDs",
          value: setting.bpoIds,
          handleInput: (e) => this.onBpoIdInput(e),
        },
        outputFolder: { 
          label: "Output Folder",
          value: setting.outputFolder,
          handleClick: () => this.onOutputFolderClick()
        },
        prettify: {
          label: "Prettify",
          value: setting.prettify,
          handleChange: e => this.onPrettifyChange(e)
        },
        allowRandomQty: {
          label: "Allow Random Qty",
          value: setting.allowRandomQty,
          handleChange: e => this.onAllowRandomQtyChange(e)
        },
        includeAllSpo: {
          label: "Include All SPO",
          value: setting.includeAllSpo,
          handleChange: e => this.onIncludeAllSpoChange(e)
        },
        offNet3rdPartyProvider: {
          label: "Off Net 3rd Party Provider",
          value: setting.offNet3rdPartyProvider,
          handleChange: e => this.onOffNet3rdPartyProviderChange(e)
        },
        productOffersWithPlace: {
          label: "Product Offers with Place",
          value: setting.productOffersWithPlace,
          handleChange: e => this.onProductOffersWithPlaceChange(e)
        }
      };
    });
  },
  onFdLocClick() {
      Neutralino.os.showFolderDialog('Select Directory').then(directory => {
        if (directory!=="") {
          this.data = {...this.data, fdLocation: { ...this.data.fdLocation, value: directory }};
          _saveSettings(this.data);
        }
      });
  },
  onBpoIdInput(e) {
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
        return readJSONFile(jsonPath);
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
  onBpoIdPaste(data) {
    return new Promise((resolve, reject) => {
      const bpoIdValue = this.data.bpoIds.value;
      const { tagify, pastedText } = data;
      if (bpoIdValue.includes(pastedText)) {
        _showToast(`BPO with id: ${pastedText} already added`, 'error');
        reject();
        return;
      };
      const dir = `${this.data.fdLocation.value}\\${PRODUCT_OFFERING_FOLDER}`;
      tagify.loading(true);
      readJSONFile(`${dir}\\${pastedText}.json`).then(offer => {
        if (offer.isBundle) {
          tagify.whitelist = [offer.id];
          bpoIdValue.push(offer.id);
          this.data.bpoIds = {...this.data.bpoIds, value: bpoIdValue};
          _saveSettings(this.data);
          resolve();
        } else {
          _showToast(`BPO with id: ${pastedText} not found`, 'error');
          reject();
        }
      }).catch(error => {
        _showToast(`BPO with id: ${pastedText} not found`, 'error');
        reject();
      });
      tagify.loading(false);
    })
  },
  onBpoIdSelect(e) {
    const bpoIdValue = this.data.bpoIds.value;
    bpoIdValue.push(e.detail.data.value);
    this.data.bpoIds = {...this.data.bpoIds, value: bpoIdValue};
    _saveSettings(this.data);
  },
  onRemoveTag(tags) {
    return new Promise((resolve, reject) => {
      if (tags[0].idx===-1) {
        reject();
      } else {
        const bpoIdValue = this.data.bpoIds.value;
        bpoIdValue.splice(tags[0].idx, 1);
        this.data.bpoIds = {...this.data.bpoIds, value: bpoIdValue};
        _saveSettings(this.data);
        resolve();
      }
    });
  },
  onOutputFolderClick() {
    Neutralino.os.showFolderDialog('Select Directory').then(directory => {
      if (directory!=="") {
        this.data = {...this.data, outputFolder: { ...this.data.outputFolder, value: directory }};
        _saveSettings(this.data);
      }
    });
  },
  onPrettifyChange(e) {
    this.data.prettify = { ...this.data.prettify, value: e.target.checked };
    _saveSettings(this.data);
  },
  onAllowRandomQtyChange(e) {
    this.data.allowRandomQty = { ...this.data.allowRandomQty, value: e.target.checked };
    _saveSettings(this.data);
  },
  onIncludeAllSpoChange(e) {
    this.data.includeAllSpo = { ...this.data.includeAllSpo, value: e.target.checked };
    _saveSettings(this.data);
  },
  onOffNet3rdPartyProviderChange(e) {
    this.data.offNet3rdPartyProvider = { ...this.data.offNet3rdPartyProvider, value: e.target.checked };
    _saveSettings(this.data);
  },
  onProductOffersWithPlaceChange(e) {
    this.data.productOffersWithPlace = { ...this.data.productOffersWithPlace.toString(), value: e.target.value.split(",") };
    _saveSettings(this.data);
  },
  onGenerateClick(e) {
    e.target.setAttribute("class", "button is-primary is-loading");
    main.generate().then(report => {
      _showToast(`Sucessfully generated ${report.generatedCount} payloads ${report.hasError?". see neutralinojs.log for errors.":""}`,
        report.hasError?'error':'info');
      e.target.setAttribute("class", "button is-primary");
    });
  },
  render() {
    this.html`
    <div class="container">
      <div class="content">
          <h3>Payload Generator</h3>
          <div class="field">
            <Tag data="${{
              ...this.data.bpoIds,
              handlePaste: (clipboardEvent, data) => this.onBpoIdPaste(data),
              handleSelect: e => this.onBpoIdSelect(e),
              handleRemoveTag: (tags) => this.onRemoveTag(tags)}}"
            />
          </div>
          <div class="field">
            <File data="${this.data.fdLocation}"/>
          </div>
          <div class="field">
            <File data="${this.data.outputFolder}"/>
          </div>
          <div class="field">
            <Checkbox data="${this.data.prettify}"/>
          </div>
          <div class="field">
            <Checkbox data="${this.data.allowRandomQty}"/>
          </div>
          <div class="field">
            <Checkbox data="${this.data.includeAllSpo}"/>
          </div>
          <div class="field">
            <Checkbox data="${this.data.offNet3rdPartyProvider}"/>
          </div>
          <div class="field">
            <Textfield data="${this.data.productOffersWithPlace}"/>
          </div>
          <button class="button is-primary" onclick="${(e) => this.onGenerateClick(e)}">Generate</button>
      </div>
    </div>
    `;
  }
  };

define('Home', Home);