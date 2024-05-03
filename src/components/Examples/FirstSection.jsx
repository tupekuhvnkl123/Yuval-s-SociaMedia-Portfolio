import classes from "../../style/Examples/FirstSection.module.scss";
import { examplesFirstSectionInfo } from "../../constants/info";
import ExampleItem from "./ExampleItem";

const FirstSection = () => {
  return (
    <section className={classes.firstSection}>
      <div className={classes.container}>
        <span className={classes.title}>Examples</span>

        <ul className={classes.examplesList}>
          {examplesFirstSectionInfo.map(({ srcUrl, title, poster }) => (
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

export default FirstSection;
