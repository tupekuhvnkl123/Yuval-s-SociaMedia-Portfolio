import { historyInfo } from "../constants/info";
import S from "../style/MyHistory.module.scss";

const MyHistory = () => {
  return (
    <section className={S.myHistory}>
      <div className={S.titleContainer}>
        <span className={S.title}>My History</span>
      </div>
      <div className={S.cardsContainer}>
        <div className={S.topCards}>
          {historyInfo.cards.map((card) => (
            <div className={S.card} key={card.title}>
              <h1>{card.title}</h1>
              <div className={S.yearsContainer}>
                <div>{card.years}</div>
                <hr />
              </div>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
        <div className={S.languagesAndSkills}>
          <div className={S.languagesContainer}>
            <span>Languages</span>
            <ul className={S.languages}>
              {historyInfo.languages.map((lan) => (
                <li key={lan}>{lan}</li>
              ))}
            </ul>
          </div>
          <div className={S.skillsContainer}>
            <span>Skills</span>
            <ul className={S.skills}>
              {historyInfo.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyHistory;
