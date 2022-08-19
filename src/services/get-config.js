const readJson = require("@utils/read-json");
const renderTemplate = require("@utils/render-template");
const configFile = process.env.NETAN_CONFIG_FILE || "./data/config.json";
const logger = require("@middleware/logger")(module);

module.exports = async (render = true) => {
    let config = await readJson(configFile);
    if (render) {
        config = await renderTemplate(config);
    }
    if (!config) {
        logger.warning("Failed to read the config file");
        config = {};
    }
    return config;
};
