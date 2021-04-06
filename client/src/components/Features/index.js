import React from 'react'
import image from '../../assets/vector-images/Unsubscribed.png'

const Features = () => {
    const features = [
        {
            "title": "Feature 1",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "class": "feature-container-left",
            "titleColor": "feature-red" 
        },
        {
            "title": "Feature 2",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "class": "feature-container-right",
            "titleColor": "feature-purple"
        },
        {
            "title": "Feature 3",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "class": "feature-container-left",
            "titleColor": "feature-blue"
        }
    ]


    return (
        <div className='feature-handler'>
          <div className='section-one'>
            <div className='img-one-backdrop'>
              <img className='feature-img-one' src={image}>
            </img>
            </div>
            <div className='feature-content-one'>
              <h3>Feature #1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
    )
}

export default Features


{/* <div className='features-container'>
        {features.map(feature => {
          return (
            <div className={`${feature.class}`}>
              <h3 className={`feature-title ${feature.titleColor}`}>{feature.title}</h3>
              <p>
              {feature.desc}
              </p>
            </div>
          )
        })}
        </div> */}