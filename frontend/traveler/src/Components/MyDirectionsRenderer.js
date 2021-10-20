import React, { useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import GOOGLEMAPS_API_KEY from "../key";

const libraries = ["places", "directions"];
const mapContainerStyle = {
  width: "100%",
  height: "50vh",
};
const center = {
  lat: 31.582045,
  lng: 74.329376,
};
const options = {};

const MainMaps = (props) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLEMAPS_API_KEY,
    libraries,
  });

  const [org3, setOrg3] = useState(props.dest1);
  const [destination3, setDestination3] = useState(props.dest2);

  const waypts = [
    { location: "salem, or", stopover: true },
    { location: "Bend, or", stopover: true },
  ];

  const [origin2, setOrigin2] = React.useState(props.org1);
  const [destination2, setDestination2] = React.useState(props.dest1);
  const [response, setResponse] = React.useState(null);

  const directionsCallback = (response) => {
    console.log(response);

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

  const DirectionsServiceOptionOne = {
    destination: destination2,
    origin: origin2,
    travelMode: "DRIVING",
  };

  const DirectionsServiceOptionTwo = {
    destination: destination3,
    origin: org3,
    waypoints: waypts,
    travelMode: "DRIVING",
  };

  return (
    <div>
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
    </div>
  );
};

export default MainMaps;
