import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import GoogleMap from '../components/GoogleMap';
import Chart from '../components/Chart';

class WeatherList extends Component {
	renderList() {
		return _.map(this.props.weatherList, cityData => {
			const tempData = _.map(cityData.list, dataSnapshot => _.round((dataSnapshot.main.temp * 9 / 5) - 459.67));
			const pressureData = _.map(cityData.list, dataSnapshot => dataSnapshot.main.pressure);
			const humidityData = _.map(cityData.list, dataSnapshot => dataSnapshot.main.humidity);
			const { lat, lon } = cityData.city.coord;
			return (
				<tr key={cityData.city.name}>
					<td><GoogleMap lat={lat} lng={lon} /></td>
					<td><Chart data={tempData} color="red" units="&deg;F" /></td>
					<td><Chart data={pressureData} color="blue" units="hPa" /></td>
					<td><Chart data={humidityData} color="green" units="%" /></td>
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
						<th>Temperature (&deg;F)</th>
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