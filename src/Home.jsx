import React from 'react';
import './css/Home.css'
import willhuang from './assets/willhuang.jpg'

const Home = () => {
  return (
    <div className="home-container" id="home">
        <img src={willhuang} alt="My portfolio" className="home-image"/>
      <div className="home-header">
        <h1>Hi I am Will Huang</h1>
      </div>
    </div>
  );
};

export default Home;