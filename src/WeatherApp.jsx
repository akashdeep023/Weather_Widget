import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import './WeatherApp.css'
import { useState } from "react";
import '@fontsource/roboto/500.css';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        // city: "Delhi",
		// feelslike: 24.48,
		// temp: 34.43,
		// tempMin: 34.04,
		// tempMax: 25.94,
		// humidity: 43,
		// weather: "haze",
    });
    let infoWeather = (infoWeather) => {
        setWeatherInfo(infoWeather);
    }
	return (
		<div className="WeatherApp">
			<h1 className="weatherHead">Weather App</h1>
			<SearchBox infoWeather={infoWeather} />
			<InfoBox info={weatherInfo} />
		</div>
	);
}
