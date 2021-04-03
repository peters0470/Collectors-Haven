import React from 'react'

const Reviews = () => {

    const reviews = [
        {
            "name": "James",
            "description": "Collectors Haven is an amazing website with so much to offer! I am definently going to use this in the future",
        },
        {
            "name": "Amanda",
            "description": "This is the perfect site for all my collectin needs. I'm so glad I found it!"
        },
        {
            "name": "Charles",
            "description": "The website is good, just start using it my dude. Let's all use it together as one. "
        }
    ]

    return (
        <div className='reviews-container'>
          {reviews.map(review => {
              return (
                <div className='container'>
                  <p>{review.description}</p>
                  <div>Review By: {review.name}</div>
                </div>
              )
          })}
        </div>
    )
}

export default Reviews
