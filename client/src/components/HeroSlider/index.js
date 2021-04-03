import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

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

  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: <FaArrowLeft style={{ position: 'absolute', left: '50px', zIndex: 12, color: 'white' }} size='42px'/>,
    nextArrow: <FaArrowRight style={{ position: 'absolute', left: '1825px', zIndex: 12, color: 'white' }} size='42px'/>,
  }

    return (
      <div>
        <div>
          <Slide {...properties}>
            {slideImages.map((each, index) => (
              <div key={index} className="each-slide">
                <div style={{ backgroundImage: `url(${each})` }}>
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    )
}
// <img src={require('/images/image-name.png')} /> r
export default HeroSlider