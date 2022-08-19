"use strict";

const fs = require("fs").promises;
const logger = require("@middleware/logger")(module);
const path = require("path");

module.exports = async (filePath) => {
    let data = {};
    let absolutePath;
    try {
        absolutePath = path.resolve(filePath);
        const dataString = await fs.readFile(absolutePath);
        data = JSON.parse(dataString);
    } catch (error) {
        data = false;
        logger.debug(error);
        logger.error(`Failed to read JSON file at ${absolutePath}`);
    }
    return data;
};
