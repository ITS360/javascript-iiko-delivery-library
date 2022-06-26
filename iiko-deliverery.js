'use strict'

const IikoClient = require("javascript-iiko-api-client");


class IikoDeliverery {

    #_client;

    constructor(address, login) {
        this.#_client = new IikoClient(address, login);
    }

    /**
     *
     * @returns {Promise<*>}
     */

    async getOrganisations(){
        try{
            await this.#_client.connect();
            let organisations = await this.#_client.request("get", "organizations", "", null);
            return organisations.organizations;
        }catch (err){
            throw new Error(err);
        }
    }

    /**
     *
     * @param organisationId {String}
     * @returns {Promise<*>}
     */

    async getNomenclature(organisationId){
        try{
            let nomenclature = await this.#_client.request("post", "nomenclature", "", {
                "organizationId": organisationId
            });
            return nomenclature;
        }catch (err){
            throw new Error(err);
        }
    }

    /**
     *
     * @param organisationIds {Array<String>}
     * @returns {Promise<*>}
     */

    async getPaymentMethods(organisationIds){
        try{
            let paymentMethods = this.#_client.request("post", "payment_types", "", {
                "organizationIds": organisationIds
            });
            return paymentMethods;
        }catch (err){
            throw new Error(err);
        }
    }

    /**
     *
     * @param organisationIds {Array<String>}
     * @returns {Promise<*>}
     */

    async getTerminalGroups(organisationIds){
        try{
            let terminalGroups = await this.#_client.request("post", "terminal_groups", "", {
                "organizationIds": organisationIds
            });
            return terminalGroups;
        }catch (err){
            throw new Error(err);
        }
    }

    /**
     *
     * @param organizationIds {Array<String>}
     * @returns {Promise<*>}
     */

    async getDeliveryOrderTypes(organizationIds){
        try{
            let orderTypes = await this.#_client.request("post", "deliveries/order_types", "", {
                organizationIds: organizationIds
            });
            return orderTypes;
        }catch (err){
            throw new Error(err);
        }
    }

    /**
     * 
     * @param organizationIds {Array<String>}
     * @returns {Promise<*>}
     */
    
    async getDeliveryCities(organizationIds){
        try{
            let deliveryCities = await this.#_client.request("post", "cities", "", {
                organizationIds: organizationIds
            });
            return deliveryCities;
        }catch (err){
            throw new Error(err);
        }
    }

    /**
     * 
     * @param organizationId {String}
     * @param cityId {String}
     * @returns {Promise<*>}
     */
    
    async getDeliveryStreets(organizationId, cityId){
        try{
            let streets = await this.#_client.request("post", "streets/by_city", "", {
                "organizationId": organizationId,
                "cityId": cityId
            });
            return streets;
        }catch (err){
            throw new Error(err);
        }
    }

    /**
     * 
     * @param delivery {Object}
     * @returns {Promise<*>}
     */
    
    async deliveriesCreate(delivery){
        try{
            let deliveryResponse = await this.#_client.request("post", "deliveries/create", "", delivery);
            return deliveryResponse;
        }catch (err){
            throw new Error(err);
        }
    }

    /**
     * 
     * @param organizationId {String}
     * @param orderIds {Array<String>}
     * @returns {Promise<*>}
     */
    
    async getDelivery(organizationId, orderIds){
        try{
            let delivery = this.#_client.request("post", "deliveries/by_id", "", {
                organizationId: organizationId,
                orderIds: orderIds,
            });
            return delivery;
        }catch (err){
            throw new Error(err);
        }
    }

}

module.exports = IikoDeliverery;
