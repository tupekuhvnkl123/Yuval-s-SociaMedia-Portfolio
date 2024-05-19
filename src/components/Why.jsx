import { useContext } from "react";
import { LanguagesContext } from "../context/LanguagesContext";
import { whyInfo } from "../constants/info";
import S from "../style/Why.module.scss";

const Why = () => {
  const { hebrew } = useContext(LanguagesContext);

  return (
    <div className={S.background}>
      <section className={S.why}>
        <div className={`${S.infoContainer} ${hebrew ? S.hebrew : ""}`}>
          <div className={S.titleContainer}>
            <span className={S.title}>
              {hebrew ? "? למה סושיאל" : "Why Social"}
            </span>
            <hr />
          </div>
          <div className={S.textContainer}>
            <p className={S.text}>
              {hebrew ? whyInfo.text.hebrew : whyInfo.text.english}
            </p>
            <div className={S.mediaBackground} />
          </div>
        </div>
        <div className={S.imageContainer}>
          <img src={whyInfo.image} alt={"name"} />
        </div>
      </section>
    </div>
  );
};

export default Why;
