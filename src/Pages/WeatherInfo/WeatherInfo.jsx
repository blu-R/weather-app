import React from "react";

import { useNavigate } from "react-router-dom";

function WeatherInfo() {
    const navigate = useNavigate();

    return (
        <div>
            <p>weather info</p>
            <button onClick={() => navigate(-1)}>Go back</button>
        </div>
    );
}

export default WeatherInfo;
