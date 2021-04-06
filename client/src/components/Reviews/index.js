import React from 'react'
import styled from 'styled-components';

const ReviewHandler = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
    align-items: center;
`;

const Reviews = () => {

    const reviews = [
        {
            "name": "James",
            "description": "Collectors Haven is an amazing website with so much to offer! I am definently going to use this in the future",
            "border": "purple"
        },
        {
            "name": "Amanda",
            "description": "This is the perfect site for all my collectin needs. I'm so glad I found it!",
            "border": "red"
        },
        {
            "name": "Charles",
            "description": "The website is good, just start using it my dude. Let's all use it together as one. ",
            "border": "blue"
        }
    ]

    return (
        <ReviewHandler>
          <div className='reviews-container'>
            {reviews.map(review => {
                return (
                  <div className={`container ${review.border}`}>
                    <p>{review.description}</p>
                    <div>Review By: {review.name}</div>
                  </div>
                )
            })}
          </div>
          <svg id="ejmid05c4pvm1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 260" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
            <path id="ejmid05c4pvm2" d="M0,128L48,122.700000C96,117,192,107,288,117.300000C384,128,480,160,576,149.300000C672,139,768,85,864,96C960,107,1056,181,1152,208C1248,235,1344,213,1392,202.700000L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="rgb(110,196,255)" stroke="none" stroke-width="1"/>
          </svg>
        </ReviewHandler>
    )
}

export default Reviews