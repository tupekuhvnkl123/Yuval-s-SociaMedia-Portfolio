import { useContext, useState } from "react";
import { LanguagesContext } from "../../context/LanguagesContext";
import { IoLanguageOutline } from "react-icons/io5";
import S from "../../style/UI/LanguagesMenu.module.scss";

const LanguagesMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { hebrew, setHebrew } = useContext(LanguagesContext);

  return (
    <div className={`${S.container} ${hebrew ? S.hebrew : ""}`}>
      <button className={S.languagesBtn} onClick={() => setShowMenu((p) => !p)}>
        <span>{hebrew ? "שפות" : "Languages"}</span>
        <IoLanguageOutline className={S.languagesIcon} />
      </button>
      <div className={`${S.menu} ${!showMenu ? S.close : ""}`}>
        <p
          onClick={() => {
            setHebrew(true);
            setShowMenu(false);
          }}
        >
          עברית
        </p>
        <p
          onClick={() => {
            setHebrew(false);
            setShowMenu(false);
          }}
        >
          English
        </p>
      </div>
    </div>
  );
};

export default LanguagesMenu;
