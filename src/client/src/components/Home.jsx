import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import Pings from "./Pings";
import Addresses from "./Addresses";

export default ({}) => {
    return (
        <>
            <Grid container sx={{ p: 2 }} spacing={2}>
                <Grid item xs={12}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardHeader title="Status"></CardHeader>
                        <CardContent>
                            <Pings />
                        </CardContent>
                        <CardActions sx={{ align: "right" }}>
                            <IconButton size="small" component={Link} to="/pings">
                                <EditIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardHeader title="Addresses"></CardHeader>
                        <CardContent>
                            <Addresses />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardHeader title="Link"></CardHeader>
                        <CardContent></CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
};
