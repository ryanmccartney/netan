import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

export default ({}) => {
    return (
        <>
            <Grid container sx={{ p: 2 }} spacing={2}>
                <Card item xs={6} sx={{ minWidth: 275 }}>
                    <CardHeader title="Download"></CardHeader>
                    <CardContent></CardContent>
                </Card>
                <Card item xs={6} sx={{ minWidth: 275 }}>
                    <CardHeader title="Upload"></CardHeader>
                    <CardContent></CardContent>
                </Card>

                <Grid item xs={12}>
                    <Card sx={{ minWidth: 275 }}>Start Button Stop Button</Card>
                </Grid>
            </Grid>
        </>
    );
};
