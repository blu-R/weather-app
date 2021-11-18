import React from "react";

// import { useNavigate } from "react-router-dom";
//COMPONENTS
// import HourWeather from "../HourWeather/HourWeather";

function CurrentWeather({ city, temp, feelsLike, dt, description }) {
    return (
        <div>
            <h1>{city}</h1>
            <p>{temp}</p>
            <p>{feelsLike}</p>
            <p>{dt}</p>
            <p>{description}</p>
            <p>icono</p>
        </div>
    );
}

export default CurrentWeather;
