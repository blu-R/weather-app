import React, { useState } from "react";

//ROUTER
import { useNavigate } from "react-router-dom";

import "./CityInfo.styles.css";

function CityInfo({ name, temp, lon, lat, icon }) {
    //HOOKS ROUTER
    const navigate = useNavigate();

    const [isCelsius, setIsCelsius] = useState(true);

    const changeTempScale = () => {
        setIsCelsius(!isCelsius);
    };

    return (
        <div className="flex flex-col justify-center city-info-card mt-20 mb-16 pl-3 rounded-2xl shadow-xl lg:shadow-2xl">
            <div className="flex">
                <div className="flex flex-col justify-end h-28">
                    <div className="flex justify-center items-start ">
                        {isCelsius ? (
                            <p className="text-5xl font-title pr-3 ">{temp}</p>
                        ) : (
                            <p className="text-5xl font-title pr-3 ">
                                {((temp * 9) / 5 + 32).toFixed(2)}
                            </p>
                        )}
                        {isCelsius ? (
                            <p className="text-3xl  font-title">ºC </p>
                        ) : (
                            <button
                                className="text-3xl  font-title btn-off"
                                onClick={changeTempScale}
                            >
                                ºC
                            </button>
                        )}
                        <p className="text-2xl mx-2">|</p>
                        {isCelsius ? (
                            <button
                                className="text-3xl font-title btn-off"
                                onClick={changeTempScale}
                            >
                                ºF
                            </button>
                        ) : (
                            <p className="text-3xl  font-title">ºF </p>
                        )}
                    </div>
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
