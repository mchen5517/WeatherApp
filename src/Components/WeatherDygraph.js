import React, {Component} from 'react';

import Dygraph from 'react-dygraphs';

export default class WeatherDygraph extends Component {
  render() {
    return (
      <Dygraph 
        data={this.props.data} 
        xlabel={this.props.xlabel} 
        ylabel={this.props.ylabel} />
    )
  }
}