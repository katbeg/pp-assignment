import React, {useState, useContext, useEffect} from "react";
import { TextField } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import './realEstate.css';
import Autocomplete from '@mui/material/Autocomplete';
import { EstateContext } from "../../context/context";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import EstateCard from "../../components/EstateCard/EstateCard";

const options = ['High to low', 'Low to high'];

export default function RealEstate(){
    const [value, setValue] = useState(options[0]);
    const [inputValue, setInputValue] = useState('');
    const {data, loading} = useContext(EstateContext);
    
    return(
            <div className="realEstate">
                <div className="realEstate__filters">
                    <div className="realEstate__search">
                        <TextField id="outlined-basic"  label="Address" variant="outlined" />
                        <IconButton aria-label="travel">
                            <TravelExploreIcon />
                        </IconButton>
                    </div>
                    <TextField className="realEstate__rooms" id="outlined-basic" label="Rooms" variant="outlined" type="number"/>
                    <Autocomplete
                        className="realEstate__sort"
                        value={value}
                        onChange={(newValue) => {
                        setValue(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                        }}
                        id="controllable-states-demo"
                        options={options}
                        renderInput={(params) => <TextField {...params} label="Sort by price" />}
                    />
                </div>
                
                <div className="cardHolder">
                    {!loading && data ? 
                     data.map((p, key) => {           
                            return <EstateCard key={key} className="cardHolder__item" address={p.address} price={p.price} parking={p.parking} rooms={p.num_rooms}/>
                    }) 
                    : <Box sx={{ display: 'flex' }}>
                            <CircularProgress />
                        </Box>}
                </div>
            </div>
    )
}