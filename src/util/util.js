const toJSON = data => JSON.parse(data)

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

    readJSONFile = async (__filename) => await Neutralino.filesystem.readFile(__filename, { encoding: "utf8" }).then(toJSON)

    getSettings = async () => {
        const settings = await this.readJSONFile('./settings.json');
        return settings;
    } 

    generateJSONFileLocation = (type, id) => `${this.settings.fdLocation}/${type}/${id}.json`;

    writeToJSONFile = ({name, currency, timing, proration, payload}) => 
    {
        Neutralino.filesystem.writeFile(`${this.settings.outputFolder}/${name}_${currency}_${timing}_${proration}.json`,
        JSON.stringify(payload, null, this.settings.prettify?4:0))
    };

}