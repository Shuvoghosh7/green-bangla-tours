import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <article>
                <h1>Difference between authentication and  authorization </h1>
                <p>
                    <h4>Authentication</h4>
                    <li>Authentication verifies who the user is.</li>
                    <li>Authentication works through passwords,email and other other information provided by the user</li>
                    <li>In authentication process, users or persons are verified.</li>
                    <li>Authentication determines whether the person is user or not.</li>
                </p>
                <p>
                    <h5>Authorization</h5>
                    <li>Authorization determines what resources a user can access</li>
                    <li>Authorization works through settings that are implemented and maintained by the organization.</li>
                    <li>While a person give email ,password and other information then users or persons are validated.</li>
                    <li>It determines What permission do user have?</li>
                </p>
            </article>
            <article>
                <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>
                    <h5>Why are you using firebase</h5>
                    Firebase is used for many purposes that can help us apps to develop, grow and make it a quality app.some uses of firebase like 
                    <li>Firebase Database: used to store users data like chat messages, users details.</li>
                    <li>Firebase Cloud Storage: used to store user-generated content like the profile picture, multimedia messages, etc.</li>
                    <li>Firebase Cloud Messaging: used to send notification
                    Firebase Remote Config: used to perform A/B testing on the go</li>
                    other options are have to implement authentication like Multi-factor Authentication,Certificate-based Authentication,Biometric Authentication,Token-based Authentication,Single Sign-on.
                </p>
            </article>
        </div>
    );
};

export default Blogs;