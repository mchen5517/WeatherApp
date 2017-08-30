import React, { Component } from 'react';

import {connect} from 'react-redux'

import HUDComponent from './HUDComponent';
import DailyForecast from './DailyForecast';
import CurrentWeather from './CurrentWeather';


const HUD_STYLE = {
  zIndex: "2",
  position: "absolute"
}

class WeatherHUD extends Component {
  render() {
    return (
      <div>
      { this.props.weather !== {} && 
        <div style={HUD_STYLE}>
          <HUDComponent
            content={<DailyForecast />} />
          <HUDComponent
            content={<CurrentWeather />} />
        </div>
      }
      </div>
    )
  }
}

export default connect(({weather}) => ({weather}), null)(WeatherHUD);