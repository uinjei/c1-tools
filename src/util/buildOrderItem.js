import {
    Util,
    readJSONFile,
    getLocaleValue,
    PRODUCT_SPEC_FOLDER,
    PRODUCT_OFFERING_FOLDER,
    PRODUCT_OFFERING_GROUP_FOLDER
} from "./util";

const ROOT_TYPE = "ROOT_TYPE";
const BUNDLE_PRODUCT_TYPE = "BUNDLE_PRODUCT_TYPE";
const SIMPLE_PRODUCT_TYPE = "SIMPLE_PRODUCT_TYPE";
const STRING_TYPE = "String";
const INTEGER_TYPE = "Integer";
const FLOAT_TYPE = "Float";

const util = new Util;

export class Build {
    addBillingAccountField = payload => payload.billingAccount = {
        id: "{{billing}}"
    }
    
    addExternalIdentifierField = (payload, type, orderCount) => {
    
        const externalIdentifier = [];
    
        switch (type) {
            case BUNDLE_PRODUCT_TYPE:
                externalIdentifier.push({
                    id: "Vlocity_OrderItemID",
                    type: "VlocityOrderItem"
                })
                break;
            case SIMPLE_PRODUCT_TYPE:
                externalIdentifier.push({
                    id: `Vlocity_OrderItemID_${orderCount}`,
                    type: "VlocityOrderItem"
                })
                externalIdentifier.push({
                    "id": `NCSOM_OrderItemID_${orderCount}`,
                    "type": "NCSOM Product"
                })
                break;
            case ROOT_TYPE:
            default:
                externalIdentifier.push({
                    "id": "Vlocity_OrderID",
                    "type": "VlocityOrder"
                })
                externalIdentifier.push({
                    "id": "NCSOM_OrderID",
                    "type": "NCSOM External"
                })
        }
    
        payload.externalIdentifier = externalIdentifier;
    }
    
    createBasicPayload = () => {
        const payload = {
            relatedParty: [
                {
                    role: "customer",
                    id: "{{CustomerId}}"
                }
            ],
            orderItem: []
        }
        this.addBillingAccountField(payload);
        this.addExternalIdentifierField(payload, ROOT_TYPE);
    
        return payload;
    }
    
    createMainOrder = (mainProductOfferingId, cardinality) => {
    
        const mainOrder = this.createBaseOrderItem(mainProductOfferingId, cardinality);
    
        this.addBillingAccountField(mainOrder);
        this.addExternalIdentifierField(mainOrder, BUNDLE_PRODUCT_TYPE);
    
        return mainOrder;
    }
    
    generateValue = (type) => {
        switch (type) {
            case STRING_TYPE:
                return "Random String"
            case INTEGER_TYPE:
            case FLOAT_TYPE:
                return this.generateRandomNumber(1, 100)
        }
    }
    
    selectValueFromProductOfferDefinedProductSpecCharValues = async (productOfferId) => {
    
        const characteristic = [];
    
        const __filename = util.generateJSONFileLocation(PRODUCT_OFFERING_FOLDER, productOfferId);
        const { prodSpecCharValueUse, productSpecification, productOfferingTerm, localizedName } = await readJSONFile(__filename);
    
        const place = util.settings.productOffersWithPlace.includes(getLocaleValue(localizedName)) ? generatePlace(): null;
    
    
        prodSpecCharValueUse.forEach(({ name, characteristicValue, valueType }) => {
            characteristic.push({
                name,
                value: characteristicValue.length ?
                characteristicValue[this.generateRandomNumber(0, characteristicValue.length - 1)].value
                : this.generateValue(valueType)
            })
        })
    
        return {
            characteristic,
            productSpecification,
            productOfferingTerm,
            place
        }
    }
    
    generatePlace = () => ([
        {
            "role": "installation",
            "name": "installation",
            "id": "{{installation}}"
        }
    ])
    
