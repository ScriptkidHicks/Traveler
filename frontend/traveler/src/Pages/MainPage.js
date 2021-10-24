import styled from "styled-components";
import { useHistory } from "react-router-dom";

import classes from "../CSS/MainPage.module.css";
import React, { useState } from "react";
import AutocompleteComponent from "../Components/AutocompleteComponent";

import europecollage from "../Images/europecollage.jpeg";
document.body.style.background =
  "url(https://wallpaperaccess.com/full/2456957.jpg)";

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

  const history = useHistory();

  function postToBackend(props) {
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
      .then((data) => console.log(data))
      .finally(history.push("/Results"));
    // .then((data) => this.setState({ postId: data.id }));
  }

  return (
    <div className={classes.mainBody}>
      <div className={classes.container}>
        <div className={classes.formWrapper}>
          <form className={classes.form}>
            <h1 className={classes.formTitle}>Destinations</h1>
            <AutocompleteComponent
              placeChanger={setOrigin}
              placeholder={"Place of origin"}
            />
            <AutocompleteComponent
              placeChanger={setPlaceOne}
              placeholder={"Location one"}
            />
            <AutocompleteComponent
              placeChanger={setPlaceTwo}
              placeholder={"Location two"}
            />
            <AutocompleteComponent
              placeChanger={setPlaceThree}
              placeholder={"Location three"}
            />
            <AutocompleteComponent
              placeChanger={setPlaceFour}
              placeholder={"Location four"}
            />
            <AutocompleteComponent
              placeChanger={setPlaceFive}
              placeholder={"Location five"}
            />
            <AutocompleteComponent
              placeChanger={setPlaceSix}
              placeholder={"Location six"}
            />
            <AutocompleteComponent
              placeChanger={setPlaceSeven}
              placeholder={"Location seven"}
            />
            <AutocompleteComponent
              placeChanger={setPlaceEight}
              placeholder={"Location eight"}
            />
            <AutocompleteComponent
              placeChanger={setPlaceNine}
              placeholder={"Location nine"}
            />
            <AutocompleteComponent
              placeChanger={setPlaceTen}
              placeholder={"Location ten"}
            />
          </form>
          <button className={classes.form__button} onClick={postToBackend}>
            Submit Locations
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
