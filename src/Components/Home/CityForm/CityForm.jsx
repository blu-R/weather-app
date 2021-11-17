import React from "react";

function CityForm({ fHandleChange, city, fHandleCitySearch }) {
    return (
        <div>
            <form onSubmit={(e) => fHandleCitySearch(e)}>
                <input
                    onChange={({ target }) => fHandleChange(target)}
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                />
                <input type="submit" value="SEARCH" />
            </form>
        </div>
    );
}

export default CityForm;
