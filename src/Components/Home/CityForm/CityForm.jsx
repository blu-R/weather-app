import React from "react";

import "./CityForm.styles.css";

function CityForm({ fHandleChange, city, fHandleCitySearch }) {
    return (
        <div className="flex justify-center w-3/4">
            <form className="flex" onSubmit={(e) => fHandleCitySearch(e)}>
                <input
                    className="h-7 sm:h-8 w-36 lg:w-56 font-body rounded-l text-blue form-input"
                    onChange={({ target }) => fHandleChange(target)}
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                />
                <input
                    className="px-2 lg:px-4 rounded-r h-7 sm:h-8 font-subtitle btn-form"
                    type="submit"
                    value="SEARCH"
                />
            </form>
        </div>
    );
}

export default CityForm;
