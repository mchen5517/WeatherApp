import React from 'react';

import { GoogleMap, withGoogleMap, Marker } from "react-google-maps";
import SearchBox from 'react-google-maps/lib/places/SearchBox'
import withScriptjs from "react-google-maps/lib/async/withScriptjs";


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
  fontSize: "3vh",
  outline: "none",
  textOverflow: "ellipses",
  padding: "0px 1% 0px 1%"
};

const MapWithSearch = withScriptjs(
  withGoogleMap(props => (
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
        inputPlaceholder="Enter a Place..."
        inputStyle={INPUT_STYLE}
      />
      <Marker position={props.marker.position} />

    </GoogleMap>
)));

export default MapWithSearch;