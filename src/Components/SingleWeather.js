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
        <h3 className="text-center">{(new Date(this.props.day.time * 1000)).getDate()}</h3>
        <div>
          <SkyCon color="black" icon={`${formatForSkyCon(this.props.day.icon)}`} autoplay={true}/>
        </div>
        <div>
          <div className="col-xs-6">
            <h3 className="text-primary">{Math.floor(this.props.day.temperatureMin)}</h3> 
          </div>
          <div className="col-xs-6">
            <h3 className="pull-right text-danger">{Math.ceil(this.props.day.temperatureMax)}</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(({weather}) => ({weather}))(DailyForecast);