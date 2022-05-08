import React, { useEffect, useState } from "react";
import axios from "axios";

//COMPONENTS
import Header from "../../Components/Home/Header/Header";
import CityForm from "../../Components/Home/CityForm/CityForm";
import CityInfo from "../../Components/Home/Cityinfo/CityInfo";
import Loader from "../../Components/Custom/Loader/Loader";
import Footer from "../../Components/Custom/Footer/Footer";

//STYLES
import "./Home.styles.css";

function Home() {
    //STATES
    const [cityName, setCityName] = useState("");
    const [cityData, setCityData] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const handleError = () => {
            console.log("Acceso a la ubicación denegado");
        };
        const succes = (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            // console.log(lat);
            // console.log(lon);
            axios
                .get(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
                )
                .then((res) => {
                    console.log(res);
                    setCityData({
                        name: `${res.data.name}, ${res.data.sys.country}`,
                        main: {
                            temp: res.data.main.temp,
                        },
                        coord: {
                            lon: lon,
                            lat: lat,
                        },
                        weather: [
                            {
                                icon: res.data.weather[0].icon,
                            },
                        ],
                    });
                });
        };
        navigator.geolocation.getCurrentPosition(succes, handleError);
    }, []);

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
        <div className="flex flex-col items-center backg">
            <Header />

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
                error && (
                    <p className="mt-40 font-body text-light_blue capitalize text-2xl">
                        {error}
                    </p>
                )
            )}
            <CityForm
                fHandleChange={handleChange}
                fHandleCitySearch={handleCitySearch}
                city={cityName}
            />
            <Footer />
        </div>
    );
}

export default Home;
