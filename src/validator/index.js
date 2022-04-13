import { define, html } from "heresy";
import Ajv from "ajv"
import addFormats from "ajv-formats"
import jsonMap from "json-source-map";
import CodeFlask from 'codeflask';
import Prism from 'prismjs';
import { capitalCase } from "change-case";

import style from './style'
import { readJSONFile, writeJSONFile, showToast } from "../util/util";
import File from "../components/file";
import Dropdown from "../components/dropdown";

const _data = new WeakMap;

export const Validator = {
  includes: { File, Dropdown },
  get data() { return _data.get(this) || {}; },
  set data(data) {
    _data.set(this, data);
    this.render();
  },
  style() {
    return style;
  },
  oninit() {
    Neutralino.filesystem.readDirectory("./schemas").then(entries => {
      entries.splice(0, 2); // remove ./ & ../
      const schemas = entries.map(entry => {
        const schema = entry.entry.split(".")[0];
        return html`<option value="${schema}">${capitalCase(schema)}</option>`
      });
      this.data = {...this.data, schemas};
    });
  },
  onOpenFileClick() {
      Neutralino.os.showOpenDialog('Select File').then(file => {
        if (file.length>0) {
          const flask = new CodeFlask(this.querySelector('.code-editor'), { language: 'js', lineNumbers: true });

          flask.addLanguage('js', Prism.languages['js']);
          flask.onUpdate(fileData => {
            try {
              this.data = { ...this.data, fileData:JSON.parse(fileData)};
              this.querySelector(".button").setAttribute("class", "button is-primary");
            } catch (error) {
              this.querySelector(".button").setAttribute("class", "button is-danger");
            }
          });           

          readJSONFile(file[0]).then(fileData => {

            this.data = {...this.data, filename: file[0]};

            readJSONFile(`schemas/${this.data.schema}.json`).then(schemaData => {
              
              this.data = {...this.data, schemaData, fileData};

              flask.updateCode(JSON.stringify(fileData, null, 2));

              this.validate();
              
              this.querySelector(".code-window").style.display = "block";
              this.querySelector(".code-header").style.display = "flex";
              this.querySelector(".code-editor").style.display = "block";
              const hidden = this.querySelector(".hidden");
              if (hidden) hidden.setAttribute("class","control");

            }).catch(() => {
              flask.updateCode("");
              showToast("Please select type", 'error');
            });

          }).catch(() => {
            flask.updateCode("");
            showToast("Invalid JSON file", 'error');
          });
          
        }
      });
  },
  onTypeChange(e) {
    this.data = {...this.data, schema: e.target.value};
  },
  revalidateOnClick() {
    this.validate();
    this.save();
  },
  save() {
    writeJSONFile(this.data.filename, this.data.fileData);
  },
  validate() {
    const result = jsonMap.stringify(this.data.fileData, null, 2);
    const ajv = new Ajv({strict: false, allErrors: true});
    addFormats(ajv, ["date-time", "uuid"]);
    const validate = ajv.compile(this.data.schemaData);
    validate(this.data.fileData);
    this.data = {...this.data, error:""};
    this.data = {
      ...this.data,
      error: validate.errors?validate.errors.map(error => {
        return `${error.message},
        path: ${error.instancePath===""?"/":error.instancePath},
        parameters: ${JSON.stringify(error.params, null, 2)}
        at line ${result.pointers[error.instancePath].value.line+1}`;
      }):[]
    }
    this.querySelector(".notification").style.display = "block";
  },
  render() {
      const { error, filename, schemas } = this.data;

      this.html`
      <div class="container">
        <div class="content">
            <h3>Json Validator</h3>
            <p>
              Choose file and type to validate
            </p>

            <div class="field is-grouped">
              <p class="control">
                <File data="${{label: 'Select file', handleClick: () => this.onOpenFileClick()}}"/>
              </p>
              <p class="control">
                <Dropdown data="${{label:'Select type', values: schemas, handleChange: (e) => this.onTypeChange(e)}}"/>
              </p>

              <p class="control hidden">
                <button class="button is-primary" onclick="${() => this.revalidateOnClick()}">Revalidate</button>
              </p>
            </div>

            ${error&&error.length>0?
            html`
              <div class="notification is-danger">
                ${error.map(err => html`<p>${err}</p>`)}
              </div>`
            :
            html`
              <div class="notification is-primary">
                <p>JSON file is invalid</p>
              </div>
            `}

            <div class="code-window">
              <div class="code-header">
                  ${filename}
              </div>
              <div class="code-editor"></div>
            </div>
        </div>
      </div>
      `;

    }
  };
  
define('ValidatorC1T', Validator);