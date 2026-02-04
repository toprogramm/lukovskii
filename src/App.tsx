import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./App.css";
import Header from "./modules/Header/Header";
import PhotoPage from "./modules/boxes/PhotoPage/PhotoPage";
import Navigation from "./modules/Navigation/Navigation";
import Experience from "./modules/boxes/Experience/Experience";
import Contacts from "./modules/Contacts/Contacts";
import Skills from "./modules/boxes/Skills/Skills";
import Credits from "./modules/Credits/Credits";
import Footer from "./modules/Footer/Footer";
import AboutMe from "./modules/boxes/AboutMe/AboutMe";
import ScrollUp from "./modules/ScrollUp/ScrollUp";
import SEO from "./modules/SEO/SEO";

const MainContent = () => {
  return (
    <div className="App">
      <SEO />
      <div className="box" id="box">
        <Header />
        <Navigation />
        <PhotoPage />
        <div className="ContactBox">
          <Skills></Skills>
          <Contacts></Contacts>
        </div>
        <AboutMe></AboutMe>
        <Experience />

        <Credits></Credits>

        <ScrollUp></ScrollUp>
      </div>
      <Footer></Footer>
    </div>
  );
};

function App() {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const isRussian = location.pathname.startsWith("/ru");
    const targetLang = isRussian ? "ru" : "en";
    if (i18n.language !== targetLang) {
      i18n.changeLanguage(targetLang);
    }
  }, [location.pathname, i18n]);

  return (
    <Routes>
      <Route path="/ru/*" element={<MainContent />} />
      <Route path="/*" element={<MainContent />} />
    </Routes>
  );
}

export default App;
