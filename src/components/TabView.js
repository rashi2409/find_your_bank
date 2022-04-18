import React, {useState} from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { useNavigate } from 'react-router-dom'


const TabView = () => {

    const [value, setValue] = useState(2);
    const navigate = useNavigate();


    return (
        <div>
        <Paper square>
            <Tabs
                value={value}
                textColor="primary"
                indicatorColor="primary"
                onChange={(event, newValue) => {setValue(newValue);}}
                >
                <Tab label="All Banks" onClick={() => navigate(`/`)} />
                <Tab label="Favourites" onClick={() => navigate(`/favourites`)} />
            </Tabs>
        </Paper>
        </div>
    );
};

export default TabView;
