import { Route, Switch } from "react-router-dom";
import "./CSS/App.css";

import IntroPage from "./Pages/IntroPage";
import MainPage from "./Pages/MainPage";
import ResultsPage from "./Pages/ResultsPage";
import SignIn from "./Pages/SignIn";
import CreateAccount from "./Pages/CreateAccount";

function App() {
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
          <MainPage />
        </Route>
        <Route path="/Results">
          <ResultsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
