import React from "react";
import PageRouter from "./components/PageRouter";
import BottomNavigation from "./components/BottomNavigation";
import AppBar from "./components/AppBar";
import Paper from "@mui/material/Paper";

export default () => {
    return (
        <div className="Netan Client">
            <AppBar />

            <PageRouter />

            <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation />
            </Paper>
        </div>
    );
};
