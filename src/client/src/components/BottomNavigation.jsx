import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SpeedIcon from "@mui/icons-material/Speed";
import HomeIcon from "@mui/icons-material/Home";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import { Link, useLocation } from "react-router-dom";

export default ({ children }) => {
    const location = useLocation();

    return (
        <>
            <Box>{children}</Box>
            <Box>
                <BottomNavigation showLabels value={location.pathname}>
                    <BottomNavigationAction
                        component={Link}
                        value="/speed"
                        to="/speed"
                        label="Speedtest"
                        icon={<SpeedIcon />}
                    />
                    <BottomNavigationAction component={Link} value="/" to="/" label="Home" icon={<HomeIcon />} />
                    <BottomNavigationAction
                        component={Link}
                        to="/switch"
                        value="/switch"
                        label="Switch"
                        icon={<SettingsEthernetIcon />}
                    />
                </BottomNavigation>
            </Box>
        </>
    );
};
