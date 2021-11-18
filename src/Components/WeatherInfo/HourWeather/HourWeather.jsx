import React from "react";

function HourWeather({ hour, temp, feelsLike, icon }) {
    return (
        <div>
            <h3>{hour}</h3>
            <p>{temp}</p>
            <p>{feelsLike}</p>
            <p>{icon}</p>
        </div>
    );
}

export default HourWeather;
