import React, { Component } from 'react';

import SingleWeather from './SingleWeather';

import {connect} from 'react-redux'

class DailyForecast extends Component {
  render() {
    return (
      <div className="container fade in" style={{position: "absolute", width: "50vw", bottom: "-98vh", left: "25vw"}}>
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