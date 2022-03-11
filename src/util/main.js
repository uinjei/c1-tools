import { Build } from "./buildOrderItem";
import {
    getLocaleValue,
    getMainSpo,
    getCurrency,
    PRODUCT_OFFERING_FOLDER, 
    PRODUCT_PRICE_FOLDER,
    Util
} from "./util";


    /* TODO:

        Issues:
        
        1. When the item is serialized, the quantity value must be equal to one
            - how to identify serialized item? --> from PST
        workaround: "ALLOW_RANDOM_QTY": false

    */


let  util, build;

export class Main {
    findPrice = async args => {
        const { spoPrice } = args;
        const priceCharacteristic = await Promise.all(spoPrice.map(price => {
            const __filename = util.generateJSONFileLocation(PRODUCT_PRICE_FOLDER, price.id)
            return util.readJSONFile(__filename)
                .then(({priceType, priceCharacteristic}) => {
                    if (priceType === "RC") {
                        const paymentTiming = priceCharacteristic.find(result => result.name === "Payment timing");
                        const prorationMethod = priceCharacteristic.find(result => result.name === "Proration Method");
                        return {
                            rc: {
                                timing: paymentTiming?paymentTiming.characteristicValue[0].value:"NO_PAYMENT_TIMING",
                                proration: prorationMethod?prorationMethod.characteristicValue[0].value:"NO_PRORATION_METHOD"
                            }
                        }
                    }
                    else return {oc: "OC"}
                })
        }))
        let paymentTiming = ""; 
        let prorationMethod = "";
        const rc = priceCharacteristic.find(result => result.rc);
        if (rc) {
           paymentTiming = rc.rc.timing;
           prorationMethod = rc.rc.proration;
        } else {
           paymentTiming = "NO";
           prorationMethod = "RC";
        }
        return {
            ...args,
            timing: paymentTiming,
            proration: prorationMethod
        }
    }
    
    findMainSpoPrice = args => {
        const { mainSpoId } = args;
        const __filename = util.generateJSONFileLocation(PRODUCT_OFFERING_FOLDER, mainSpoId)
        return util.readJSONFile(__filename)
            .then(({productOfferingPrice}) => {
                return {...args, spoPrice: productOfferingPrice}
            });
    }
    
    buildPayload = async bundledProduct => {
    
        if (!bundledProduct.isBundle) throw new Error("Not a bundle")
    
        const payload = build.createBasicPayload();
        const mainOrder = build.createMainOrder(bundledProduct.id);
        const onNetIndicator = build.selectOnNetIndicator(util.settings.offNet3rdPartyProvider);
        const offerGroupOrders = await build.generateOfferGroupOrder(bundledProduct.bundledProdOfferGroupOption, util.settings.fdLocation);
        const orderItems = await build.createOrderItems([...bundledProduct.bundledProductOffering,...offerGroupOrders], onNetIndicator);
        
        mainOrder.orderItem = orderItems
        payload.orderItem.push(mainOrder)
    
        const mainSpoId = getMainSpo(bundledProduct.bundledProductOffering)
        
        return {
            name: getLocaleValue(bundledProduct.localizedName).replace(/[^\w\s]/, ' '),
            currency: getCurrency(bundledProduct.currency),
            mainSpoId: mainSpoId,
            payload
        }
    }
    
    getGeneratedPayloadList = () => {
        return util.settings.bpoIds.map(id => {
            if (id.indexOf("@")>-1) id = id.split("@")[1];
            const __filename = util.generateJSONFileLocation(PRODUCT_OFFERING_FOLDER, id, util.settings.fdLocation)
            return util.readJSONFile(__filename)
                .then(this.buildPayload)
                .then(this.findMainSpoPrice)
                .then(this.findPrice)
                .then(util.writeToJSONFile)
                .catch(error => error)
        })
    }
    
    generate = () => {
        
        util = new Util;
        build = new Build;
            
        util.getSettings().then(setting => {
            Promise.all(this.getGeneratedPayloadList()).then((errors) => {
    
                const errorJSON = {}
            
                let errorCount = errors.filter(error => error).length
            
                console.log(`Successfully generated ${errors.length - errorCount} payloads`)
                if (errorCount > 0){
                    console.log(`Error found in ${errorCount} file(s)`)
            
                    errors.forEach((error, i) => {
                        if (error) {
                            console.log(error)
                            errorJSON[setting.bpoIds[i]] = error.toString()
                        }
                    })
            
                    Neutralino.filesystem.writeFile(`${util.settings.outputFolder}/error-${Date.now()}.json`, JSON.stringify(errorJSON));
                }
                console.timeEnd("Generate Provide Payload")
            });
        });
    }

}