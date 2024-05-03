import { useState } from "react";
import classes from "../../style/Examples/ExampleItem.module.scss";
import VideoPlayer from "../UI/VideoPlayer";

const ExampleItem = ({ title, video }) => {
  const [videoActive, setVideoActive] = useState(false);

  return (
    <div className={classes.exampleItem}>
      <div className={classes.videoContainer}>
        <VideoPlayer
          onPlay={() => setVideoActive(true)}
          onPause={() => setVideoActive(false)}
          className={videoActive ? classes.active : ""}
          src={video}
        />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default ExampleItem;
