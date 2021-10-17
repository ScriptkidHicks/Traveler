import { Route, Switch } from "react-router-dom";
import "./CSS/App.css";

import IntroPage from "./Pages/IntroPage";
import MainPage from "./Pages/MainPage";
import ResultsPage from "./Pages/ResultsPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <IntroPage />
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
