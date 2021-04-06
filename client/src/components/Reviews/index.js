import React from 'react'

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
    )
}

export default Reviews
