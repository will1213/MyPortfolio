import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import "./css/CardSlider.css"

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <h2>Other</h2>
      <Slider {...settings}>
        <div>
          <Card title="LOL-Predictor" description= "A machine learning model that trains to predcit an outcome of a game based on the current game state. Uses Logistic Regression, Decision Tree, and Random Forest as the model to train the data, resulting in more than 99% accuracy." gitLink = "https://github.com/will1213/LoL-Predictor"/>
        </div>
        <div>
          <Card title="Smart Contract Bot" description="A automatic system that allow user to mint the NFT as soon as the NFT is open to mint. With the use of the bot, it was able to mint the top trending project."/>
        </div>
        <div>
          <Card title="Mine Sweeper" description="A minesweeper game. It is responsive and can be played on the phone. Long tap to give a flag!" gitLink = "https://github.com/will1213/MineSweeper"  hostLink = "https://will1213.github.io/MineSweeper/"/>
        </div>
        <div>
          <Card title="Online Chat system" description="Chat room designed for multiple people to chat over the internet." gitLink = "https://github.com/will1213/chat" />
        </div>
        <div>
          <Card title="Secuirty Post" description="Dive into a vulnerability found in ConnectWise that could lead to remote code execution" hostLink = "https://willhuang0.wordpress.com/2023/03/16/rce-vulnerability-that-could-affect-5000-servers/" />
        </div>
      </Slider>
    </div>
  );
};

export default CardSlider;

function NextArrow(props) {
  const { onClick } = props;
  return <div className="arrow next" onClick={onClick}></div>;
}

function PrevArrow(props) {
  const { onClick } = props;
  return <div className="arrow prev" onClick={onClick}></div>;
}
