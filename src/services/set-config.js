const writeJson = require("@utils/write-json");
const getConfig = require("@services/get-config");
const configFile = process.env.NETAN_CONFIG_FILE || "./data/config.json";

module.exports = async (newConfig = {}) => {
    let config = await getConfig(false);

    config = { ...config, ...newConfig };

    const status = await writeJson(configFile, config);
    return status;
};
