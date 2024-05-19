import { createContext, useEffect, useState } from "react";
import { languagesInfo } from "../constants/info";

const initialValue = {
  hebrew: true,
  setHebrew: () => {},
};

export const LanguagesContext = createContext(initialValue);

export const LanguagesContextProvider = ({ children }) => {
  const hebrewLocalStorage = localStorage.getItem("hebrew");

  const [hebrew, setHebrew] = useState(JSON.parse(hebrewLocalStorage) || true);

  useEffect(() => {
    if (hebrewLocalStorage) {
      setHebrew(JSON.parse(hebrewLocalStorage));
    }
  }, []);

  const setHebrewLocalStorage = (boolean) => {
    localStorage.setItem("hebrew", boolean);
    setHebrew(boolean);
  };

  return (
    <LanguagesContext.Provider
      value={{ hebrew, setHebrew: setHebrewLocalStorage }}
    >
      {children}
    </LanguagesContext.Provider>
  );
};
