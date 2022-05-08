import React from "react";

//ROUTER
import { useNavigate } from "react-router-dom";

import "./CityInfo.styles.css";

function CityInfo({ name, temp, lon, lat, icon }) {
    //HOOKS ROUTER
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center city-info-card mt-20 mb-16 pl-3 rounded-2xl shadow-xl lg:shadow-2xl">
            <div className="flex">
                <div className="flex flex-col justify-end h-28">
                    <p className="text-5xl font-title pr-3 ">{temp} ºC</p>
                    <h3 className="text-xl font-subtitle city">{name}</h3>
                </div>
                <div className="flex flex-col justify-start ">
                    <img
                        className="weather-icon "
                        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                        alt="icon"
                    />
                </div>
            </div>
            <div className="flex justify-end mt-2">
                <button
                    className="px-2 rounded-tl rounded-br-2xl border-none font-subtitle btn-info"
                    onClick={() => navigate(`/weather/${name}/${lon}/${lat}`)}
                >
                    More info...
                </button>
            </div>
        </div>
    );
}

export default CityInfo;
