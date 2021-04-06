import React from 'react'
import image from '../../assets/vector-images/all-tasks-completed.png';


const Hero = () => {
    return (
        <div className='hero-handler'>
          <div className='hero-content'>
            <h2 className='hero-title'>Collect the way You want to!</h2>
            <p className='hero-p'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
              nim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
              sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
              mollit anim id est laborum.
            </p>
          </div>
          <div>
            <img className='img' src={image} alt='vector'></img>
          </div>
        </div>
    )
}

export default Hero