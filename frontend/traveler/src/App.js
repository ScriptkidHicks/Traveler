<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
=======
import { Route, Switch } from "react-router-dom";
import "./CSS/App.css";

import IntroPage from "./Pages/IntroPage";
import MainPage from "./Pages/MainPage";
>>>>>>> DevTammas

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>The current time is {currentTime}.</p>
      </header>
=======
    <div>
      <Switch>
        <Route path="/" exact>
          <IntroPage />
        </Route>
        <Route path="/MainPage">
          <MainPage />
        </Route>
      </Switch>
>>>>>>> DevTammas
    </div>
  );
}

export default App;
