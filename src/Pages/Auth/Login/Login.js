import { sendPasswordResetEmail } from "firebase/auth";
import { useEffect, useState } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  auth  from "../../Firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";



const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    })

    const [signInWithEmail, user, loading, hookError] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail,sending] = useSendPasswordResetEmail(
        auth
      );
    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        
        if(validEmail){
            setUserInfo({...userInfo, email: e.target.value}) 
            setErrors({...errors, email: ""})      
        } else {
            setErrors({...errors, email: "Invalid email"})
            setUserInfo({...userInfo, email: ""})
        }
    }
    const handlePasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);
        
        if(validPassword){
            setUserInfo({...userInfo, password: e.target.value});
            setErrors({...errors, password: ""});
        } else {
            setErrors({...errors, password: "Minimum 6 characters!"});
            setUserInfo({...userInfo, password: ""})
        }
        
    }

    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmail(userInfo.email, userInfo.password);   
    }

       const navigate = useNavigate();
       const location = useLocation();
       const from = location.state?.from?.pathname || "/";

       useEffect(() => {
           if (user) {
               navigate(from);
           }
       }, [user]);
    let errorElement;
    if (hookError) {
        errorElement= 
        <p className="text-danger">Error: {hookError?.message}</p>
      }
    
    const resatePassword= async()=>{
        const email = userInfo.email
        if(email){
        await sendPasswordResetEmail(email);
        toast('Sent email your email address');
        }else{
            toast("please enter your email address")
        }
    }
    return (
        <div className="login-container">
            <div className="login-title">LOGIN</div>
            <form className="login-form" onSubmit={handleLogin}>
                <input type="email" placeholder="Your Email" onChange={handleEmailChange} />
                {errors?.email && <p className="error-message">{errors.email}</p>}
                <input type="password" placeholder="password" onChange={handlePasswordChange} />
                {errors?.password && <p className="error-message">{errors.password}</p> }
                {errorElement}
                <button>Login</button>
                <ToastContainer />
                <span>Don't have an account? <Link to="/singup">Sign up first</Link> </span>
                
               <button onClick={resatePassword}>Reset Password</button>
            <SocialLogin/>
            </form>
        </div>
    );
};

export default Login;