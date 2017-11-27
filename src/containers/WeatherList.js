import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
	render() {
		return (
			<div>
				WeatherList
			</div>
		)
	}
}

function maptStateToProps(state) {
	console.log('state provided to WeatherList', state);
	return { weatherList: state.weather }
}

export default connect(maptStateToProps)(WeatherList);