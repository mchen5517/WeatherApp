import React, { Component } from 'react';

import MapContainer from './Components/MapContainer';
import WeatherHUD from './Components/WeatherHUD';
import TimeMachineOverlay from './Components/TimeMachineOverlay';

class App extends Component {
  render() {
    return (
      <div className="App" style={{width: "100vw", height: "100vh"}}>
        <TimeMachineOverlay />
        <WeatherHUD />
        <MapContainer />
      </div>
    );
  }
}

export default App;
