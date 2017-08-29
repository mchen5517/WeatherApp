import React, { Component } from 'react';

import MapContainer from './Components/MapContainer';
import WeatherHUD from './Components/WeatherHUD';

class App extends Component {
  render() {
    return (
      <div className="App" style={{width: "100vw", height: "100vh"}}>
        <WeatherHUD />
        <MapContainer />
      </div>
    );
  }
}

export default App;
