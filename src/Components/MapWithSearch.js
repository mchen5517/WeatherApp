import React from 'react';

import { GoogleMap, withGoogleMap, Marker } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";
import SearchBox from 'react-google-maps/lib/places/SearchBox'

const INPUT_STYLE = {
  boxSizing: "border-box",
  MozBoxSizing: "border-box",
  border: "1px solid transparent",
  width: "80%",
  height: "5%",
  margin: "1% auto 0 auto",
  left: "0px",
  right: "0px",
  borderRadius: "1px",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
  fontSize: "14px",
  outline: "none",
  textOverflow: "ellipses",
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
    <Marker position={props.marker.position} />

  </GoogleMap>
));

export default MapWithSearch;

    // {props.markers.map((marker, index) => (
    //   <Marker position={marker.position} key={index} />
    // ))}