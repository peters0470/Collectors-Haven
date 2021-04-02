import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import imgOne from '../../assets/images/gaming-pc.jpg'
import imgTwo from '../../assets/images/marioLand.jpg';
import imgThree from '../../assets/images/ps4Controller-purple.jpg';
import imgFour from '../../assets/images/retroPc.jpg';
import imgFive from '../../assets/images/vrAtSunset.jpg';


const HeroSlider = () => {

  const slideImages = [
    imgOne,
    imgTwo,
    imgThree,
    imgFour,
    imgFive
  ];

    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>

            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>

            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>

            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>

            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>

            </div>
          </div>
        </Slide>
      </div>
    )
}
// <img src={require('/images/image-name.png')} /> r
export default HeroSlider