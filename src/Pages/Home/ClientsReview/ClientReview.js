import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
const ClientReview = ({ review }) => {
    const { picture, name, reviews } = review
    return (
        <div className='col-12 col-md-6 col-lg-4 g-4'>
            <div className='w-50 mx-auto'>
                <img src={picture} alt="" />
            </div>
            <div>
                <h4>{name}</h4>
                <p>{reviews}</p>
            </div>
            <div className='icon'>
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <BsStarHalf/>
            </div>
        </div>
    );
};

export default ClientReview;