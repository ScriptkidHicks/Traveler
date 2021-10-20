import classes from "../CSS/IntroPage.module.css";
import { Link } from "react-router-dom";

import Shoreline from "../Images/blueRedMap.png";
import NYMap from "../Images/NYCMap.png";
import HCMap from "../Images/highContrastMap.gif";
import BWMap from "../Images/bandw.png";
import FireMapLA from "../Images/fireLA.png";
import GreenMap from "../Images/greenmap.png";
import SPMap from "../Images/smallPinkMap.png";
import PortlandMap from "../Images/portlandmap.png";
import SLCMap from "../Images/saltlakecity.jpeg";
import SeaMap from "../Images/seattle-map.png";
import SprawlMap from "../Images/sprawlmap.jpg";
import Multicolor from "../Images/Multicolor.png";
import NashvilleYellow from "../Images/NashvilleYellow.png";

function IntroPage() {
  return (
    <div className={classes.mainbody}>
      <h1 className={classes.introTitle}>
        Welcome to Traveler<sup className={classes.trademark}>tm</sup>
      </h1>
      <Link to="/CreateAccount" className={classes.shineBox}>
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
      <img alt="LA map of fires" src={FireMapLA} className={classes.FireMapLA}/>
      <img alt="green map" src={GreenMap} className={classes.GreenMap}/>
      <img alt="a pink square map" src={SPMap} className={classes.SPMap}/>
      <img alt="Portland city map" src={PortlandMap} className={classes.PortlandMap}/>
      <img alt="Salt Lake City map" src={SLCMap} className={classes.SLCMap}/>
      <img alt="Seattle map" src={SeaMap} className={classes.SeaMap}/>
      <img alt="Sprawl Map" src={SprawlMap} className={classes.SprawlMap}/>
      <img alt="Multi colored map" src={Multicolor} className={classes.Multicolor}/>
      <img alt="Nashville map colored Yellow" src={NashvilleYellow} className={classes.NashvilleYellow}/>
    </div>
  );
}

export default IntroPage;
