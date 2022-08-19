const axios = require("axios").default;

const instance = axios.create({
    baseURL: "/api/",
    timeout: 1000,
});

export default instance;
