import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
	// need to use constructor to keep track of our input's value
	constructor(props) {
		super(props);
		// need to bind context of "this" to our callback function so we can reference "this.state" within the callback function
		this.onFormSubmit = this.onFormSubmit.bind(this);

		this.state = {
			city: ''
		}
	}
	
	onFormSubmit(e) {
		e.preventDefault();
		this.setState({ city: '' });
		this.props.fetchWeather(this.state.city);
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<div className="input-group">
					<input className="form-control" type="text" value={this.state.city} placeholder="Search for a city..." onChange={e => this.setState({ city: e.target.value })} />
					<span className="input-group-btn">
						<button className="btn btn-primary" type="submit">Search</button>
					</span>
				</div>
			</form>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);