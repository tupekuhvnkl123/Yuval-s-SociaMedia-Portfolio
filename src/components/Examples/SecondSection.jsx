import { examplesSecondSectionInfo } from "../../constants/info";
import ExampleItem from "./ExampleItem";
import classes from "../../style/Examples/SecondSection.module.scss";

const SecondSection = () => {
  return (
    <section className={classes.secondSection}>
      <ul className={classes.examplesList}>
        {examplesSecondSectionInfo.map(({ srcUrl, title }) => (
          <ExampleItem key={title} video={srcUrl} title={title} />
        ))}
      </ul>
    </section>
  );
};

export default SecondSection;
