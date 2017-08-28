import React, { Component } from 'react';
import { GoogleMap, withGoogleMap, Marker } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";
import SearchBox from 'react-google-maps/lib/places/SearchBox'

// const INPUT_STYLE = {
//   boxSizing: `border-box`,
//   MozBoxSizing: `border-box`,
//   border: `1px solid transparent`,
//   width: `240px`,
//   height: `32px`,
//   marginTop: `27px`,
//   padding: `0 12px`,
//   borderRadius: `1px`,
//   boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
//   fontSize: `14px`,
//   outline: `none`,
//   textOverflow: `ellipses`,
// };

// const MapContainer = withScriptjs(
//   withGoogleMap(props => {
//     return (
//       <GoogleMap 
//         defaultZoom={3}
//         defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
//         onClick={props.onMapClick}
//         >
//         <SearchBox 
//           ref={props.onSearchBoxMounted}
//           bounds={props.bounds}
//           controlPosition={window.google.maps.ControlPosition.TOP_LEFT}
//           onPlacesChanged={props.onPlacesChanged}
//           inputPlaceholder="Customized your placeholder"
//           inputStyle={INPUT_STYLE} />
//         {props.markers.map(marker => (
//           <Marker
//             {...marker}
//             onRightClick={() => props.onMarkerRightClick(marker)}
//           />
//         ))}
//       </GoogleMap>
//     )
//   })
// );

// export default MapContainer;

const INPUT_STYLE = {
  boxSizing: `border-box`,
  MozBoxSizing: `border-box`,
  border: `1px solid transparent`,
  width: `80%`,
  height: `5%`,
  margin: `1% auto 0 auto`,
  left: `0px`,
  right: `0px`,
  borderRadius: `1px`,
  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
  fontSize: `14px`,
  outline: `none`,
  textOverflow: `ellipses`,
};

const MapWithSearch = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={15}
    center={props.center}
    onBoundsChanged={props.onBoundsChanged}
  >
    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={window.google.maps.ControlPosition.TOP_LEFT}
      onPlacesChanged={props.onPlacesChanged}
      inputPlaceholder="Enter Address..."
      inputStyle={INPUT_STYLE}
    />
    {props.markers.map((marker, index) => (
      <Marker position={marker.position} key={index} />
    ))}
  </GoogleMap>
));

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