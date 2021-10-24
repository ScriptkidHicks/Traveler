import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "../CSS/CreateAccount.module.css";
import { useHistory } from "react-router";

function CreateAccount() {
  const [userName, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);

  const history = useHistory();

  function usernameChanger(event) {
    setUsername(event.target.value);
  }

  function passwordChanger(event) {
    setPassword(event.target.value);
  }

  function emailChanger(event) {
    setEmail(event.target.value);
  }

  function PostAccount(event) {
    event.preventDefault();
    const accountInfo = {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
        Contents: "accountInfo",
      },
      body: JSON.stringify({
        newUsername: userName,
        newEmail: email,
        newPassword: password,
      }),
    };

    fetch("/create_account", accountInfo).then((response) => {
      if (response.status === 201) {
        history.push("/MainPage");
      } else {
        alert("Failed to create user account!");
      }
    });
  }
  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <form className={classes.form} id="createAccount">
          <h1 className={classes.formTitle}>Create Account</h1>

          <div className={classes.form__inputGroup}>
            <input
              onChange={usernameChanger}
              type="username"
              className={classes.form__input}
              autoFocus
              placeholder="Username"
            ></input>
          </div>
          <div className={classes.form__inputGroup}>
            <input
              onChange={emailChanger}
              type="email"
              className={classes.form__input}
              placeholder="Email Address"
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
          <button className={classes.form__button} onClick={PostAccount}>
            Continue
          </button>
          <br />
          <br />
          <br />
          <p className={classes.form__text}>
            <Link className={classes.form__link} to="/SignIn">
              Already have an account? Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
