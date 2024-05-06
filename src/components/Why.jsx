import { whyInfo } from "../constants/info";
import classes from "../style/Why.module.scss";

const Why = () => {
  return (
    <div className={classes.background}>
      <section className={classes.why}>
        <div className={classes.infoContainer}>
          <div className={classes.titleContainer}>
            <span className={classes.title}>Why Social</span>
            <hr />
          </div>
          <div className={classes.textContainer}>
            <p className={classes.text}>
              I chose Social Media Marketing because I believe in the power of
              digital platforms to connect brands with their audience in
              meaningful ways. <br />
              <br />
              My passion lies in crafting compelling narratives, engaging
              content, and strategic campaigns that drive results. Clients
              should choose me because I bring a creative yet data-driven
              approach, staying updated with the latest trends and algorithms to
              ensure maximum impact. <br />
              <br />
              With a track record of delivering measurable success and a
              dedication to understanding each client&apos;s unique goals, I
              strive to be a valuable partner in achieving marketing objectives
              and fostering lasting relationships with audiences.
            </p>
            <div className={classes.mediaBackground} />
          </div>
        </div>
        <div className={classes.imageContainer}>
          <img src={whyInfo.image} alt={"name"} />
        </div>
      </section>
    </div>
  );
};

export default Why;
