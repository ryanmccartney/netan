"use strict";

const fs = require("fs").promises;
const logger = require("@middleware/logger")(module);
const path = require("path");

module.exports = async (filePath, data) => {
    let status = true;
    let absolutePath;
    try {
        absolutePath = path.resolve(filePath);
        const dataString = await JSON.stringify(data, null, 2);
        await fs.writeFile(absolutePath, dataString);
    } catch (error) {
        status = false;
        logger.debug(error);
        logger.error(`Failed to write JSON file to ${absolutePath}`);
    }
    return status;
};
