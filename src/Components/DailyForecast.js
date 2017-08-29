import React, { Component } from 'react';
import SkyCon from 'react-skycons';

import SingleWeather from './SingleWeather';

import {connect} from 'react-redux'

const formatForSkyCon = iconStr => {
  return iconStr.split('-').join('_').toUpperCase();
}

class DailyForecast extends Component {
  render() {
    return (
      <div className="container fade in" style={{position: "absolute", width: "50vw", bottom: "-98vh", left: "25vw"}}>
        {
          this.props.weather.daily && this.props.weather.daily.data.slice(1, 7).map(day => 
            <div className="col-xs-2 well" key={day.time} style={{border: "0 .5vw 0 .5vw", padding: ".5vh", marginBottom: "0", backgroundClip: "content-box", border: "0", boxShadow: "0"}}>
              <SingleWeather day={day} />
            </div>
          )
        }
      </div>
    )
  }
}

export default connect(({weather}) => ({weather}))(DailyForecast);