import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
	const [unit, setUnit] = useState("fahrenheit");

	function convertToCelsius(e) {
		e.preventDefault();
		setUnit("celsius");
	}

	function convertToFahrenheit(e) {
		e.preventDefault();
		setUnit("fahrenheit");
	}

	function celsius() {
		return props.celsius((props.fahrenheit - 32) * 5) / 9;
	}

	if (unit === "fahrenheit") {
		return (
			<div className='WeatherTemperature'>
				<span className='temperature'>{Math.round(props.fahrenheit)}</span>
				<span className='unit'>
					°F |
					<a href='/' onclick={convertToCelsius}>
						{" "}
						°C{" "}
					</a>
				</span>
			</div>
		);
	} else {
		return (
			<div className='WeatherTemperature'>
				<span className='temperature'>{Math.round(celsius())}</span>
				<span className='unit'>
					°C |
					<a href='/' onclick={convertToFahrenheit}>
						{" "}
						°F{" "}
					</a>
				</span>
			</div>
		);
	}
}
