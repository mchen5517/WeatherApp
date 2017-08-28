import React, { Component } from 'react';
import logo from './logo.svg';

import MapContainer from './Components/MapContainer';

const googleMapURL = "https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyCip66xOIiDkd1h8T723WFID-zAApGddE4";

class App extends Component {
  render() {
    return (
      <div className="App" style={{width: "100vw", height: "100vh"}}>
        <MapContainer 
        />
      </div>
    );
  }
}

export default App;
