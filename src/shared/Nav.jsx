import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoImage from '../assets/logo.png';
import { AuthContext } from '../provider/AuthProvider';


const Nav = () => {

    const {user, logOut} = useContext(AuthContext);
 

    const handleSignOut = () => {
        logOut()
        .then()
        .catch()
    }

    const navLinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/about'>About</NavLink></li>
    <li><NavLink to='/service'>Service</NavLink></li>
    <li><NavLink to='/product'>Product</NavLink></li>
    <li><NavLink to='/contact'>Contact</NavLink></li>
    
    </>
// bg-faf0f0
    return (
        <div className='max-w-6xl mx-auto'>
        <div className="navbar bg-opacity-15">
          <div className="navbar-start z-50">
              <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                 {navLinks}
              </ul>
              </div>
              <img className='h-16 w-16' src={logoImage} alt="logo Image" />
          </div>
          <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
             {navLinks}
              </ul>
          </div>
          <div className="navbar-end">
            {
                user?.email ? <div className='dropdown dropdown-end z-50'>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src={user?.photoURL ? user.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} alt="User" />

                    </div>
                    </label>
                    <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                    <li>
                        <button className='btn btn-sm btn-ghost'>{user?.displayName || 'name not found'}</button>
                     </li> 
                    <li> 
                        
                        <NavLink to='/profile'>Profile</NavLink>
                    </li>
                    <li> 
                        <button
                        onClick={handleSignOut}
                        className='btn btn-sm btn-ghost'>Logout</button>
                    </li>
                    </ul>
                </div> 
                :
                <Link to='/login'>
                <button className='btn'>Login</button>
                </Link>
            }
        
          </div>
       
          </div>
      </div>
    );
};

export default Nav;