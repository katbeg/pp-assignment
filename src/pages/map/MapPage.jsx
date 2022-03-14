import React, {useRef, useState, useEffect} from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './MapPage.css';
import IconButton from '@mui/material/IconButton';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { TextField } from "@mui/material";

export default function MapPage(){
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2F0YmVnIiwiYSI6ImNsMHF6cjN6azJhNGQzanB3ajR4OWExNDAifQ.JoZLRyn51x55KwmvxVt7iw';
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(35.0818155);
    const [lat, setLat] = useState(31.4117257);
    const [zoom, setZoom] = useState(9);
    
    useEffect(() => {
        if (map.current) return; 
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
            });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
          setLng(map.current.getCenter().lng.toFixed(4));
          setLat(map.current.getCenter().lat.toFixed(4));
          setZoom(map.current.getZoom().toFixed(2));
        });
      });

    return(
        <div className="map">
            <div ref={mapContainer} className="map-container" />
            <div className="coordinates">
                <TextField id="outlined-basic" label="Longitude" variant="outlined" />
                <TextField id="outlined-basic" label="Latitude" variant="outlined" />
                <IconButton aria-label="travel">
                    <TravelExploreIcon/>
                </IconButton>
            </div>
        </div>
    )
}