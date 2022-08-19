const setConfig = require("@services/set-config");
const getInterfaces = require("@services/get-interfaces");

module.exports = async (interface = {}) => {
    let status = false;
    const interfaces = await getInterfaces();
    for (let int of interfaces) {
        if (int?.id === interface?.id) {
            status = await setConfig({ interface: interface });
        }
    }
    return status;
};
