import styled from "styled-components";

import classes from "../CSS/MainPage.module.css";
import React, { useState } from "react";
import AutocompleteComponent from "../Components/AutocompleteComponent";

function MainPage() {
  // this method of doing this is a little uhhhhhhhhhhhhhh bad, but it works
  // I can revisit it in the future. Maybe a struct that can be imported.
  const [placeOne, setPlaceOne] = useState(null);
  const [placeTwo, setPlaceTwo] = useState(null);
  const [placeThree, setPlaceThree] = useState(null);
  const [placeFour, setPlaceFour] = useState(null);
  const [placeFive, setPlaceFive] = useState(null);
  const [placeSix, setPlaceSix] = useState(null);
  const [placeSeven, setPlaceSeven] = useState(null);
  const [placeEight, setPlaceEight] = useState(null);
  const [placeNine, setPlaceNine] = useState(null);
  const [placeTen, setPlaceTen] = useState(null);
  const [origin, setOrigin] = useState(null);

  const places = [
    origin,
    placeOne,
    placeTwo,
    placeThree,
    placeFour,
    placeFive,
    placeSix,
    placeSeven,
    placeEight,
    placeNine,
    placeTen,
  ];

  function postToBackend() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Contents: "addresses",
      },
      body: JSON.stringify({ title: "Set of locations", locations: places }),
    };

    fetch("/get_order", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
    // .then((data) => this.setState({ postId: data.id }));
  }

  return (
    <div className={classes.mainBody}>
      <div className={classes.container}>
        <h1 className={classes.formTitle}>Destinations</h1>
        <div className={classes.formWrapper}>
          <form className={classes.form}>
            <AutocompleteComponent
              className={classes.form__input}
              placeChanger={setOrigin}
            />
            <AutocompleteComponent
              className={classes.form__input}
              placeChanger={setPlaceOne}
            />
            <AutocompleteComponent
              className={classes.form__input}
              placeChanger={setPlaceTwo}
            />
            <AutocompleteComponent
              className={classes.form__input}
              placeChanger={setPlaceThree}
            />
            <AutocompleteComponent
              className={classes.form__input}
              placeChanger={setPlaceFour}
            />
            <AutocompleteComponent
              className={classes.form__input}
              placeChanger={setPlaceFive}
            />
            <AutocompleteComponent
              className={classes.form__input}
              placeChanger={setPlaceSix}
            />
            <AutocompleteComponent
              className={classes.form__input}
              placeChanger={setPlaceSeven}
            />
            <AutocompleteComponent
              className={classes.form__input}
              placeChanger={setPlaceEight}
            />
            <AutocompleteComponent
              className={classes.form__input}
              placeChanger={setPlaceNine}
            />
            <AutocompleteComponent
              className={classes.form__input}
              placeChanger={setPlaceTen}
            />
            <button onClick={postToBackend}>Click Me</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
