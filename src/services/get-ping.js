const ping = require("ping");
const logger = require("@middleware/logger")(module);
const cache = require("@utils/cache");

module.exports = async (host) => {
    let response = {};
    try {
        if (host) {
            response = await ping.promise.probe(host, {
                timeout: 2,
                extra: ["-i", "2"],
            });
            cache.set(host, response);
        }
    } catch (error) {
        logger.warning(`Failed to send ping command to ${host}`);
        logger.debug(error);
    }
    return response;
};
