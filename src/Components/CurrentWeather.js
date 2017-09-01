/*****
  CurrentWeather
  - component for the left panel holding the button to open the TimeMachine panel and the current weather conditions.
*****/

// Component Dependencies:
import SingleWeather from './SingleWeather';

// Reducer Dependencies:
import { toggleTimeMachineOverlay } from "../Reducers/WeatherTimeMachine";

import React, { Component } from 'react';
import {connect} from 'react-redux'

const CURRENT_WEATHER_STYLE = {
  position: "absolute", 
  bottom: "-98vh", 
  left: "3vw", 
  width: "22vw"
}

class CurrentWeather extends Component {
  render() {
    return (
      <div>
        { 
          this.props.weather.daily && 
          <div className="container" style={CURRENT_WEATHER_STYLE}>
            <div className="well no-padding no-margin col-xs-12">
              <button className="btn btn-info btn-block" onClick={this.props.toggleTimeMachineOverlay}>
                Time Machine
              </button>
            </div>
            <div className="well single-weather-well col-xs-12">
              <SingleWeather day={this.props.weather.daily.data[0]} current={this.props.weather.currently} />
            </div>
          </div>
        }
      </div>
    )
  }
}

export default connect(({weather}) => ({weather}), {toggleTimeMachineOverlay})(CurrentWeather);