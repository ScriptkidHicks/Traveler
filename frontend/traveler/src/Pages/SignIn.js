import { Link } from "react-router-dom";
import classes from "../CSS/SignIn.module.css";

function SignIn() {
  return (
    <div className={classes.body}>
      <div className={classes.container} id="what in the fuck?">
        <form id="login">
          <h1 className={classes.formTitle}>Login</h1>

          <div className={classes.form__inputGroup}>
            <input
              type="username"
              className={classes.form__input}
              autofocus
              placeholder="Username"
            />
          </div>
          <div class="form__input-group">
            <input
              type="password"
              className={classes.form__input}
              autofocus
              placeholder="Password"
            />
          </div>
          <br />

          <button className={classes.form__button} type="submit">
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
