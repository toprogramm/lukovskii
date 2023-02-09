import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import Header from './modules/Header/Header'
import PhotoPage from './modules/boxes/PhotoPage/PhotoPage'
import Navigation from './modules/Navigation/Navigation'
import Experience from './modules/boxes/Experience/Experience'
import Contacts from './modules/Contacts/Contacts'
import Jobs from './modules/boxes/Jobs/Jobs'
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}
const iconica = '<a href="https://www.freepik.com/free-vector/vector-green-leaf-icons-white-eco-concept_10601443.htm#query=leaf&position=1&from_view=search&track=sph">Image by macrovector</a> on Freepik'
const wallpaper = '<a href="https://www.freepik.com/free-vector/abstract-bokeh-blurred-lights-wallpaper_2582498.htm#page=5&query=green%20wallpaper&position=5&from_view=search&track=sph">Image by rawpixel.com</a> on Freepik'
function App() {
  return (
    <div className="App">
      <div className="box">
        <Header />
        <Navigation />
        <PhotoPage />
        <Experience >
          </Experience>
        <Contacts></Contacts>  
      
        
      <h6>...................</h6>
      

      </div>
    </div>
  )
}

export default App