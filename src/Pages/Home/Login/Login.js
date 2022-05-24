import React, { useEffect, useState } from 'react';
import GoogleIcons from '../../../images/google.png' 
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';
    
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then( () =>{
            navigate(from, {replace: true})
        })
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
        console.log(signInWithEmailAndPassword)
    }

    return (
        <div>
            <h1 className='text-center text-3xl font-bold py-12'>Please Login</h1>

            <div class="card  w-full flex items-center justify-items-center bg-base-100">
                <div class="card-body">
                    <form onSubmit={handleUserSignIn}>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input 
                        type="text"
                         placeholder="email" 
                         class="input input-bordered w-80"
                         name="email"
                         onBlur={handleEmailBlur}
                          />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input 
                        type="text"
                         placeholder="password"
                          class="input input-bordered"
                          name="password"
                          onBlur={handlePasswordBlur}
                           />
                        <label class="label">
                            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary text-black text-1xl font-bold">Login</button>
                    </div>
                    </form>
                </div>

                <p><small>New to Global Parts Center <Link className='text-primary' to="/signup">Create New Account</Link></small></p>
                    <div className="divider">OR</div>
                    <button
                    onClick={handleGoogleSignIn}
                        className="btn btn-primary text-black font bold"
                    >
                        <img src={GoogleIcons} style={{height:'40px',width:'40px'}} alt="" />
                        Continue with Google</button>
            
                {/* <p className='text-2xl font-bold'>or</p><hr className='text-black' />
                <div class="form-control mt-6">
                        <button class="btn btn-primary text-black text-1xl font-bold">GoogleSingIn</button>
                    </div> */}
            </div>
           




        </div>
    );
};

export default Login;