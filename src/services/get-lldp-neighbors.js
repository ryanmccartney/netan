const cp = require("child_process");
const logger = require("@middleware/logger")(module);

module.exports = async () => {
    let neighbors = {};
    try {
        const lldpcli = await cp.spawnSync("lldpcli", ["show", "neighbors", "-f", "json"], { encoding: "utf8" });
        const output = await lldpcli.stdout.toString();
        neighbors = await JSON.parse(output);

        if (lldpcli.stderr) {
            logger.debug(lldpcli?.stderr);
        }
    } catch (error) {
        logger.warning("Failed to get LLDP Neighbors");
        logger.debug(error);
    }
    return neighbors?.lldp;
};
