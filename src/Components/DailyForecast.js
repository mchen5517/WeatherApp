import React, { Component } from 'react';
import SkyCon from 'react-skycons';

import {connect} from 'react-redux'

const formatForSkyCon = iconStr => {
  return iconStr.split('-').join('_').toUpperCase();
}

class DailyForecast extends Component {
  render() {
    return (
      <div>
        {
          this.props.weather.daily && this.props.weather.daily.data.map(day => 
            <div key={day.time} style={{padding: "0 0 0 0", height: "16%"}}>
              <h4 style={{textAlign: "center", fontSize: "3vh", padding: "0 0 0 0"}}>{(new Date(day.time * 1000)).getDate()}</h4>
              <div style={{width: "25%", margin: "auto", padding: "0 0 0 0 "}}>
                <SkyCon color="blue" icon={`${formatForSkyCon(day.icon)}`} autoplay={true}/>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default connect(({weather}) => ({weather}))(DailyForecast);