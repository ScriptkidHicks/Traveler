// this is the main housing page which handles routing for all other pages
// Written by Tammas Hicks
// Team //TODO
// last modified on 10/29/21

import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import "./CSS/App.css";

import IntroPage from "./Pages/IntroPage";
import MainPage from "./Pages/MainPage";
import ResultsPage from "./Pages/ResultsPage";
import SignIn from "./Pages/SignIn";
import CreateAccount from "./Pages/CreateAccount";

function App() {
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

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <IntroPage />
        </Route>
        <Route path="/CreateAccount">
          <CreateAccount />
        </Route>
        <Route path="/SignIn">
          <SignIn />
        </Route>
        <Route path="/MainPage">
          <MainPage
            setOne={setPlaceOne}
            setTwo={setPlaceTwo}
            setThree={setPlaceThree}
            setFour={setPlaceFour}
            setFive={setPlaceFive}
            setSix={setPlaceSix}
            setSeven={setPlaceSeven}
            setEight={setPlaceEight}
            setNine={setPlaceNine}
            setTen={setPlaceTen}
            setOrigin={setOrigin}
          />
        </Route>
        <Route path="/Results">
          <ResultsPage
            places={places}
            setOrg={setOrigin}
            setOne={setPlaceOne}
            setTwo={setPlaceTwo}
            setThree={setPlaceThree}
            setFour={setPlaceFour}
            setFive={setPlaceFive}
            setSix={setPlaceSix}
            setSeven={setPlaceSeven}
            setEight={setPlaceEight}
            setNine={setPlaceNine}
            setTen={setPlaceTen}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
