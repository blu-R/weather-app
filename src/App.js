import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

//VIEWS
import Home from "./Pages/Home/Home";
import WeatherInfo from "./Pages/WeatherInfo/WeatherInfo";

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/weatherInfo" element={<WeatherInfo />} />
        </Routes>
    );
}

export default App;
