import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	function handleResponse(response) {
		setWeatherData({
			ready: true,
			temperature: response.data.main.temp,
			humidity: response.data.main.humidity,
			date: "Wednesday 07:00",
			description: response.data.weather[0].description,
			iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
			wind: response.data.wind.speed,
			city: response.data.name,
		});
	}
	if (weatherData.ready) {
		return (
			<div className='Weather'>
				<form>
					<div className='row'>
						<div className='col-9'>
							<input
								className='form-control'
								type='search'
								placeholder='Enter a city'
								autoFocus='on'
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
				<h1>{weatherData.city}</h1>
				<ul>
					<li>Wednesday 07:00</li>
					<li className='text-capitalize'>{weatherData.description}</li>
				</ul>
				<div className='row'>
					<div className='col-6 parent'>
						<img src={weatherData.iconUrl} alt={weatherData.description} />
						<span className='temperature'>
							{" "}
							{Math.round(weatherData.temperature)}
						</span>
						<span className='unit'>°F</span>
					</div>
					<div className='col-6'>
						<ul>
							<li>Precipitation: 15%</li>
							<li>Humidity: {weatherData.humidity}%</li>
							<li>Wind: {weatherData.wind}km/h</li>
						</ul>
					</div>
				</div>
			</div>
		);
	} else {
		const apiKey = "f4d989e0a37469e143375a913c800d40";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
		axios.get(apiUrl).then(handleResponse);
		return "Loading...";
	}
}
