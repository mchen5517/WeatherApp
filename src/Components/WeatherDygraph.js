import React, {Component} from 'react';

import dygraph from 'dygraphs'

import './WeatherDygraph.css';

export default class WeatherDygraph extends Component {

  componentDidMount(){
    this.g = new dygraph(
      `dygraph-${this.props.dataType}`, 
      this.props.data,
      {labels: ["Hour" , this.props.dataType], xlabel: this.props.xlabel, ylabel: this.props.ylabel, strokeWidth: 2}
    );
  }

  render() {
    return (
      <div id={`dygraph-${this.props.dataType}`} style={{width: "100%", height: "100%"}}>
        
      </div>
    )
  }
}