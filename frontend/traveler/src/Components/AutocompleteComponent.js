import React from "react";
import Autocomplete from "react-google-autocomplete";
import GOOGLEMAPS_API_KEY from "../key";

const AutocompleteComponent = (props) => (
  <div>
    <Autocomplete
      apiKey={GOOGLEMAPS_API_KEY}
      onPlaceSelected={(place) => {
        props.placeChanger(place);
      }}
    />
  </div>
);

export default AutocompleteComponent;
