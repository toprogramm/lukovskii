import React from "react";
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

function App() {
  return (
    <div className="App">
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
}

export default App;
