"use strict";

const logger = require("@middleware/logger")(module);
const Mustache = require("mustache");
const getAddress = require("@services/get-address");
const getGateway = require("@services/get-gateway");

module.exports = async (data = {}) => {
    let output = {};
    try {
        const address = await getAddress(data?.interface?.id);
        const gateway = await getGateway(data?.interface?.id);
        const currentport = "gi/0/1"; //TODO: Implement LLDO Neighbors

        const view = {
            ipv4: address,
            gateway: gateway,
            currentport: currentport,
        };

        const renderedData = Mustache.render(JSON.stringify(data), view);
        output = JSON.parse(renderedData);
    } catch (error) {
        output = false;
        logger.debug(error);
        logger.error(`Failed to template data`);
    }
    return output;
};
