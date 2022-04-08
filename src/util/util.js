import Toastify from 'toastify-js';

const toJSON = data => JSON.parse(data)

export const showToast = (text, type) => {
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

export const PRODUCT_OFFERING_FOLDER = "productOffering";
export const PRODUCT_SPEC_FOLDER = "productSpecification";
export const PRODUCT_OFFERING_GROUP_FOLDER = "productOfferingGroup";
export const PRODUCT_PRICE_FOLDER = "price"; 
export const LOCALE = "en-US";

export const objectMap = (object, mapFn) => {
    return Object.keys(object).reduce((result, key) => {
    result[key] = mapFn(object[key]);
    return result;
    }, {});
}

export const diff = (a,b) => Math.abs(a-b);

export const readJSONFile = async (filename) => await Neutralino.filesystem.readFile(filename, { encoding: "utf8" }).then(toJSON);
export const writeJSONFile = (filename, data) => Neutralino.filesystem.writeFile(filename,
    JSON.stringify(data, null, 4));

export const getLocaleValue = (contents) => contents.find(content => LOCALE === content.locale).value;
export const getCurrency = (contents) => contents.defaultCurrency;
export const getMainSpo = (contents) =>
    contents.find(content => content.bundledProdOfferOption.numberRelOfferLowerLimit === 1 &&
    content.bundledProdOfferOption.numberRelOfferUpperLimit === 1 && content.bundledProdOfferOption.defaultRelOfferNumber === 1
    ).id;

export class Util {

    constructor() {
        this.getSettings().then(settings => {
            this.settings = settings;
        });
    }

    getSettings = async () => {
        const settings = await readJSONFile('./settings.json');
        return settings;
    } 

    generateJSONFileLocation = (type, id) => `${this.settings.fdLocation}/${type}/${id}.json`;

    writeToJSONFile = ({name, currency, timing, proration, payload}) => Neutralino.filesystem.writeFile(`${this.settings.outputFolder}/${name}_${currency}_${timing}_${proration}.json`,
        JSON.stringify(payload, null, this.settings.prettify?4:0));

}