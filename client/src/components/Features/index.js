import React from 'react'
import styled from 'styled-components';

const FeatureTitle = styled.h3`
  background-color: black;
  color: white;
  padding: 5px 10px;
  margin-bottom: 15px;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.3);
`;

const Features = () => {
    const features = [
        {
            "title": "Feature 1",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "class": "feature-container-left"
        },
        {
            "title": "Feature 2",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "class": "feature-container-right"
        },
        {
            "title": "Feature 3",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "class": "feature-container-left"
        }
    ]
    return (
        <div className='features-container'>
        {features.map(feature => {
          return (
            <div className={`${feature.class}`}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <p>
              {feature.desc}
              </p>
            </div>
          )
        })}
        </div>
    )
}

export default Features
