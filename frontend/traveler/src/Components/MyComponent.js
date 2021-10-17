import GOOGLEMAPS_API_KEY from "../key";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  GoogleMap,
  useLoadScript,
  DirectionsRenderer,
} from "@react-google-maps/api";

const mapContainerStyle = {
  height: "20vw",
  width: "20vw",
};
const options = {
  disableDefaultUI: true,
};
const center = {
  lat: 44.052071,
  lng: -123.086754,
};
const libraries = ["places"];

function MyComponent() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLEMAPS_API_KEY,
    libraries,
  });

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const mapRef = React.useRef();

  if (loadError) return "Error!";
  if (!isLoaded) return "loading...";

  return (
    <div>
      <script src="./MyDirectionsRenderer.js"></script>
      <h1>Bears!</h1>
      <div id="map"></div>
    </div>
  );
}
export default React.memo(MyComponent);
