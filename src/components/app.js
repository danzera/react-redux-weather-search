import React, { Component } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import WeatherList from '../containers/WeatherList';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
