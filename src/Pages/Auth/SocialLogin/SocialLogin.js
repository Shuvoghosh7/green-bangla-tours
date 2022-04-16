import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const navigate =useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorElement;
    if (error) {
        errorElement= 
        <p>Error: {error?.message}</p>
      }
      if (loading ) {
        return <Loading/> ;
      }
      if(user){
        navigate('/')
      }
    return (
        <div>
            <div>
                <button className='btn w-75 border border-dark rounded-pill d-block mx-auto mb-3' onClick={()=>signInWithGoogle()}><span><FcGoogle className='h4 mx-2'/></span> Google Sing In
                </button>
                {errorElement}
            </div>
        </div>
    );
};

export default SocialLogin;