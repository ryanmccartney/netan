import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InterfaceSelect from "./InterfaceSelect";
import IconButton from "@mui/material/IconButton";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RouterIcon from "@mui/icons-material/Router";

export default () => {
    const navigate = useNavigate();
    const location = useLocation();

    const getIcon = () => {
        if (location.pathname === "/") {
            return (
                <IconButton size="small" component={Link} to="/">
                    <RouterIcon sx={{ color: "common.white" }} />
                </IconButton>
            );
        }

        return (
            <div
                onClick={() => {
                    navigate(-1);
                }}
            >
                <IconButton size="small">
                    <ArrowBackIcon sx={{ color: "common.white" }} />
                </IconButton>{" "}
            </div>
        );
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Box component="div">{getIcon()}</Box>

                    <Typography variant="h6" component="div" sx={{ ml: 2, flexGrow: 1 }}>
                        NETAN
                    </Typography>

                    <InterfaceSelect />
                </Toolbar>
            </AppBar>
        </Box>
    );
};
