import React from "react";
import Autocomplete from "react-google-autocomplete";
import classes from "../CSS/AutocompleteComponent.module.css";

const places = ["address", "city"];

const AutocompleteComponent = (props) => (
  <div>
    <Autocomplete
      options={{ types: ["address"] }}
      className={classes.form__input}
      apiKey={process.env.REACT_APP_GOOGLEMAPS_API_KEY}
      onPlaceSelected={(place) => {
        props.placeChanger(place);
      }}
      placeholder={props.placeholder}
    />
  </div>
);

export default AutocompleteComponent;
