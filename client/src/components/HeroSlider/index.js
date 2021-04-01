import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  '../../assets/images/gaming-pc.jpg',
  '../../assets/images/marioLand.jpg',
  '../../assets/images/ps4Controller-purple.jpg',
  '../../assets/images/retroPc.jpg',
  '../../assets/images/vrAtSunset-purple.jpg'
];

const HeroSlider = () => {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div style={{'background-image': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'background-image': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'background-image': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default HeroSlider