import React, {Component} from 'react';

import dygraph from 'dygraphs'

// export default class WeatherDygraph extends Component {
//   render() {
//     return (
//       <Dygraph 
//         data={this.props.data} 
//         xlabel={this.props.xlabel} 
//         ylabel={this.props.ylabel} />
//     )
//   }
// }

export default class WeatherDygraph extends Component {

  componentDidMount(){
    this.g = new dygraph(`dygraph-${this.props.dataType}`, this.props.data);
  }

  render() {
    return (
      <div id={`dygraph-${this.props.dataType}`} style={{width: "100%", height: "100%"}}>
        
      </div>
    )
  }
}