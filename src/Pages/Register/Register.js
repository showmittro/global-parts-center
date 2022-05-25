import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleNameBlur = event => {
        setName(event.target.value);
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate('/');
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your two passwords did not match');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or longer');
            return;
        }

        createUserWithEmailAndPassword( email, password);
    }
    return (
        <div>
            <h1 className='text-center text-3xl font-bold py-12'>Please Login</h1>

            <div class="card  w-full flex items-center justify-items-center bg-base-100">
                <div class="card-body">
                    <form onSubmit={handleCreateUser}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                class="input input-bordered w-80"
                                name="name"
                                onBlur={handleNameBlur}
                                required

                            />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                class="input input-bordered w-80"
                                name="email"
                                onBlur={handleEmailBlur}
                                required

                            />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                class="input input-bordered"
                                name="password"
                                onBlur={handlePasswordBlur}
                                required

                            />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Conform Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Re-Type-Password"
                                class="input input-bordered"
                                name="confirm-password"
                                onBlur={handleConfirmPasswordBlur}
                                required

                            />
                            <label class="label">
                                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary text-black text-1xl font-bold">Register</button>
                        </div>
                    </form>
                </div>

                <p><small>Already Have an account? <Link className='text-primary' to="/login">LogIn</Link></small></p>


            </div>

        </div>
    );
};

export default Register;