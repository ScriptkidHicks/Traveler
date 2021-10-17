import React from "react";
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

const MainMaps = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLEMAPS_API_KEY,
    libraries,
  });

  const [origin2, setOrigin2] = React.useState("lahore");
  const [destination2, setDestination2] = React.useState("gujranwala");
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

  const DirectionsServiceOption = {
    destination: destination2,
    origin: origin2,
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
          options={DirectionsServiceOption}
          callback={directionsCallback}
        />
      </GoogleMap>
    </div>
  );
};

export default MainMaps;
