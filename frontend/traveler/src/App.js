import { Route, Switch } from "react-router-dom";
import "./CSS/App.css";

import IntroPage from "./Pages/IntroPage";
import MainPage from "./Pages/MainPage";

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
      </Switch>
    </div>
  );
}

export default App;
