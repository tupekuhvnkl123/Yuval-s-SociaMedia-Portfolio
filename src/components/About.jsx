import { aboutInfo } from "../constants/info";
import classes from "../style/About.module.scss";

const About = () => {
  return (
    <section className={classes.about}>
      <div className={classes.imageContainer}>
        <img src={aboutInfo.image} alt={"name"} />
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.titleContainer}>
          <span className={classes.title}>About Me</span>
          <hr />
        </div>
        <p className={classes.text}>
          I&apos;m Yuval Cohen, 25, from Ramat Gan. My dream has always been to
          uplift businesses with potential and showcase their uniqueness.
          <br />
          <br />I create and manage content across various areas including food,
          beauty, animals, and more. From videos to user-generated content (UGC)
          and images, I aim to elevate businesses and maximize their reach.
          Let&apos;s work together to make your business known and talked about
          by everyone.
        </p>
      </div>
    </section>
  );
};

export default About;
