import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Chart from '../components/Chart';

class WeatherList extends Component {
	renderList() {
		return _.map(this.props.weatherList, cityData => {
			return (
				<tr key={cityData.city.name}>
					<td>{cityData.city.name}</td>
					<td><Chart data={cityData} /></td>
					<td><Chart data={cityData} /></td>
					<td><Chart data={cityData} /></td>
				</tr>
			);
		});
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
	return { weatherList: state.weather }
}

export default connect(maptStateToProps)(WeatherList);