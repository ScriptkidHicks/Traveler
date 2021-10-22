import styled from "styled-components";
import { useHistory } from "react-router-dom";

import classes from "../CSS/MainPage.module.css";
import React, { useState } from "react";
import AutocompleteComponent from "../Components/AutocompleteComponent";

import europecollage from "../Images/europecollage.jpeg"
import PostCard from "../Images/PostCard.png"

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
<<<<<<< HEAD
      <InputWrapper>
        <InputLabel>Place of Origin</InputLabel>
        <AutocompleteComponent placeChanger={setOrigin} />
        <AutocompleteComponent placeChanger={setPlaceOne} />
        <AutocompleteComponent placeChanger={setPlaceTwo} />
        <AutocompleteComponent placeChanger={setPlaceThree} />
        <AutocompleteComponent placeChanger={setPlaceFour} />
        <AutocompleteComponent placeChanger={setPlaceFive} />
        <AutocompleteComponent placeChanger={setPlaceSix} />
        <AutocompleteComponent placeChanger={setPlaceSeven} />
        <AutocompleteComponent placeChanger={setPlaceEight} />
        <AutocompleteComponent placeChanger={setPlaceNine} />
        <AutocompleteComponent placeChanger={setPlaceTen} />
        <button onClick={postToBackend}>Click Me</button>
      </InputWrapper>

      <img alt="europe postcard things" src={europecollage} className={classes.europecollage} />
      <img alt="Post card for address input" src={PostCard} className={classes.PostCard} />

=======
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
>>>>>>> c65c1612cf0d30e8cffdb3f4c602cedb8bb43a24
    </div>
  );
}

export default MainPage;
