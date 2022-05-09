import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../Components/Custom/Footer/Footer";

//COMPONENTS
import Loader from "../../Components/Custom/Loader/Loader";
import CurrentWeather from "../../Components/WeatherInfo/CurrentWeather/CurrentWeather";
import HourWeather from "../../Components/WeatherInfo/HourWeather/HourWeather";

import "./WeatherInfo.styles.css";

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
        <div className="flex flex-col items-center back-weather-info">
            {isLoading ? (
                <>
                    <Loader />
                    <div className="h-screen"></div>
                </>
            ) : weatherData ? (
                <div className="w-2/3 h-auto weather-info-container">
                    <CurrentWeather
                        city={name}
                        temp={weatherData.current.temp}
                        feelsLike={weatherData.current.feels_like}
                        dt={weatherData.current.dt}
                        description={weatherData.current.weather[0].description}
                        icon={weatherData.current.weather[0].icon}
                    />
                    <h2 className="inline-block w-28 my-2 text-white text-xl mx-auto bg-blue font-subtitle">
                        FORECAST
                    </h2>
                    <div className="flex flex-row flex-wrap justify-center forecast-container">
                        {weatherData.hourly.slice(0, 6).map((hour, index) => {
                            let date = new Date(hour.dt * 1000);
                            date = date.toLocaleTimeString(navigator.language, {
                                hour: "2-digit",
                                minute: "2-digit",
                            });

                            return (
                                <HourWeather
                                    key={index}
                                    hour={date}
                                    temp={hour.temp}
                                    feelsLike={hour.feels_like}
                                    icon={hour.weather[0].icon}
                                />
                            );
                        })}
                    </div>
                    <button
                        className="btn-weather-info font-subtitle rounded-md w-24 my-20 py-2 text-white"
                        onClick={() => navigate(-1)}
                    >
                        Go back
                    </button>
                </div>
            ) : (
                error && (
                    <p className="mt-40 font-body text-light_blue capitalize text-2xl">
                        {error}
                    </p>
                )
            )}
            <Footer />
        </div>
    );
}

export default WeatherInfo;
