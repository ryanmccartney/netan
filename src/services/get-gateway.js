const getRoutes = require("@services/get-routes");

module.exports = async (interfaceId) => {
    let gateway = "";

    const routes = await getRoutes();

    if (routes && Array.isArray(routes)) {
        for (let route of routes) {
            if (route.dev === interfaceId) {
                gateway = route?.gateway;
                break;
            }
        }
    }

    return gateway;
};
