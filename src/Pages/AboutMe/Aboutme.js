import React from 'react';
import img1 from '../../../src/images/img1.JPG'
const Aboutme = () => {
    return (
        <div className='container'>
            <h1>About Me</h1>
            <div className='text-center'>
                <img className='w-25' src={img1} alt="" />
            </div>
            <div>
                <h4>Name:Shuvo Gosh</h4>
                <p>I have completed my B.sc in CSE degree from the Department of Computer Science and Engineering of International University of Business Agriculture and Technology. My keen interest in programming language has enabled me to continue this course .When I started this course I determined my goal to be a full stack web developer.For this goal I spent my full time on this course.I worked hard to achieve my destination.I spent 13-14 hours of my studies. I will do my best to achieve my goal.</p>
            </div>
        </div>
    );
};

export default Aboutme;