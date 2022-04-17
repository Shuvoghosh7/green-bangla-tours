import React from 'react';
import {AiTwotoneStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import './ClicentReview.css'
const ClicentReview = ({review}) => {
    const { picture, name, reviews } = review
    return (
        <div className='col-12 col-md-6 col-lg-4 g-4 '>
         <div className='review-container'>
            <div className='w-50 mx-auto images'>
                <img src={picture} alt="" />
            </div>
            <div className='ms-4'>
                <h4>{name}</h4>
                <p>{reviews}</p>
            </div>
            <div className='icon ms-4 '>
                <AiTwotoneStar/>
                <AiTwotoneStar />
                <AiTwotoneStar/>
                <BsStarHalf/>
            </div>
        </div>
        </div>
    );
};

export default ClicentReview;