import { examplesSecondSectionInfo } from "../../constants/info";
import ExampleItem from "./ExampleItem";
import classes from "../../style/Examples/FirstSection.module.scss";

const SecondSection = () => {
  return (
    <section className={classes.secondSection}>
      {examplesSecondSectionInfo.map(({ video, title }) => (
        <ExampleItem key={title} video={video} title={title} />
      ))}
    </section>
  );
};

export default SecondSection;
