import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import GOOGLEMAPS_API_KEY from "../key";

const AutocompleteComponent = () => (
  <div>
    <GooglePlacesAutocomplete apiKey={GOOGLEMAPS_API_KEY} />
  </div>
);

export default AutocompleteComponent;
