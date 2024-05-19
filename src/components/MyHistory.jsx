import { useContext } from "react";
import { historyInfo } from "../constants/info";
import { LanguagesContext } from "../context/LanguagesContext";
import S from "../style/MyHistory.module.scss";

const MyHistory = () => {
  const { hebrew } = useContext(LanguagesContext);

  const languages = hebrew
    ? historyInfo.languages.hebrew
    : historyInfo.languages.english;

  const skills = hebrew
    ? historyInfo.skills.hebrew
    : historyInfo.skills.english;

  return (
    <section className={S.myHistory}>
      <div className={S.titleContainer}>
        <span className={S.title}>
          {hebrew ? "ההיסטוריה שלי" : "My History"}
        </span>
      </div>
      <div className={S.cardsContainer}>
        <div className={S.topCards}>
          {historyInfo.cards.map((card) => (
            <div className={S.card} key={card.title.english}>
              <h1>{hebrew ? card.title.hebrew : card.title.english}</h1>
              <div className={S.yearsContainer}>
                <div>{card.years}</div>
                <hr />
              </div>
              <p>{hebrew ? card.text.hebrew : card.text.english}</p>
            </div>
          ))}
        </div>
        <div className={`${S.languagesAndSkills} ${hebrew ? S.hebrew : ""}`}>
          <div className={S.languagesContainer}>
            <span>{hebrew ? "שפות" : "Languages"}</span>
            <ul className={S.languages}>
              {languages.map((lan) => (
                <li key={lan}>{lan}</li>
              ))}
            </ul>
          </div>
          <div className={S.skillsContainer}>
            <span>{hebrew ? "יכולות" : "Skills"}</span>
            <ul className={S.skills}>
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={S.linesCube} />
      </div>
    </section>
  );
};

export default MyHistory;
