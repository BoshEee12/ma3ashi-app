import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

import './NavStyle.css'

const Navbar = ({isAuth, setIsAuth}) => {
    const signUserOut = () => {
        signOut(auth).then(() => {
          localStorage.clear();
          setIsAuth(false);
          window.location.pathname = "/signin";
        });
      };
    return (
        <div className='nav-container'>
            <div className='nav-wrapper'>
                <p className='logo-text'>Ma3ashi App</p>
                <nav className='nav'>
                    <ul className='list-container'>
                        <li className='list-item'><a href='/'>Home</a></li>
                        {isAuth && <li className='list-item'><a href='/dashboard'>Dashboard</a></li>}
                        {isAuth && <li className='list-item'><a href='/signin' onClick={signUserOut}>Sign Out</a></li>}
                    </ul>
                </nav>
            </div></div>

    )
}

export default Navbar