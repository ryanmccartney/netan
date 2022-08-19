const upnp = require("node-upnp-utils");

const getDevices = async () => {
    upnp.startDiscovery();

    const deviceList = await upnp.getActiveDeviceList();
    console.log(deviceList);

    upnp.stopDiscovery();

    return deviceList;
};

module.exports = getDevices;
