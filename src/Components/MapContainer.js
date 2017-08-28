import React, { Component } from 'react';

import MapWithSearch from './MapWithSearch';

export default class MapContainer extends Component {

  state = {
    bounds: null,
    center: {
      lat: 53.22346,
      lng: -4.1980,
    },
    markers: [],
  };

  handleMapMounted = this.handleMapMounted.bind(this);
  handleBoundsChanged = this.handleBoundsChanged.bind(this);
  handleSearchBoxMounted = this.handleSearchBoxMounted.bind(this);
  handlePlacesChanged = this.handlePlacesChanged.bind(this);

  handleMapMounted(map) {
    this._map = map;
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

    const bounds = new window.google.maps.LatLngBounds();

    places.map(place => {
      place.geometry.viewport ? bounds.union(place.geometry.viewport) : bounds.extend(place.geometry.location)
    });

    const markers = places.map(place => ({
      position: place.geometry.location,
    }));

    const mapCenter = markers.length > 0 ? markers[0].position : this.state.center;

    this.setState({
      center: mapCenter,
      markers,
    });

    this._map.fitBounds(bounds);
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
        markers={this.state.markers}
      />
    );
  }
}