    selectValueFromProductSpecCharValues = async (productSpecId, characteristic, onNetIndicator) => {
    
        const __filename = util.generateJSONFileLocation(PRODUCT_SPEC_FOLDER, productSpecId);
        const productSpec = await readJSONFile(__filename);
    
        const addedCharacteristics = characteristic.map(({ name }) => name);
    
        productSpec.productSpecCharacteristic
            .filter(({ name }) => !addedCharacteristics.includes(name))
            .forEach(({ name, valueType, productSpecCharacteristicValue }) => {
                if (name === "ipAddress")
                    characteristic.push({
                        name,
                        value: "10.10.10.10"
                    })
                else if (name === "onNetIndicator" && productSpecCharacteristicValue.length) {
                    characteristic.push({
                        name,
                        value: productSpecCharacteristicValue[onNetIndicator].value
                    })
                } else
                    characteristic.push({
                        name,
                        value: productSpecCharacteristicValue.length ?
                            productSpecCharacteristicValue[this.generateRandomNumber(0, productSpecCharacteristicValue.length - 1)].value
                            : this.generateValue(valueType)
                    })
            })
    
        return characteristic;
    }
    
    selectProductsFromOfferGroup = (productOfferingsInGroup, min, max, defaultValue) => {
    
        const cardinality = {
            min,
            max,
            default: defaultValue
        }
    
        const quantity = this.generateQuantity(cardinality);
    
        let currentOffers = productOfferingsInGroup.filter(productOffering => !productOffering.expiredForSales);
        const selectedOffers = [];
    
        for (let i = 0; i < quantity; i++) {
            const selectedIndex = this.generateRandomNumber(0, currentOffers.length - 1);
            selectedOffers.push(currentOffers[selectedIndex]);
        }
    
        return selectedOffers;
    
    }
    
    convertOfferGroupToProductOffering = (offerGroup) => {
        const selectedOffers = offerGroup.flat()
        const uniqueOffers = [...new Set(selectedOffers)].map(uniqueOffer => {
            const count = selectedOffers.filter(selectedOffer => selectedOffer.id === uniqueOffer.id).length;
    
            return {
                bundledProdOfferOption: {
                    defaultRelOfferNumber: count,
                    numberRelOfferLowerLimit: count,
                    numberRelOfferUpperLimit: count
                },
                expiredForSales: false,
                id: uniqueOffer.id,
                groupOptionId: uniqueOffer.groupOptionId
            }
        })
    
        return uniqueOffers;
    }
    
    isLastMileOrAdditionalEquipment = (offer) => {
        return offer.name[0].value !== "Select Last Mile Equipment" && offer.name[0].value !== "Select Additional Equipment";
    }
    
    
    generateOfferGroupOrder = (offerGroup) => {
    
        let offers = util.settings.offNet3rdPartyProvider ? offerGroup.filter(isLastMileOrAdditionalEquipment) : offerGroup;
    
        return Promise.all(offers.map(async productOffer => {
    
            const { bundledGroupPolicy, groupOptionId, numberRelOfferLowerLimit, numberRelOfferUpperLimit } = productOffer;
    
            const __filename = util.generateJSONFileLocation(PRODUCT_OFFERING_GROUP_FOLDER, productOffer.bundledGroupPolicy.id, util.settings.fdLocation);
            const offerGroup = await readJSONFile(__filename);
            const selectedOrders = this.selectProductsFromOfferGroup(offerGroup.productOfferingsInGroup,
                numberRelOfferLowerLimit,
                numberRelOfferUpperLimit,
                bundledGroupPolicy.defaultRelOfferNumber
            )
    
            selectedOrders.forEach(selectedOrder => selectedOrder.groupOptionId = groupOptionId);
            return selectedOrders;
        })).then(this.convertOfferGroupToProductOffering);
    
    }
    
    
    addItemTerm = (productOfferingTerm) => {
    
        const index = this.generateRandomNumber(0, productOfferingTerm.length - 1);
        const selectedTerm = productOfferingTerm[index];
    
        return {
            duration: selectedTerm.duration,
            policyId: selectedTerm.policy.id,
            "@type": selectedTerm.type,
            name: selectedTerm.name
        }
    }
    
