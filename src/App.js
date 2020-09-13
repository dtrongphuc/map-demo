import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import logo from './logo.svg';
import './App.css';

mapboxgl.accessToken =
	'pk.eyJ1Ijoia29zb2N1Y2RhdCIsImEiOiJja2YxMWtqOWIxMDhvMnhvOGs5eWVzdzNlIn0.nQxSzIB9bED3DQ29nppPUQ';

function App() {
	useEffect(() => {
		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
			center: [-74.5, 40], // starting position [lng, lat]
			zoom: 9, // starting zoom
		});

		map.addControl(
			new mapboxgl.GeolocateControl({
				position: {
					enableHighAccuracy: true,
				},
				trackUserLocation: true,
			})
		);
	}, []);

	return (
		<div id='map' className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
