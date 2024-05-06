import { heroInfo } from "../constants/info";
import classes from "../style/Hero.module.scss";
import { FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.imageContainer}>
        <img src={heroInfo.image} alt={heroInfo.name} />
      </div>
      <div className={classes.infoContainer}>
        <span className={classes.title}>{heroInfo.name}</span>
        <p className={classes.profession}>{heroInfo.profession}</p>
        <p className={classes.basedIn}>{heroInfo.basedIn}</p>
        <div className={classes.instagramContainer}>
          <FaInstagram className={classes.icon} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
