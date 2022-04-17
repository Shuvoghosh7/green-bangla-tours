import React, { useEffect, useState } from 'react';
import ClicentReview from '../ClientReview/ClicentReview';



const ClientsReview = () => {
    const[reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('review.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    })
    return (
        <div className='container'>
            <h3 className='text-center text-success my-5'>Client Review</h3>
            <div className='row'>
                {
                    reviews.map(review=><ClicentReview
                    key={review.id}
                    review={review}
                    />)
                }
            </div>
        </div>
    );
};

export default ClientsReview;