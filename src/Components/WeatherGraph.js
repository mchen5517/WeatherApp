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