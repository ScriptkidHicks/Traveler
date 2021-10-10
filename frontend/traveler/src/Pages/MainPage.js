import GOOGLEMAPS_API_KEY from "../key";
import AutocompleteComponent from "../Components/AutocompleteComponent";

import classes from "../CSS/MainPage.module.css";
import React from "react";

function MainPage() {
  return (
    <div className={classes.mainBody}>
      <div className={classes.input}>
        <AutocompleteComponent className={classes.input} />
      </div>
    </div>
  );
}

export default MainPage;
