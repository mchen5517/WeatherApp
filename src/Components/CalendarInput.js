import React, { Component } from 'react';

import { editWeatherTimeMachine, clearWeatherTimeMachine } from "../Reducers/WeatherTimeMachine";

import {connect} from 'react-redux'

import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class CalendarInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: moment()
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    const dateComp = moment(date);
    if(dateComp.isValid() && dateComp > moment().subtract(30, "days") && dateComp < moment().add(5, "days")){    
      this.setState({
        date
      });
      this.props.clearWeatherTimeMachine();
      this.props.editWeatherTimeMachine(this.props.map.marker.position.lat(), this.props.map.marker.position.lng(), date);
    }
  }

  render() {
    return (
      <div>
        <div className="col-xs-12">
          <DatePicker
            selected={this.state.date}
            onChange={this.handleChange}
            minDate={moment().subtract(30, "days")}
            maxDate={moment().add(5, "days")}
            placeholderText="Choose a Date"
            customInput={(
              <button 
                className="btn btn-default btn-block btn-lg">
                <h1>{this.state.date.format("YYYY-MM-DD")}</h1>
              </button>
            )}/>
        </div>
      </div>
    )
  }
}

export default connect(({map, weatherTimeMachine}) => ({map, weatherTimeMachine}), {editWeatherTimeMachine, clearWeatherTimeMachine})(CalendarInput);