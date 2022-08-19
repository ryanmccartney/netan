import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import apiPoller from "./../hooks/apiPoller";
import api from "./../utils/api";

export default () => {
    const interfaces = apiPoller("interfaces", { data: [] }, 3000);
    const config = apiPoller("system/config", { interface: { label: "No Interface Selected", id: false } }, 3000);

    const handleInterfaceSelect = async (event, data) => {
        const result = await api.put("/interfaces", { interface: data });

        console.log(result?.data);
    };

    return (
        <Autocomplete
            disablePortal
            controlled
            id="interface-selection"
            onChange={handleInterfaceSelect}
            options={interfaces?.data.map((item) => {
                return { id: item?.id, label: item?.label };
            })}
            sx={{ width: 300 }}
            variant="secondary"
            defaultValue={config?.data?.interface}
            renderInput={(params) => <TextField {...params} />}
        />
    );
};
