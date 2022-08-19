const cp = require("child_process");
const logger = require("@middleware/logger")(module);

module.exports = async () => {
    let link = {};
    try {
        const ethtool = await cp.spawnSync("ip", ["--json", "link", "show"], { encoding: "utf8" });
        const output = await ethtool.stdout.toString();
        link = await JSON.parse(output);
        if (ethtool.stderr) {
            logger.debug(ethtool?.stderr);
        }
    } catch (error) {
        logger.warning("Failed to get link information");
        logger.debug(error);
    }
    return link;
};
