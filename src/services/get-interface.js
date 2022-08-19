const os = require("os");

module.exports = async (interfaceId) => {
    const interfaceData = os.networkInterfaces();
    let interface = {};
    for (let data in interfaceData) {
        if (interfaceId === data) {
            interface = {
                label: `${data}: ${interfaceData[data][0]?.address} `,
                id: data,
                addresses: interfaceData[data],
            };
        }
    }
    return interface;
};
