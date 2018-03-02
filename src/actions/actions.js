import axios from 'axios';

const API_KEY = '6c6406df947a212a495f0ede8cd54cbe';
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
	const url = `${API_URL}&q=${city},us`;
	const req = axios.get(url);
	return {
		type: FETCH_WEATHER,
		payload: req
	};
}
