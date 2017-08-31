import React, { Component } from 'react';

import {connect} from 'react-redux'

class SearchHistoryComponent extends Component {
  render() {
    return (
      <div>
        <div className="container" style={{position: "absolute", bottom: "-98vh", left: "75vw", width: "22vw", height: "30vh", overflow: "scroll"}}>
          <div>
            <a href="https://darksky.net/dev/" target="_blank">Powered by Dark Sky</a>
          </div>
          <div className="well">
            <h5 className="text-center">Recent Searches</h5>
            {
              this.props.searchHistory.map((place, idx) => (
                <h6 key={idx}>{place}</h6>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default connect(({searchHistory}) => ({searchHistory}))(SearchHistoryComponent);