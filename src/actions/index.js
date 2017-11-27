import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	console.log('fetchWeather called', city);
	const API_KEY = 'c844d2ab8676e10f2d45e46f217266cd';
	const url = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${city},us`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}