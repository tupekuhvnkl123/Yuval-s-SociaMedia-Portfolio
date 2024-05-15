import classes from "../../style/Examples/ExamplesList.module.scss";
import ExampleItem from "./ExampleItem";

const ExamplesList = ({ examples, title }) => {
  return (
    <section className={classes.firstSection}>
      <div className={classes.container}>
        {title && <span className={classes.title}>Examples</span>}

        <ul className={classes.examplesList}>
          {examples.map(({ srcUrl, title, poster }) => (
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

export default ExamplesList;
