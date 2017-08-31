import React, { Component } from 'react';

import MapWithSearch from './MapWithSearch';

import {connect} from 'react-redux'
import { addMapToStore, editMarker } from '../Reducers/Map';
import { editWeather, clearWeather } from "../Reducers/Weather";
import { pushSearchHistory } from '../Reducers/SearchHistory';


class MapContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      bounds: null,
      center: {
        lat: 40.7433083,
        lng: -73.9873796,
      },
      marker: {},
    };

    this.handleMapMounted = this.handleMapMounted.bind(this);
    this.handleBoundsChanged = this.handleBoundsChanged.bind(this);
    this.handleSearchBoxMounted = this.handleSearchBoxMounted.bind(this);
    this.handlePlacesChanged = this.handlePlacesChanged.bind(this);
  }

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
      const place = places[0]

      const bounds = new window.google.maps.LatLngBounds();

      bounds.union(place.geometry.viewport);

      const marker = { position: place.geometry.location };

      this.setState({
        center: marker.location,
        marker: marker,
      });

      this.props.editMarker(marker);
      this.props.clearWeather();
      this.props.editWeather(marker.position.lat(), marker.position.lng());
      this.props.pushSearchHistory(place.formatted_address);

      this._map.fitBounds(bounds);

    }
  }

  render() {
    console.log(this._map);
    return (
      <MapWithSearch
        containerElement={
          <div style={{ height: "100%", width: "100%" }} />
        }
        mapElement={
          <div style={{ height: "100%", width: "100%" }} />
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
  ({addMapToStore, editMarker, editWeather, clearWeather, pushSearchHistory})
)(MapContainer);

