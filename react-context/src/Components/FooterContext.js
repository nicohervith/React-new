import React, { useContext } from 'react'
import ThemeContext from "../Context/ThemeContext";
import LanguageContext from '../Context/LanguageContext';


const FooterContext = () => {
  const { theme } = useContext(ThemeContext);
  const {texts} = useContext(LanguageContext)
  return (
    <footer className={theme}>
      <h4>{texts.footerTitle}</h4>
    </footer>
  );
};

export default FooterContext;
