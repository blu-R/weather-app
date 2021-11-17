import React from "react";

//ROUTER
import { useNavigate } from "react-router-dom";

function CityInfo({ name, temp }) {
    //HOOKS ROUTER
    const navigate = useNavigate();

    return (
        <div>
            <h3>{name}</h3>
            <p>{temp}</p>
            <button onClick={() => navigate(`/weather/${name}`)}>
                More info...
            </button>
        </div>
    );
}

export default CityInfo;
