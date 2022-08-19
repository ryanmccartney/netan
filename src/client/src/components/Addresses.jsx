import React, { useState, useEffect } from "react";
import apiPoller from "../hooks/apiPoller";

export default () => {
    const addresses = apiPoller("interfaces/current", { data: {} });
    const [addressesFiltered, setAddressesFiltered] = useState({});

    useEffect(() => {
        const data = { ipv4: {}, ipv6: {} };

        if (addresses?.status === "success" && Array.isArray(addressesFiltered?.data?.addresses)) {
            for (let item of addressesFiltered?.data?.addresses) {
                console.log(item);
                if (item.family === "IPv4" && !item?.internal) {
                    data.ipv4 = { address: item?.address, netmask: item?.netmask };
                }
            }
            setAddressesFiltered(data);
        }
    }, [addresses]);

    return <>{addressesFiltered?.ipv4?.address}</>;
};
