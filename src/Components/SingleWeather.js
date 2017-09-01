import React, { Component } from 'react';
import SkyCon from 'react-skycons';

import {connect} from 'react-redux'

const formatForSkyCon = iconStr => {
  return iconStr.split('-').join('_').toUpperCase();
}

class SingleWeather extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center">{(new Date(this.props.day.time * 1000)).getDate()}</h2>
        {
          this.props.current && (
            <div>
              <div className="col-xs-4 text-center">
                <h3>
                  <div><i className="fa fa-tint" aria-hidden="true"></i></div>
                  {Math.round(this.props.current.humidity * 100)}
                  <div>%</div>
                </h3>
              </div>
              <div className="col-xs-4 text-center">
                <h3>                  
                  <div><i className="fa fa-thermometer-half" aria-hidden="true"></i></div>
                  {Math.round(this.props.current.temperature)}
                  <div>F</div>
                </h3>
              </div>
              <div className="col-xs-4 text-center">
                <h3>                  
                  <div><i className="fa fa-paper-plane" aria-hidden="true"></i></div>
                  {Math.round(this.props.current.windSpeed)}
                  <div>mph</div>
                </h3>
              </div>
            </div>
          )
        }
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

export default connect(({weather}) => ({weather}))(SingleWeather);