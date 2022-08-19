const os = require("os");
const getInterface = require("@services/get-interface");
const getConfig = require("@services/get-config");

module.exports = async () => {
    const config = await getConfig(false);
    let interface = {};

    if (config && config?.interface) {
        interface = await getInterface(config?.interface?.id);
    }

    return interface;
};
