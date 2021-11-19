import React from "react";

import "./Header.styles.css";
function Header() {
    return (
        <header className="flex justify-center h-80 w-3/4">
            <h1 className="self-end mb-9 text-center lg:text-8xl  sm:text-7xl text-6xl text-white h1-header ">
                WEATHER APP
            </h1>
        </header>
    );
}

export default Header;
