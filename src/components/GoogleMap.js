import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCb0jba70obbiqUEJ7zr1aE5HmTiK-ESio&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `0px` }} />,
    containerElement: <div style={{ height: `0px` }} />,
    mapElement: <div style={{ height: `175px` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={11} defaultCenter={{ lat: props.lat, lng: props.lon }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: props.lat, lng: props.lng }} />
    )}
  </GoogleMap>
));

export default MyMapComponent;