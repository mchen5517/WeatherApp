import React, { Component } from 'react';

import MapWithSearch from './MapWithSearch';

import {connect} from 'react-redux'

import { addMapToStore, editMarker } from '../Reducers/Map';


class MapContainer extends Component {

  state = {
    bounds: null,
    center: {
      lat: 53.22346,
      lng: -4.1980,
    },
    marker: {},
  };

  handleMapMounted = this.handleMapMounted.bind(this);
  handleBoundsChanged = this.handleBoundsChanged.bind(this);
  handleSearchBoxMounted = this.handleSearchBoxMounted.bind(this);
  handlePlacesChanged = this.handlePlacesChanged.bind(this);

  handleMapMounted(map) {
    this._map = map;
    this.props.addMapToStore(map);
  }

  handleBoundsChanged() {
    this.setState({
      bounds: this._map.getBounds(),
      center: this._map.getCenter(),
    });
  }

  handleSearchBoxMounted(searchBox) {
    this._searchBox = searchBox;
  }

  handlePlacesChanged() {
    const places = this._searchBox.getPlaces();

    if(places.length > 0){

      const bounds = new window.google.maps.LatLngBounds();

      bounds.union(places[0].geometry.viewport);

      const marker = { position: places[0].geometry.location };

      this.setState({
        center: marker.location,
        marker: marker,
      });

      this.props.editMarker(marker);

      this._map.fitBounds(bounds);

    }
  }

  render() {
    return (
      <MapWithSearch
        containerElement={
          <div style={{ height: `100%`, width: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%`, width: `100%` }} />
        }
        center={this.state.center}
        onMapMounted={this.handleMapMounted}
        onBoundsChanged={this.handleBoundsChanged}
        onSearchBoxMounted={this.handleSearchBoxMounted}
        bounds={this.state.bounds}
        onPlacesChanged={this.handlePlacesChanged}
        marker={this.state.marker}
      />
    );
  }
}

// Connect to store 

export default connect(
  ({map}) => ({map}),
  ({addMapToStore, editMarker})
)(MapContainer);

