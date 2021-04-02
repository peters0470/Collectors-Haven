import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



const HeroSlider = () => {

  const slideImages = [
    '../../assets/images/gaming-pc.jpg',
    '../../assets/images/marioLand.jpg',
    '../../assets/images/ps4Controller-purple.jpg',
    '../../assets/images/retroPc.jpg',
    '../../assets/images/vrAtSunset.jpg'
  ];

    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Gaming Pc</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Mario Land</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Playstation 4</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
              <span>Retro</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
              <span>Virtual Reality</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default HeroSlider