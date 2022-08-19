import { useState } from "react";
import api from "./../utils/api";
import useInterval from "use-interval";

export default (url, defaultData, interval = 1000) => {
    let [response, setResponse] = useState(defaultData);

    const makeRequest = async () => {
        const result = await api.get(url);
        setResponse(result?.data);
    };
    useInterval(() => {
        makeRequest();
    }, interval);

    return response;
};
