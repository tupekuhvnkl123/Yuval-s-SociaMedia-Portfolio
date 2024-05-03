import { useEffect, useRef, useState } from "react";
import classes from "../../style/UI/VideoPlayer.module.scss";
import { HiOutlineVolumeUp } from "react-icons/hi";
import { HiOutlineVolumeOff } from "react-icons/hi";
import { IoIosPlay } from "react-icons/io";
import { IoIosPause } from "react-icons/io";

const VideoPlayer = ({ src, onPlay, onPause, className, poster }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [timePercentage, setTimePercentage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef(null);

  const handleToggleMute = () => {
    setIsMuted((prevState) => !prevState);
  };

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleProgressClick = (e) => {
    const progressContainer = e.currentTarget;
    const clickPosition =
      e.pageX - progressContainer.getBoundingClientRect().left;
    const timeRatio = clickPosition / progressContainer.offsetWidth;
    const newTime = timeRatio * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
  };

  useEffect(() => {
    let intervalId;

    const updateTimePercentage = () => {
      if (videoRef.current && videoRef.current.duration) {
        const currentTime = videoRef.current.currentTime;
        const duration = videoRef.current.duration;
        const percentage = (currentTime / duration) * 100;
        setTimePercentage(percentage);
      }
    };

    intervalId = setInterval(updateTimePercentage, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={classes.player}>
      <video
        onPlay={onPlay}
        onPause={onPause}
        className={className}
        ref={videoRef}
        src={src}
        muted={isMuted}
        poster={poster}
        playsInline
      />
      <button className={classes.playButton} onClick={handlePlayPause}>
        {!isPlaying ? (
          <IoIosPlay className={classes.playIcon} />
        ) : (
          <IoIosPause className={classes.playIcon} />
        )}
      </button>
      <div
        className={`${classes.timeAndVolume} ${
          !isPlaying ? classes.paused : ""
        }`}
      >
        <div className={classes.time} onClick={handleProgressClick}>
          <div
            className={`${classes.currentTime} ${
              !isPlaying ? classes.paused : ""
            }`}
            style={{ width: `${timePercentage}%` }}
          />
        </div>
        <div className={classes.volume}>
          <button type="button" onClick={handleToggleMute}>
            {isMuted ? (
              <HiOutlineVolumeOff className={classes.volumeIcon} />
            ) : (
              <HiOutlineVolumeUp className={classes.volumeIcon} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
