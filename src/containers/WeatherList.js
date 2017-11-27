import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
	renderList() {
		return (
			<tr>
				<td>City Here...</td>
				<td>Chart here...</td>
				<td>Chart here...</td>
				<td>Chart here...</td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (F)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.renderList()}
				</tbody>
			</table>
		)
	}
}

function maptStateToProps(state) {
	console.log('state provided to WeatherList', state);
	return { weatherList: state.weather }
}

export default connect(maptStateToProps)(WeatherList);