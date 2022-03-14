import React, {useState} from "react";
import { TextField } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import './realEstate.css';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['From cheap', 'From expensive'];

export default function RealEstate(){
    const [value, setValue] = useState(options[0]);
    const [inputValue, setInputValue] = useState('');
    return(
            <div className="realEstate">
                <div className="realEstate__search">
                <TextField id="outlined-basic" label="Address" variant="outlined" />
                <IconButton aria-label="travel">
                    <TravelExploreIcon />
                </IconButton>
                </div>
                <TextField id="outlined-basic" label="Rooms" variant="outlined" type="number"/>
                <Autocomplete
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                    }}
                    id="controllable-states-demo"
                    options={options}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Sort by price" />}
                />
                
            </div>
    )
}