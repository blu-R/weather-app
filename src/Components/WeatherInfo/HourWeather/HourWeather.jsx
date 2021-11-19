import React from "react";

import "./HourWeather.styles.css";

function HourWeather({ hour, temp, feelsLike, icon }) {
    return (
        <div className="flex flex-col text-white items-center  py-5 forecast">
            <h3 className="text-sm text-blue font-subtitle font-bold mb-4">
                {hour}
            </h3>
            <p className="text-2xl font-title hour-temp">{temp}ºC</p>
            <p className="font-body font-extralight ">{feelsLike}º</p>
            <img
                className="icon-forecast"
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt=""
            />
        </div>
    );
}

export default HourWeather;
