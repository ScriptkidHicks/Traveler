import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";

import classes from "../CSS/MainPage.module.css";
import AutocompleteComponent from "../Components/AutocompleteComponent";

function MainPage(props) {
  // this method of doing this is a little uhhhhhhhhhhhhhh bad, but it works
  // I can revisit it in the future. Maybe a struct that can be imported.

  const history = useHistory();

  return (
    <div className={classes.mainBody}>
      <div className={classes.container}>
        <h1 className={classes.formTitle}>Destinations</h1>
        <AutocompleteComponent
          placeChanger={props.setOrigin}
          placeholder={"Place of origin"}
        />
        <AutocompleteComponent
          placeChanger={props.setOne}
          placeholder={"Location one"}
        />
        <AutocompleteComponent
          placeChanger={props.setTwo}
          placeholder={"Location two"}
        />
        <AutocompleteComponent
          placeChanger={props.setThree}
          placeholder={"Location three"}
        />
        <AutocompleteComponent
          placeChanger={props.setFour}
          placeholder={"Location four"}
        />
        <AutocompleteComponent
          placeChanger={props.setFive}
          placeholder={"Location five"}
        />
        <AutocompleteComponent
          placeChanger={props.setSix}
          placeholder={"Location six"}
        />
        <AutocompleteComponent
          placeChanger={props.setSeven}
          placeholder={"Location seven"}
        />
        <AutocompleteComponent
          placeChanger={props.setEight}
          placeholder={"Location eight"}
        />
        <AutocompleteComponent
          placeChanger={props.setNine}
          placeholder={"Location nine"}
        />
        <AutocompleteComponent
          placeChanger={props.setTen}
          placeholder={"Location ten"}
        />
      </div>
      <Link className={classes.form__button} to="/Results">
        Submit Locations
      </Link>
    </div>
  );
}

export default MainPage;
