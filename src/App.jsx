import React from 'react';
import {useEffect} from 'react'
import Toolbar from './ToolBar';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import CardSlider from './CardSlider';
import Contact from './Contact';
import './css/App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

    useEffect(() => {
      AOS.init();
    }, []);

  return (
      <div className="App">
        <Toolbar />
          <Home/>
          <AboutMe />
          <Projects />
          <CardSlider />  
          <Contact />
      </div>
  );
}

export default App
