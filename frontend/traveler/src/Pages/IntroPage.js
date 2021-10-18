import classes from "../CSS/IntroPage.module.css";
import { Link } from "react-router-dom";

import Shoreline from "../Images/blueRedMap.png";
import NYMap from "../Images/NYCMap.png";
import HCMap from "../Images/highContrastMap.gif";
import BWMap from "../Images/bandw.png";
import FireMap from "../Images/fireLA.png";

function IntroPage() {
  return (
    <div className={classes.mainbody}>
      <h1 className={classes.introTitle}>
        Welcome to Traveler<sup className={classes.trademark}>tm</sup>
      </h1>
      <Link to="/MainPage" className={classes.shineBox}>
        Find Your Route Solution
      </Link>

      <img
        alt="highContrast shoreline"
        src={Shoreline}
        className={classes.shoreline}
      />
      <img alt="New York Map" src={NYMap} className={classes.NYMap} />
      <img alt="high contrast map" src={HCMap} className={classes.HCMap} />
      <img alt="Black and White map" src={BWMap} className={classes.BWMap}/>
    </div>
  );
}

export default IntroPage;
