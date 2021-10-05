import classes from "../CSS/IntroPage.module.css";

function IntroPage() {
  return (
    <div className={classes.mainbody}>
      <h1 className={classes.introTitle}>
        Welcome to Traveler<sup className={classes.trademark}>tm</sup>
      </h1>
      <a
        href="https://www.youtube.com/watch?v=JB6AEy3PCdw&ab_channel=LearnDesign"
        className={classes.shineBox}
      >
        Find Your Route Solution
      </a>
    </div>
  );
}

export default IntroPage;
