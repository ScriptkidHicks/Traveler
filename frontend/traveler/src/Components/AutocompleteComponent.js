import React from "react";
import Autocomplete from "react-google-autocomplete";
import GOOGLEMAPS_API_KEY from "../key";
import classes from "../CSS/AutocompleteComponent.module.css";

const AutocompleteComponent = (props) => (
  <div>
    <Autocomplete
      className={classes.form__input}
      apiKey={GOOGLEMAPS_API_KEY}
      onPlaceSelected={(place) => {
        props.placeChanger(place);
      }}
      placeholder={props.placeholder}
    />
  </div>
);

export default AutocompleteComponent;
