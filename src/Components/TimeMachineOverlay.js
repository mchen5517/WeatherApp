import React, { Component } from 'react';

import CalendarInput from './CalendarInput';
import WeatherGraph from './WeatherGraph';
import { toggleTimeMachineOverlay, clearWeatherTimeMachine } from "../Reducers/WeatherTimeMachine";

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

const GRAPH_CONTAINER_STYLE = {
  position: "absolute",
  left: "20vw",
  width: "60vw",
  top: "30vh",
  height: "50vh",
  backgroundColor: "rgba(255, 255, 255, .75)"
}

const SINGLE_GRAPH_STYLE = {
  height: "80%"
}

class TimeMachineOverlay extends Component {

  constructor(props){
    super(props);
    this.handleCloseButtonOnClick = this.handleCloseButtonOnClick.bind(this);
  }

  mapHourlyData(type, dataArr){
    return dataArr.map((ele, idx) => [ idx, ele[type] ]);
  }

  handleCloseButtonOnClick(){
    this.props.toggleTimeMachineOverlay();
    this.props.clearWeatherTimeMachine();
  }

  render() {
    return (
      <div>
        { this.props.weatherTimeMachine.active &&
          <div style={OVERLAY_STYLE}>
            <div style={CALENDAR_INPUT_STYLE}>
              <CalendarInput />
            </div>
            <button className="btn btn-link btn-lg" style={CLOSE_BUTTON_STYLE} onClick={this.handleCloseButtonOnClick}>
              <i className="fa fa-times"></i> Close
            </button>
            { 
              Object.getOwnPropertyNames(this.props.weatherTimeMachine.weather).length !== 0 && (
                <div className="well" style={GRAPH_CONTAINER_STYLE}>
                  <div className="text-center" style={{height: "20%"}}>{ this.props.weatherTimeMachine.weather.hourly.summary }</div>
                  <div className="col-xs-6" style={SINGLE_GRAPH_STYLE}>
                    <WeatherGraph 
                      data={this.mapHourlyData('temperature', this.props.weatherTimeMachine.weather.hourly.data)} 
                      xlabel="Time (hourly)" 
                      ylabel="Temperature (F)"
                      dataType="temperature"
                      title="Hourly Temperature" />
                  </div>
                  <div className="col-xs-6" style={SINGLE_GRAPH_STYLE}>
                    <WeatherGraph 
                      data={this.mapHourlyData('humidity', this.props.weatherTimeMachine.weather.hourly.data)} 
                      xlabel="Time (hourly)" 
                      ylabel="Humidity" 
                      dataType="humidity"
                      title="Hourly Humidity" />
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

export default connect(({weatherTimeMachine}) => ({weatherTimeMachine}), {toggleTimeMachineOverlay, clearWeatherTimeMachine})(TimeMachineOverlay);

// this.props.weatherTimeMachine.weather.hourly.data