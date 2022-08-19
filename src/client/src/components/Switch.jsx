import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import FormControlLabel from "@mui/material/FormControlLabel";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import api from "./../utils/api";

export default () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [config, setConfig] = useState(false);

    const getConfig = async () => {
        const response = await api.get("/system/config/raw");
        if (response?.data?.status == "success") {
            setConfig(response?.data?.data);
        }
    };

    const onSubmit = async (data) => {
        const result = await api.put("/system/config", { script: data });
    };

    useEffect(() => {
        getConfig();
    }, []);

    if (!config) {
        return <>Waiting</>;
    }

    return (
        <Box sx={{ p: 2 }}>
            <Card sx={{ minWidth: 275 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid sx={{ p: 2 }} container spacing={2}>
                        {/* <Grid item lg={12} xs={12}>
                            <FormControlLabel
                                label="Enable"
                                defaultValue={config?.script?.enabled}
                                labelPlacement="start"
                                control={<Switch {...register("enabled", { required: true })} />}
                            ></FormControlLabel>
                        </Grid> */}
                        <Grid item lg={6} xs={12}>
                            <TextField
                                {...register("username", { required: true })}
                                label="SSH Username"
                                defaultValue={config?.script?.username}
                                fullWidth
                                placeholder="cisco"
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TextField
                                {...register("password", { required: true })}
                                defaultValue={config?.script?.password}
                                label="SSH Password"
                                fullWidth
                                placeholder="cisco"
                                type="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                {...register("code", { required: false })}
                                label="Code"
                                fullWidth
                                multiline
                                defaultValue={config?.script?.code}
                                rows={12}
                                placeholder="conf t"
                                helperText="Script to run on the switch when network cable is detected."
                                inputProps={{ spellCheck: "false", style: { fontFamily: "monospace" } }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit">Sumbit</Button>
                        </Grid>
                    </Grid>
                </form>
            </Card>
        </Box>
    );
};
