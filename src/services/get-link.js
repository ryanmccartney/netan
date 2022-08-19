const cp = require("child_process");
const logger = require("@middleware/logger")(module);

module.exports = async (interface) => {
    let link = {};
    try {
        const ethtool = await cp.spawnSync("ethtool", ["--json", interface], { encoding: "utf8" });
        const output = await ethtool.stdout.toString();

        for (let item of output.split("\n\t")) {
            const params = item.split(":");
            link[params[0]] = params[1].trim();
        }

        if (ethtool.stderr) {
            logger.debug(ethtool?.stderr);
        }
    } catch (error) {
        logger.warning("Failed to get link information");
        logger.debug(error);
    }
    return link;
};
