import React from "react";
import {Link} from 'react-router-dom';
import "./Header.css";

export default function Header(){
    return(
        <nav className="headerMenu">
            <Link to="/map" className="headerLink">Map</Link>
            <Link to="/real-estate" className="headerLink">Real Estate</Link>
        </nav>
    )
}