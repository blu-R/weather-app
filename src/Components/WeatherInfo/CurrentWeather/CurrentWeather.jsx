import React from "react";

import "./CurrentWeather.styles.css";
// import { useNavigate } from "react-router-dom";
//COMPONENTS
// import HourWeather from "../HourWeather/HourWeather";

function CurrentWeather({ city, temp, feelsLike, dt, description, icon }) {
    let time = new Date(dt * 1000).toLocaleTimeString("en-GB");

    return (
        <div className=" flex flex-col justify-center items-center py-14 text-white">
            <h1 className="text-4xl mb-2 h-11 uppercase font-title mt-4">
                {city}
            </h1>
            <p className="text-2xl font-body mb-1">{time}</p>
            <img
                className="icon-current-weather mb-3"
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt=""
            />
            <div className="flex flex-row justify-center ">
                <p className="text-8xl font-title temp-current-weather">
                    {temp}
                </p>
                <div className="flex  flex-col justify-center">
                    <p className="text-2xl font-subtitle mt-3">ºC</p>
                    <p className="text-sm font-subtitle mt-5 text-light_blue">
                        {feelsLike}º
                    </p>
                </div>
            </div>
            <p className="text-2xl font-body my-4">{description}</p>

            <img src="" alt="" />
        </div>
    );
}

export default CurrentWeather;
