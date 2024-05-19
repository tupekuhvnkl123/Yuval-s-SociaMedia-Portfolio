import { aboutInfo } from "../constants/info.jsx";
import classes from "../style/About.module.scss";
import shiningStars from "../assets/shiningStars.svg";
import { useContext } from "react";
import { LanguagesContext } from "../context/LanguagesContext.jsx";

const About = () => {
  const { hebrew } = useContext(LanguagesContext);

  return (
    <div className={classes.container}>
      <hr className={classes.pageSeparateLine} />
      <img
        className={`${classes.firstStars} ${hebrew ? classes.hebrew : ""}`}
        src={shiningStars}
        alt="shiningStars"
      />
      <img
        className={classes.secondStars}
        src={shiningStars}
        alt="shiningStars"
      />
      <section className={classes.about}>
        <div className={classes.imageAndNameContainer}>
          <div className={classes.imageAndName}>
            <img src={aboutInfo.image} alt={aboutInfo.name.english} />
            <p className={classes.name}>
              {hebrew ? aboutInfo.name.hebrew : aboutInfo.name.english}
            </p>
          </div>
        </div>
        <div
          className={`${classes.infoContainer} ${hebrew ? classes.hebrew : ""}`}
        >
          <div className={classes.titleContainer}>
            <span className={classes.title}>
              {hebrew ? "קצת עליי" : "About Me"}
            </span>
            <hr />
          </div>
          <p className={classes.text}>
            {hebrew ? aboutInfo.text.hebrew : aboutInfo.text.english}
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
