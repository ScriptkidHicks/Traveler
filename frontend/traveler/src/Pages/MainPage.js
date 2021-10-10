import GOOGLEMAPS_API_KEY from "../key";

import classes from "../CSS/MainPage.module.css";
import React, { useState } from "react";
import AutocompleteComponent from "../Components/AutocompleteComponent";

function MainPage() {
  const [placeOne, setPlaceOne] = useState(null);
  return (
    <div className={classes.mainBody}>
      <AutocompleteComponent placeChanger={setPlaceOne} />
      <button onClick={() => console.log(placeOne)}>Click Me</button>
    </div>
  );
}

export default MainPage;
