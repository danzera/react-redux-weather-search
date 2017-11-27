import { FETCH_WEATHER } from '../actions';

export default function weather(state = [], action) {
	console.log('FETCH_WEATHER', FETCH_WEATHER);
	console.log('action received', action);
	return state;
}