export const userLang = navigator.language == "ru-RU" ? "ru" : "en";
import React from "react";
import "./App.css";
import Header from "./modules/Header/Header";
import PhotoPage from "./modules/boxes/PhotoPage/PhotoPage";
import Navigation from "./modules/Navigation/Navigation";
import Experience from "./modules/boxes/Experience/Experience";
import Contacts from "./modules/Contacts/Contacts";

import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import Skills from "./modules/boxes/Skills/Skills";
import Credits from "./modules/Credits/Credits";
import Footer from "./modules/Footer/Footer";

import AboutMe from "./modules/boxes/AboutMe/AboutMe";

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}
function clickMe() {
  alert("You clicked me!");
}
function App() {
  return (
    <div className="App">
      <div className="box">
        <Header />
        <Navigation />
        <PhotoPage />
        <div className="ContactBox">
          <Skills></Skills>
          <Contacts></Contacts>
        </div>
        <AboutMe></AboutMe>
        <Experience>
          <></>
        </Experience>

        <Credits></Credits>
        <Footer></Footer>
        
      </div>
    </div>
  );
}

export default App;
