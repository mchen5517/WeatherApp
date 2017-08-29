import React, { Component } from 'react';

import SingleWeather from './SingleWeather';

import {connect} from 'react-redux'

class CurrentWeather extends Component {
  render() {
    return (
      <div>
    { this.props.weather.daily && 
      <div className="container" style={{position: "absolute", bottom: "-98vh", left: "3vw", width: "22vw"}}>
        <div className="well single-weather-well col-xs-12">
          <SingleWeather day={this.props.weather.daily.data[0]} current={this.props.weather.currently} />
        </div>
      </div>
    }
    </div>
    )
  }
}

export default connect(({weather}) => ({weather}))(CurrentWeather);