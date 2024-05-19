import { heroInfo } from "../constants/info";
import classes from "../style/Hero.module.scss";
import { FaInstagram } from "react-icons/fa";
import LanguagesMenu from "./UI/LanguagesMenu";
import { useContext } from "react";
import { LanguagesContext } from "../context/LanguagesContext";

const Hero = () => {
  const { hebrew } = useContext(LanguagesContext);

  return (
    <section className={classes.hero}>
      <div className={classes.imageContainer}>
        <img src={heroInfo.image} alt={heroInfo.name.english} />
      </div>
      <div
        className={`${classes.infoContainer} ${hebrew ? classes.hebrew : ""}`}
      >
        <span className={classes.title}>
          {hebrew ? heroInfo.name.hebrew : heroInfo.name.english}
        </span>
        <p className={classes.profession}>
          {hebrew ? heroInfo.profession.hebrew : heroInfo.profession.english}
        </p>
        <p className={classes.basedIn}>
          {hebrew ? heroInfo.basedIn.hebrew : heroInfo.basedIn.english}
        </p>
        <div
          className={classes.instagramContainer}
          onClick={() => window.open(heroInfo.instagramLink, "_blank")}
        >
          <FaInstagram className={classes.icon} />
        </div>
        <LanguagesMenu />
      </div>
    </section>
  );
};

export default Hero;
