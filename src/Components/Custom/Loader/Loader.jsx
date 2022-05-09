import React from "react";
import "./loader.styles.css";

function Loader() {
    return (
        <div className="mt-40 text-center">
            <p className="text-white font-body text-2xl font-bold">Loading</p>
            <div className="loader"></div>
        </div>
    );
}

export default Loader;
