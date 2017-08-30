import React, { Component } from 'react';

import CalendarInput from './CalendarInput';
import WeatherDygraph from './WeatherDygraph';
import { toggleTimeMachineOverlay } from "../Reducers/WeatherTimeMachine";

import {connect} from 'react-redux'

const OVERLAY_STYLE = {
  position: "fixed",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, .75)",
  zIndex: "3"
}

const CLOSE_BUTTON_STYLE = {
  position: "absolute",
  right: "0"
}

const CALENDAR_INPUT_STYLE = {
  position: "absolute",
  right: "40vw",
  width: "20vw",
  textAlign: "center",
  top: "5vh"
}

const GRAPH_CONTAINER_STYLE ={
  position: "absolute",
  left: "25vw",
  width: "50vw",
  top: "40vh",
  height: "50vh"
}

class TimeMachineOverlay extends Component {

  mapHourlyData(type, dataArr){
    return dataArr.map((ele, idx) => [ idx, ele[type] ]);
  }

  render() {
    return (
      <div>
        { this.props.weatherTimeMachine.active &&
          <div style={OVERLAY_STYLE}>
            <div style={CALENDAR_INPUT_STYLE}>
              <CalendarInput />
            </div>
            <button className="btn btn-link" style={CLOSE_BUTTON_STYLE} onClick={this.props.toggleTimeMachineOverlay}>
              <i className="fa fa-times"></i> Close
            </button>
            { 
              Object.getOwnPropertyNames(this.props.weatherTimeMachine.weather).length !== 0 && (
                <div style={GRAPH_CONTAINER_STYLE}>
                  <div className="col-xs-6">
                    <WeatherDygraph 
                      data={this.mapHourlyData('temperature', this.props.weatherTimeMachine.weather.hourly.data)} 
                      xlabel="Time (hourly)" 
                      ylabel="Temperature (F)" />
                  </div>
                  <div className="col-xs-6">
                    <WeatherDygraph 
                      data={this.mapHourlyData('humidity', this.props.weatherTimeMachine.weather.hourly.data)} 
                      xlabel="Time (hourly)" 
                      ylabel="Humidity" />
                  </div>
                </div>
              )
            }
          </div>
        }
      </div>
    )
  }
}

export default connect(({weatherTimeMachine}) => ({weatherTimeMachine}), {toggleTimeMachineOverlay})(TimeMachineOverlay);

// this.props.weatherTimeMachine.weather.hourly.data