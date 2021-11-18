import React from "react";

//ROUTER
import { useNavigate } from "react-router-dom";

function CityInfo({ name, temp, lon, lat, icon }) {
    //HOOKS ROUTER
    const navigate = useNavigate();

    return (
        <div>
            <h3>{name}</h3>
            <p>{temp}</p>
            <img
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="icon"
            />
            <button onClick={() => navigate(`/weather/${name}/${lon}/${lat}`)}>
                More info...
            </button>
        </div>
    );
}

export default CityInfo;
