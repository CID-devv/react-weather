import Weather from "./Weather";
import "./App.css";

export default function App() {
	return (
		<div className='App'>
			<div className='container'>
				<Weather defaultCity='New York' />
				<footer>
					<p>
						This project was coded by{" "}
						<a
							href='http://www.cassandradauphin.com'
							target='_blank'
							rel='noreferrer noopener'>
							Cassandra Dauphin{" "}
						</a>
						and is{" "}
						<a
							href='https://github.com/CalebDauphin/react-weather'
							target='_blank'
							rel='noreferrer noopener'>
							open sourced
						</a>
					</p>
				</footer>
			</div>
		</div>
	);
}
