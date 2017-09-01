/*****
  WeatherHUD 
  - main component for holding front layer of the app.
*****/

// Component Dependencies:
import HUDComponent from './HUDComponent';
import DailyForecast from './DailyForecast';
import CurrentWeather from './CurrentWeather';
import SearchHistoryComponent from './SearchHistoryComponent';

import React, { Component } from 'react';
import {connect} from 'react-redux'



const HUD_STYLE = {
  zIndex: "2",
  position: "absolute"
}

class WeatherHUD extends Component {
  render() {
    return (
      <div>
      { Object.getOwnPropertyNames(this.props.weather).length !== 0 && 
        <div style={HUD_STYLE}>
          <HUDComponent
            content={<DailyForecast />} />
          <HUDComponent
            content={<CurrentWeather />} />
        </div>
      }
        <div style={HUD_STYLE}>
          <HUDComponent 
          content={<SearchHistoryComponent />} />
        </div>
      </div>
    )
  }
}

export default connect(({weather}) => ({weather}), null)(WeatherHUD);