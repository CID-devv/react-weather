import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
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
			<h1>New York</h1>
			<ul>
				<li>Wednesday 07:00</li>
				<li>Cloudy</li>
			</ul>
			<div className='row'>
				<div className='col-6 parent'>
					<img
						src='https://ssl.gstatic.com/onebox/weather/64/cloudy.png'
						alt='cloudy'
					/>

					<span className='temperature'>6</span>
					<span className='unit'>°C</span>
				</div>
				<div className='col-6'>
					<ul>
						<li>Precipitation: 15%</li>
						<li>Humidity: 72%</li>
						<li>Wind: 13 km/h</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
