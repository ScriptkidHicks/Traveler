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
    </div>
  );
}

export default MainPage;

const InputLabel = styled.label`
  color: green;
`;

const InputWrapper = styled.div`
  background-color: black;
`;
