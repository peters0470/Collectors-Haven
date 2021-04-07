import React from "react";
import imageOne from "../../assets/vector-images/Unsubscribed.png";
import imageTwo from '../../assets/vector-images/Searching.png';
import imageThree from '../../assets/vector-images/Succses.png';

const Features = () => {
  return (
    <div className="feature-handler">
      <div className="section-left">
        <div className="img-backdrop-one backdrop">
          <img className="feature-img feature-img-one" src={imageOne} alt='vector illustration'></img>
        </div>
        <div className="feature-content">
          <h3>Feature #1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="section-right">
        <div className="img-backdrop-two backdrop">
          <img className="feature-img feature-img-two" src={imageTwo} alt='vector illustration'></img>
        </div>
        <div className="feature-content">
          <h3>Feature #2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="section-left">
        <div className="img-backdrop-three backdrop">
          <img className="feature-img feature-img-three" src={imageThree} alt='vector illustration'></img>
        </div>
        <div className="feature-content">
          <h3>Feature #3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div> 
    </div>
  );
};

export default Features;