import React from 'react'

const Navbar = (isAuth) => {
    return (
        <div>{isAuth ? "Logout" : "Login"}</div>
    )
}

export default Navbar