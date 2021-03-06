/*****
  MapContainer 
  - component for holding the Google Map with Search Box.  Deals with dispatching calls for weather information.
*****/

// Component Dependencies:
import MapWithSearch from './MapWithSearch';

// Reducer Dependencies:
import { addMapToStore, editMarker } from '../Reducers/Map';
import { editWeather, clearWeather } from "../Reducers/Weather";
import { pushSearchHistory } from '../Reducers/SearchHistory';

import React, { Component } from 'react';
import Spinner from 'react-spinner';
import {connect} from 'react-redux'

const GOOGLE_MAP_URL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`

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
    return (
      <MapWithSearch
        googleMapURL={GOOGLE_MAP_URL}
        loadingElement={<Spinner />}
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

export default connect(
  ({map}) => ({map}),
  ({addMapToStore, editMarker, editWeather, clearWeather, pushSearchHistory})
)(MapContainer);

