import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        
        <div className="my-2">

        <footer className="text-center text-lg-start footer-container bg-dark" >
          <div className="container d-flex justify-content-center py-5">
           <BsFacebook className='text-light me-2'/>
           <AiFillTwitterCircle className='text-light me-2'/>
           <FaInstagramSquare className='text-light '/>
            
          </div>
      
         
          <div className="text-center text-white p-3">
          <p><small>Copyright &copy; {new Date().getFullYear()}</small></p>
         
          </div>
          
        </footer>
        
      </div>
        
    );
};

export default Footer;