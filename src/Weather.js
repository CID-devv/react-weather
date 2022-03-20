import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState(props.defaultCity);

	function handleResponse(response) {
		setWeatherData({
			ready: true,
			temperature: response.data.main.temp,
			humidity: response.data.main.humidity,
			date: new Date(response.data.dt * 1000),
			description: response.data.weather[0].description,
			iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
			wind: response.data.wind.speed,
			city: response.data.name,
		});
	}

	function search() {
		const apiKey = "f4d989e0a37469e143375a913c800d40";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleSubmit(e) {
		e.preventDefault();
		search();
	}

	function handleCityChange(e) {
		setCity(e.target.value);
	}

	if (weatherData.ready) {
		return (
			<div className='Weather'>
				<form onSubmit={handleSubmit}>
					<div className='row'>
						<div className='col-9'>
							<input
								className='form-control'
								type='search'
								placeholder='Enter a city'
								autoFocus='on'
								onChange={handleCityChange}
							/>
						</div>
						<div className='col-3'>
							<input
								className='btn btn-primary w-100'
								type='submit'
								value='Search'
							/>
						</div>
					</div>
				</form>
				<WeatherInfo data={weatherData} />
			</div>
		);
	} else {
		search();
		return "Loading...";
	}
}
