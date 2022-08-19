const cp = require("child_process");
const logger = require("@middleware/logger")(module);

module.exports = async () => {
    let routes = [];
    try {
        //
        const ipcli = await cp.spawnSync("ip", ["--json", "route", "list"], { encoding: "utf8" });
        const output = await ipcli.stdout.toString();
        routes = await JSON.parse(output);

        if (ipcli.stderr) {
            logger.debug(ipcli?.stderr);
        }
    } catch (error) {
        logger.warning("Failed to get routing table from device");
        logger.debug(error);
    }
    return routes;
};
