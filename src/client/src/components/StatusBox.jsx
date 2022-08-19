import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default ({ status = "primary", title = "", subtitle = "" }) => {
    return (
        <Grid item xs={4}>
            <Card sx={{ backgroundColor: `${status}.light`, height: 70, maxWidth: 300 }}>
                <Typography sx={{ color: "text.secondary" }} align="center" variant="h5">
                    {title}
                </Typography>
                <Typography sx={{ color: "text.secondary" }} align="center" variant="h6">
                    {subtitle}
                </Typography>
            </Card>
        </Grid>
    );
};
