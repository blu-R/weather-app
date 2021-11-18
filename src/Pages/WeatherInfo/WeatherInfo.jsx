import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

//COMPONENTS
import Loader from "../../Components/Custom/Loader/Loader";
import CurrentWeather from "../../Components/WeatherInfo/CurrentWeather/CurrentWeather";
import HourWeather from "../../Components/WeatherInfo/HourWeather/HourWeather";

function WeatherInfo() {
    const { name, lon, lat } = useParams();
    const navigate = useNavigate();

    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        async function handleWeatherData() {
            setIsLoading(true);
            setError("");
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
            );
            const result = await response.json();
            // console.log(result);
            setIsLoading(false);
            if (result.cod === "404") {
                setError(result.message);
            } else {
                setWeatherData(result);
            }
        }
        handleWeatherData();
    }, [lat, lon]);

    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : weatherData ? (
                <div>
                    <CurrentWeather
                        city={name}
                        temp={weatherData.current.temp}
                        feelsLike={weatherData.current.feels_like}
                        dt={weatherData.current.dt}
                        description={weatherData.current.weather[0].description}
                    />
                    {weatherData.hourly.slice(0, 6).map((hour, index) => (
                        <HourWeather
                            key={index}
                            hour={hour.dt}
                            temp={hour.temp}
                            feelsLike={hour.feels_like}
                            icon={hour.weather[0].icon}
                        />
                    ))}
                    <button onClick={() => navigate(-1)}>Go back</button>
                </div>
            ) : (
                error && <p>{error}</p>
            )}
        </div>
    );
}

export default WeatherInfo;
