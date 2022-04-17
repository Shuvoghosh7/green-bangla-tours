import React, { useRef, useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Checkout = () => {
    const nameRef = useRef('')
    const emailRef = useRef('')
    const numberRef = useRef('')
    const handealForm =(event)=>{
        event.preventDefault();
        const name = nameRef.current.value
        const email = emailRef.current.value
        const number = numberRef.current.value
        if(name){
            toast('Thank you for the booking')
        }
    }
    return (
        <div className="login-container">
            <h1 className="login-title">Submit Form</h1>
            <form onSubmit={handealForm} className='login-form'>
                <input ref={nameRef} type="text" placeholder='Enter Your Name' required/>
                <input ref={emailRef} type="email" name="email" id="" placeholder='enter your valid email' required/>
                <input ref={numberRef} type="number" name="" id="" placeholder='enter your valid email' required />
                <textarea className='mt-2' id="subject" name="subject" placeholder="Write your address" style={{height:"100px", width:'100%'}} ></textarea>
                <button>Submit</button>
                <ToastContainer />
            </form>
        </div>
    );
};

export default Checkout;