import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Chart from '../components/Chart';

class WeatherList extends Component {
	renderList() {
		return _.map(this.props.weatherList, cityData => {
			const tempData = _.map(cityData.list, dataSnapshot => Math.round((dataSnapshot.main.temp * 9 / 5) - 459.67));
			const pressureData = _.map(cityData.list, dataSnapshot => dataSnapshot.main.pressure);
			const humidityData = _.map(cityData.list, dataSnapshot => dataSnapshot.main.humidity);
			console.log('city data', cityData); 
			return (
				<tr key={cityData.city.name}>
					<td>{cityData.city.name}</td>
					<td><Chart data={tempData} /></td>
					<td><Chart data={pressureData} /></td>
					<td><Chart data={humidityData} /></td>
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