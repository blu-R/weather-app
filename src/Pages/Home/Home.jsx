import React, { useState } from "react";

//COMPONENTS
import Header from "../../Components/Home/Header/Header";
import CityForm from "../../Components/Home/CityForm/CityForm";
import CityInfo from "../../Components/Home/Cityinfo/CityInfo";
import Loader from "../../Components/Custom/Loader/Loader";

function Home() {
    //STATES
    const [cityName, setCityName] = useState("");
    const [cityData, setCityData] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    //FUNCTIONS
    const handleChange = ({ value }) => {
        setCityName(value);
    };

    const handleCitySearch = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setCityData(null);
        setError("");

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
        );
        const result = await response.json();

        setIsLoading(false);
        if (result.cod === "404") {
            setError(result.message);
        } else {
            setCityData(result);
        }
    };

    return (
        <div>
            <Header />
            <CityForm
                fHandleChange={handleChange}
                fHandleCitySearch={handleCitySearch}
                city={cityName}
            />
            {isLoading ? (
                <Loader />
            ) : cityData ? (
                <CityInfo
                    name={cityData.name}
                    temp={cityData.main.temp}
                    lon={cityData.coord.lon}
                    lat={cityData.coord.lat}
                    icon={cityData.weather[0].icon}
                />
            ) : (
                error && <p>{error}</p>
            )}
        </div>
    );
}

export default Home;
