const logger = require("@middleware/logger")(module);
const cache = require("@utils/cache");
const getConfig = require("@services/get-config");
const getPing = require("@services/get-ping");

module.exports = async (host) => {
    let response = [];
    try {
        const config = await getConfig();
        if (config && config?.pings.length > 0) {
            for (let host of config.pings) {
                //Check cache for result before pinging again
                let result = cache.get(host?.host);
                if (!result) {
                    result = await getPing(host?.host);
                }
                response.push({ ...result, ...host });
            }
        }
    } catch (error) {
        logger.warning("Failed to send ping commands to hosts in config");
        logger.debug(error);
    }
    return response;
};
