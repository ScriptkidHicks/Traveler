import React from "react";
import Autocomplete from "react-google-autocomplete";
import classes from "../CSS/AutocompleteComponent.module.css";

const AutocompleteComponent = (props) => (
  <div>
    <Autocomplete
      options={{ types: "address" }}
      className={classes.form__input}
      apiKey={process.env.REACT_APP_GOOGLEMAPS_API_KEY}
      onPlaceSelected={(place) => {
        props.placeChanger(place);
        if (props.subDisplay) {
          console.log(props.subDisplay);
          props.subDisplay("inline");
          console.log("yes");
        }
      }}
      placeholder={props.placeholder}
    />
  </div>
);

export default AutocompleteComponent;
