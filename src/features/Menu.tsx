import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

export const Menu = () => { 

    return ( 
        <div>
            <Link to="/home"    className="headerLink" > Home</Link>
            <Link to="/tracking" className="headerLink" > Tracking</Link>
            <Link to="/forecast" className="headerLink"> Forecast</Link>
        </div>
    )
}