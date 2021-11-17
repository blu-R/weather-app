import React from "react";

function CityInfo({ name, temp }) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{temp}</p>
            <button>More info...</button>
        </div>
    );
}

export default CityInfo;
