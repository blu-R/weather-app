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

            <Route
                exact
                path="/weather/:name/:lon/:lat"
                element={<WeatherInfo />}
            />
            <Route exact path="*" element={<h2>Not Found</h2>} />
        </Routes>
    );
}

export default App;
