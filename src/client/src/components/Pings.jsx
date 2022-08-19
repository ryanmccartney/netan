import apiPoller from "./../hooks/apiPoller";
import Grid from "@mui/material/Grid";
import StatusBox from "./StatusBox";

export default () => {
    const pings = apiPoller("ping/config", { data: [] });

    const getStatusBoxes = () => {
        const boxes = [];
        for (let ping of pings?.data) {
            const state = ping.alive ? "success" : "error";
            boxes.push(<StatusBox status={state} title={ping?.name} subtitle={ping?.host} />);
        }

        return boxes;
    };

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                {getStatusBoxes()}
            </Grid>
        </>
    );
};
