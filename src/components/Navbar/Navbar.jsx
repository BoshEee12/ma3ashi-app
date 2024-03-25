import React from 'react'
import './NavStyle.css'

const Navbar = (isAuth) => {

    return (
        <div className='nav-container'>
            <div className='nav-wrapper'>
                <p className='logo-text'>Ma3ashi App</p>
                <nav className='nav'>
                    <ul className='list-container'>
                        <li className='list-item'><a href='/'>Home</a></li>
                        {isAuth && <li className='list-item'><a href='/dashboard'>Dashboard</a></li>}
                        {isAuth && <li className='list-item'><a href='/dashboard'>Sign Out</a></li>}
                    </ul>
                </nav>
            </div></div>

    )
}

export default Navbar