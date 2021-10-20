import classes from "../CSS/CreateAccount.module.css";

function CreateAccount() {
  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <form className={classes.form} id="createAccount">
          <h1 className={classes.formTitle}>Create Account</h1>

          <div className={classes.form__inputGroup}>
            <input
              type="username"
              className={classes.form__input}
              autofocus
              placeholder="Username"
            ></input>
          </div>
          <div className={classes.form__inputGroup}>
            <input
              type="username"
              className={classes.form__input}
              autofocus
              placeholder="Email Address"
            />
          </div>
          <div className={classes.form__inputGroup}>
            <input
              type="password"
              className={classes.form__input}
              autofocus
              placeholder="Password"
            />
          </div>
          <div className={classes.form__inputGroup}>
            <input
              type="password"
              className={classes.form__input}
              autofocus
              placeholder="Confirm Password"
            />
          </div>
          <button className={classes.form__button} type="submit">
            Continue
          </button>
          <br />
          <br />
          <br />
          <p className={classes.form__text}>
            <a className={classes.form__link} href="./" id="linkLogin">
              Already have an account? Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
