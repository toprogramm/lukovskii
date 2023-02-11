export const userLang = navigator.language == "ru-RU" ? "ru" : "en";
import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Header from "./modules/Header/Header";
import PhotoPage from "./modules/boxes/PhotoPage/PhotoPage";
import Navigation from "./modules/Navigation/Navigation";
import Experience from "./modules/boxes/Experience/Experience";
import Contacts from "./modules/Contacts/Contacts";
import Jobs from "./modules/boxes/Jobs/Jobs";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}

function App() {
  return (
    <div className="App">
      <div className="box">
        <Header />
        <Navigation />
        <PhotoPage />
        <Experience>
          </Experience>
        <Contacts></Contacts>

        <h6>...................</h6>
      </div>
    </div>
  );
}

export default App;
