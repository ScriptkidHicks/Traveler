import GOOGLEMAPS_API_KEY from "../key";

import classes from "../CSS/MainPage.module.css";
import React, { useState } from "react";
import AutocompleteComponent from "../Components/AutocompleteComponent";

function MainPage() {
  const [placeOne, setPlaceOne] = useState(null);

  function postToBackend() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Contents: "addresses",
      },
      body: JSON.stringify({ title: "Set of locations" }),
    };

    fetch("/get_order", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      // .then((data) => this.setState({ postId: data.id }));
  }

  return (
    <div className={classes.mainBody}>
      <AutocompleteComponent placeChanger={setPlaceOne} />
      <button onClick={postToBackend}>Click Me</button>
    </div>
  );
}

export default MainPage;
