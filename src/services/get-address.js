const getInterface = require("@services/get-interface");

module.exports = async (interfaceId) => {
    let address = "";

    const interface = getInterface(interfaceId);
    if (interface && Array.isArray(interface.addresses)) {
        interface = interface.addresses[0]?.address;
    }

    return address;
};
