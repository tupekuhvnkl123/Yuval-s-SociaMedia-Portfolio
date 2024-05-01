import classes from "../../style/Examples/FirstSection.module.scss";
import { examplesFirstSectionInfo } from "../../constants/info";
import ExampleItem from "./ExampleItem";

const FirstSection = () => {
  return (
    <section className={classes.firstSection}>
      {examplesFirstSectionInfo.map(({ video, title }) => (
        <ExampleItem key={title} video={video} title={title} />
      ))}
    </section>
  );
};

export default FirstSection;
