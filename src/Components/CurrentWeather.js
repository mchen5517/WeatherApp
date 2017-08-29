import React, { Component } from 'react';
import SkyCon from 'react-skycons';

import {connect} from 'react-redux'

const formatForSkyCon = iconStr => {
  return iconStr.split('-').join('_').toUpperCase();
}

class CurrentWeather extends Component {
  render() {
    return (
      <div className="container fade in" style={{position: "absolute", width: "50vw", bottom: "-98vh", left: "25vw"}}>
        {
          this.props.weather.daily && this.props.weather.daily.data.slice(1, 7).map(day => 
            <div className="col-xs-2 well" key={day.time} style={{border: "0 .5vw 0 .5vw", padding: ".5vh", marginBottom: "0", backgroundClip: "content-box", border: "0", boxShadow: "0"}}>
              <div>
                <h3 className="text-center">{(new Date(day.time * 1000)).getDate()}</h3>
                <div>
                  <SkyCon color="black" icon={`${formatForSkyCon(day.icon)}`} autoplay={true}/>
                </div>
                <div>
                  <div className="col-xs-6">
                    <h3 className="text-primary">{Math.floor(day.temperatureMin)}</h3> 
                  </div>
                  <div className="col-xs-6">
                    <h3 className="pull-right text-danger">{Math.ceil(day.temperatureMax)}</h3>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default connect(({weather}) => ({weather}))(CurrentWeather);