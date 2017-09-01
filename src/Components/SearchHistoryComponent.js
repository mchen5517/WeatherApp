/*****
  SearchHistoryComponent 
  - component for the search history panel.
*****/

import React, { Component } from 'react';
import {connect} from 'react-redux'

const SEARCH_HISTORY_STYLE = {
  position: "absolute", 
  bottom: "-95vh", 
  left: "75vw", 
  width: "22vw", 
  height: "30vh" 
}

class SearchHistoryComponent extends Component {
  render() {
    return (
      <div>
        <div className="container" style={SEARCH_HISTORY_STYLE}>
          <div>
            <a href="https://darksky.net/dev/" target="_blank">Weather Information Powered by Dark Sky</a>
          </div>
          <div className="well" style={{height: "100%"}}>
            <h5 className="text-center" style={{height: "10%"}}>Recent Searches</h5>
            <div style={{height: "80%", overflow: "scroll"}}>
              {
                this.props.searchHistory.map((place, idx) => (
                  <h6 key={idx}>{place}</h6>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(({searchHistory}) => ({searchHistory}))(SearchHistoryComponent);