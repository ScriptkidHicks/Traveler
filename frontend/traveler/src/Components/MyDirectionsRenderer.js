// This component is used to render directions on a google maps component
// Written by Tammas Hicks
// Team //TODO
// last modified on 10/29/21

import React from "react";
import {
  GoogleMap,
  useLoadScript,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import styled from "styled-components";

const libraries = ["places", "directions"];
const mapContainerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "30px",
};
const center = {
  lat: 31.582045,
  lng: 74.329376,
};

const MainMaps = (props) => {
  const [response, setResponse] = React.useState(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPS_API_KEY,
    libraries,
  });

  const directionsCallback = (response) => {
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
    mapRef.current = map;
  }, []);
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "loading maps";

  const DirectionsServiceOptionTwo = {
    destination: props.origin,
    origin: props.origin,
    waypoints: props.waypoints,
    travelMode: "DRIVING",
  };

  return (
    <MapContainer>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        onLoad={onMapLoad}
      >
        {response !== null && (
          <DirectionsRenderer
            options={{
              directions: response,
            }}
          />
        )}
        <DirectionsService
          options={DirectionsServiceOptionTwo}
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