    createProductDetails = async (productOfferId, onNetIndicator) => {
    
        const { characteristic, productSpecification, productOfferingTerm, place } = await this.selectValueFromProductOfferDefinedProductSpecCharValues(productOfferId);
        await this.selectValueFromProductSpecCharValues(productSpecification.id, characteristic, onNetIndicator);
    
    
        const itemTerm = [];
        if (productOfferingTerm.length > 0) {
            itemTerm.push(this.addItemTerm(productOfferingTerm))
        }
    
        const product = {
            productSpecification,
            characteristic,
            place
        }
    
        if(!place) delete product.place;
    
        return {
            product,
            itemTerm
        }
    }
    
    selectOnNetIndicator = (is3rdParty) => is3rdParty ? 1 : 0;
    
    addGroupOptionId = (orderItem, groupOptionId) => orderItem.productOfferingGroupOption = { groupOptionId };
    
    createOrderItems = (productOfferings, onNetIndicator) => {
        return Promise.all(productOfferings.map(async ({ id, bundledProdOfferOption, groupOptionId }, index) => {
    
            const cardinality = {
                min: bundledProdOfferOption.numberRelOfferLowerLimit,
                max: bundledProdOfferOption.numberRelOfferUpperLimit,
                default: bundledProdOfferOption.defaultRelOfferNumber
            }
    
            const orderItem = this.createBaseOrderItem(id, cardinality);
            if (!orderItem) return;
    
            this.addExternalIdentifierField(orderItem, SIMPLE_PRODUCT_TYPE, index + 1);
    
            if (groupOptionId) this.addGroupOptionId(orderItem, groupOptionId);
    
            const productDetails = await this.createProductDetails(id, onNetIndicator);
            orderItem.product = productDetails.product;
            if (productDetails.itemTerm.length > 0) orderItem.itemTerm = productDetails.itemTerm;
    
            if (orderItem.product.productSpecification.id === "a0bba909-01a0-4ab7-87d1-bdfe3e6329bd") this.addNextActionField(orderItem);
    
            return orderItem;
        })).then(orderItems => orderItems.filter(orderItem => orderItem));
    }
    
    addNextActionField = orderItem => orderItem.nextAction = [
        {
            "durationPolicy": {
                "duration": {
                    "amount": 2,
                    "units": "Months"
                },
                "startDatePolicy": "activationDate"
            },
            "action": "terminate",
            "nextActionType": "customerDefined",
            "extensions": {
                "requestType": "Future"
            }
        }
    ]
    
    generateRandomNumber = (min, max) => Math.floor(Math.random() * max) + min;
    
    generateQuantity = (cardinality) => {
    
        let quantity = 1
        if (!cardinality) return quantity;
    
        if (cardinality && util.settings.allowRandomQty) {
            let min = INCLUDE_ALL_SPO ? 1 : cardinality.min || cardinality.default;
            quantity = this.generateRandomNumber(min, cardinality.max);
        } else if (cardinality && !util.settings.allowRandomQty) {
            let min = util.settings.includeAllSpo ? 1 : cardinality.min || cardinality.default;
            quantity = min;
        }
    
        return quantity + "";
    }
    
    createBaseOrderItem = (productOfferingId, cardinality) => {
    
        const quantity = this.generateQuantity(cardinality);
    
        if (quantity == 0) return false;
    
        return {
            extensions: {
                reservationId: "123"//leave as is
            },
            quantity,
            productOffering: {
                id: productOfferingId
            },
            action: "add",
            modifyReason: [
                {
                    name: "CREQ",
                    action: "add"
                }
            ]
        }
    }
}