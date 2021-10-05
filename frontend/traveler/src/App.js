import { Route, Switch } from "react-router-dom";
import "./CSS/App.css";

import IntroPage from "./Pages/IntroPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <IntroPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
