import React, { Component } from 'react';

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
            customInput={(
              <button 
                className="btn btn-default btn-block">
                {this.state.date.format("YYYY-MM-DD")}
              </button>
            )}/>
        </div>
      </div>
    )
  }
}

export default connect()(CalendarInput);