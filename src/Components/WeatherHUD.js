import React, { Component } from 'react';

import {connect} from 'react-redux'

import HUDComponent from './HUDComponent';
import DailyForecast from './DailyForecast';

const HUD_STYLE = {
  zIndex: "2",
  position: "absolute"
}

class WeatherHUD extends Component {
  render() {
    return (
      <div style={HUD_STYLE}>
        <HUDComponent
          content={<DailyForecast />} />
      </div>
    )
  }
}

export default connect(({weather}) => ({weather}), null)(WeatherHUD);