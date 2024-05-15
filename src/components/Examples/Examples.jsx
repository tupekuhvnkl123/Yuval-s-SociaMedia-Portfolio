import ExamplesList from "./ExamplesList";
import {
  examplesFirstSectionInfo,
  examplesSecondSectionInfo,
} from "../../constants/info";

const Examples = () => {
  return (
    <>
      <ExamplesList examples={examplesFirstSectionInfo} title />
      <ExamplesList examples={examplesSecondSectionInfo} />
    </>
  );
};

export default Examples;
