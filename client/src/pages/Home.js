import React from 'react';
import Reviews from '../components/Reviews'
import Features from '../components/Features';
import HeroSlider from '../components/HeroSlider';

const Home = () => {
    return (
        <div>
          <HeroSlider  />
          <Reviews />
          <Features />
        </div>
    )
}

export default Home
