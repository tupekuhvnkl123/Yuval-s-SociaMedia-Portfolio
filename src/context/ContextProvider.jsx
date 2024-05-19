import { LanguagesContextProvider } from "./LanguagesContext";

const ContextProvider = ({ children }) => {
  return <LanguagesContextProvider>{children}</LanguagesContextProvider>;
};

export default ContextProvider;
