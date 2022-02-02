import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import LanguageContext from "../Context/LanguageContext";
import ThemeContext from "../Context/ThemeContext";

const MainContext = () => {
  const {theme} = useContext(ThemeContext)
  const {texts} =useContext(LanguageContext)
  const {auth} = useContext(AuthContext)

  return (
    <main className={theme}>
      {auth ? <p>{texts.mainHello}</p> : <p>{texts.mainWelcome}</p>}

      <p>{texts.mainContent}</p>
    </main>
  );
};

export default MainContext;
