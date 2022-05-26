import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Navegation = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {

        signOut(auth);
    }
    console.log(user)

    const menuItems = <>
        <li><Link className='font-bold' to="/">Home</Link></li>
        <li><Link to="/parts" className='font-bold'>Parts</Link></li>
        <li><Link to="/blog" className='font-bold'>Blog</Link></li>
        <li><Link className='font-bold' to="/myProfile">My Profile</Link></li>
        {

            user?.email ? <div className='flex font-bold'>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <div className='my-auto mx-2'>
                    <span className='text-black'>{user.displayName}</span>

                </div>
                <button className="btn my-auto font-bold btn-primary btn-sm" onClick={handleSignOut}>SingOut</button>


            </div>


                : <div className='my-3'>
                    <Link to="/login" className='text-decoration-none font-bold' ><a>Login</a></Link>

                </div>


        }


    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Global Parts Center</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navegation;