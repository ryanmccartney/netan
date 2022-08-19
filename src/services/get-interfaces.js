const os = require("os");

module.exports = async () => {
    const interfaceData = os.networkInterfaces();
    const interfaces = [];
    for (let data in interfaceData) {
        interfaces.push({
            label: `${data}: ${interfaceData[data][0]?.address} `,
            id: data,
            addresses: interfaceData[data],
        });
    }
    return interfaces;
};
