import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "../CSS/SignIn.module.css";
import { useHistory } from "react-router";

function SignIn() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const history = useHistory();

  function usernameChanger(event) {
    setUsername(event.target.value);
  }

  function passwordChanger(event) {
    setPassword(event.target.value);
  }

  function getUserRequest(event) {
    event.preventDefault();
    const userInfo = {
      method: "POST",
      headers: { "Content-Type": "application/JSON", Contents: "accountInfo" },
      body: JSON.stringify({ username: username, password: password }),
    };

    fetch("/api/login", userInfo).then((response) => {
      if (response.status === 200) {
        history.push("/MainPage");
      } else {
        alert("That account does not appear to exist!");
      }
    });
  }

  return (
    <div className={classes.body}>
      <div className={classes.container} id="what in the fuck?">
        <form id="login">
          <h1 className={classes.formTitle}>Login</h1>

          <div className={classes.form__inputGroup}>
            <input
              onChange={usernameChanger}
              type="username"
              className={classes.form__input}
              autoFocus
              placeholder="Username"
            />
          </div>
          <div className={classes.form__inputGroup}>
            <input
              onChange={passwordChanger}
              type="password"
              className={classes.form__input}
              placeholder="Password"
            />
          </div>
          <br />

          <button
            className={classes.form__button}
            type="submit"
            onClick={getUserRequest}
          >
            Continue
          </button>
          <br />
          <br />
          <br />
          <p className={classes.form__text}>
            <Link
              className={classes.form__link}
              to="./CreateAccount"
              id="createAccountLink"
            >
              create new account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
