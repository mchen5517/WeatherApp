/*****
  WeatherGraph 
  - component for containing the graph.
  - takes a title, xlabel (x-axis label), ylabel (y-axis label), datatype (what is being measured), and data (in the form [[x_1, y_1], ...])
*****/

import React, {Component} from 'react';

import { Chart } from 'react-google-charts';

export default class WeatherGraph extends Component {

  render(){
    return (
      <Chart 
        chartType="LineChart"
        rows={this.props.data}
        columns={[
          {
            type: 'number',
            label: this.props.xlabel,
          },
          {
            type: 'number',
            label: this.props.ylabel,
          }
          ]}
        width={"100%"}
        height={"100%"}
        graph_id={`line-chart-${this.props.dataType}`}
        options={{
          title: this.props.title,
          hAxis: {title: this.props.xlabel},
          vAxis: {title: this.props.ylabel},
          legend: false
        }}
        />
    )
  }
}