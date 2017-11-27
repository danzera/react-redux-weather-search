import { FETCH_WEATHER } from '../actions';

export default function weather(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			if (action.error) {
				alert('City not found. Please search again.');
				return state;
			} else {
				return [action.payload.data, ...state];
			}
		default:
			return state;
	}
}