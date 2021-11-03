// This component is used to render directions on a google maps component
// Written by Tammas Hicks
// Team //TODO
// last modified on 10/29/21

import React from "react";
// this is so we can use the react namespace
import {
  GoogleMap,
  useLoadScript,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import styled from "styled-components";
// imported styled to do css work in same file. Eventual refactoring should inlcude this in all files.

const libraries = ["places", "directions"];
// this is how we get the map to map to render places and directions

const mapContainerStyle = {
  // we want the map to fill its entire container. We can't use a styled div, because it's an imported component
  width: "100%",
  height: "100%",
  borderRadius: "30px",
};
const center = {
  // centered over eugene. Eventualy this should be changed into a prop that accepts user querried location via props
  lat: 44.052071,
  lng: -123.086754,
};


// main maps object
const MainMaps = (props) => {
  const [response, setResponse] = React.useState(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPS_API_KEY,
    libraries,
  });

  const directionsCallback = (response) => {
    // this is how we monitor map response, and console log any errors
    console.log("response ", response);
    console.log("waypoints: ", props.waypoints);

    if (response !== null) {
      if (response.status === "OK") {
        setResponse(response);
      } else {
        console.log("response: ", response);
      }
    }
  };

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    // this is a special version of useEffect, so that we can achieve re-rendering post load
    mapRef.current = map;
  }, []);
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "loading maps";

  const DirectionsServiceOption = {
    destination: props.origin,
    origin: props.origin,
    waypoints: props.waypoints,
    travelMode: "DRIVING",
    // eventually I would like to change this so that it can accept multiple modes
  };

  return (
    <MapContainer>
      {/*the map container is how we modify the containing style,
       so that we don't have to repeatedly inject different styles to the map itself.*/}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        onLoad={onMapLoad}
      >
        {
        /* Check that the response is valid, then render */
        response !== null && (
          <DirectionsRenderer
            options={{
              directions: response,
            }}
          />
        )}
        <DirectionsService
          options={DirectionsServiceOption}
          callback={directionsCallback}
        />
      </GoogleMap>
    </MapContainer>
  );
};

export default MainMaps;

const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0;
  margin: 0;
  height: 80vh;
  width: 80vw;
  border-radius: 30px;
  margin: auto;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 1);
`;
