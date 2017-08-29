import React, { Component } from 'react';

import {connect} from 'react-redux'

class HUDComponent extends Component{
  render() {
    return (
      <div>
        {this.props.content}
      </div>
    )
  }
}

export default connect(({weather}) => ({weather}))(HUDComponent);