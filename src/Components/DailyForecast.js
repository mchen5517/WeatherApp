/*****
  DailyForecast 
  - component for holding the next 6 days of weather.
*****/

// Component Dependencies:
import SingleWeather from './SingleWeather';

import React, { Component } from 'react';
import {connect} from 'react-redux'

const DAILY_FORECAST_STYLE = {
  position: "absolute", 
  width: "50vw", 
  bottom: "-98vh", 
  left: "25vw"  
}

class DailyForecast extends Component {
  render() {
    return (
      <div className="container" style={DAILY_FORECAST_STYLE}>
        {
          this.props.weather.daily && this.props.weather.daily.data.slice(1, 7).map(day => 
            <div className="col-xs-2 well single-weather-well" key={day.time}>
              <SingleWeather day={day} />
            </div>
          )
        }
      </div>
    )
  }
}

export default connect(({weather}) => ({weather}))(DailyForecast);