import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='text-center px-10 py-5'>

            <h2 className='font-bold text-2xl text-teal-400'>Our Review</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10'>

                {
                    reviews.map(review => <div style={{ height: '350px' }} class="card card-compact w-96 bg-base-100 shadow-2xl">
                        <figure><img style={{ borderRadius: '50%', height: '200px', width: '200px' }} src={review.img} /></figure>
                        <div class="card-body">
                            <h2 class="card-title font-bold text-1xl">Customer Name: {review.name}</h2>
                            <p><span className='font-bold text-1xl'>Customer Comment:</span> {review.description}</p>
                            <p><span className='font-bold text-1xl'>Rating:</span> {review.rating}</p>
                        </div>
                    </div>)
                }


            </div>

        </div>
    );
};

export default Reviews;