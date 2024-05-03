import { examplesSecondSectionInfo } from "../../constants/info";
import ExampleItem from "./ExampleItem";
import classes from "../../style/Examples/SecondSection.module.scss";

const SecondSection = () => {
  return (
    <section className={classes.secondSection}>
      <div className={classes.container}>
        <ul className={classes.examplesList}>
          {examplesSecondSectionInfo.map(({ srcUrl, title, poster }) => (
            <ExampleItem
              key={title}
              video={srcUrl}
              title={title}
              poster={poster}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SecondSection;
