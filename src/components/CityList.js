import React, { Component } from 'react';
import { connect } from 'react-redux'
import Chart from './Chart'
import GoogleMap from './GoogleMap' 

class CityList extends Component {

	renderWeather = (cityData) => {
		const temp = cityData.list.map(weather => weather.main.temp - 273.15);
		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);
		const lon = cityData.city.coord.lon
		const lat = cityData.city.coord.lat

		return (
			<tr key={cityData.city.name}>
				<td>{cityData.city.name}</td>
				<td>
					<Chart data={temp} color='red' unit='°C'/>					
				</td>
				<td>
					<Chart data={pressure} color='green' unit='hPa'/>
				</td>
				<td>
					<Chart data={humidity} color='blue' unit='%'/>
				</td>
			</tr>
		)
	}

	render() {
		return (
			<table className='table table-hover'>
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		weather: state.weather
	}
}

export default connect(mapStateToProps)(CityList)