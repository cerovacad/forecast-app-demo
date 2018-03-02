import React, { Component } from 'react';
import Search from './Search'
import CityList from './CityList'

class App extends Component {
  render() {
    return (
      <div>
        <Search/>
        <CityList/>
      </div>
    );
  }
}

export default App;
