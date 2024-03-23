import React from 'react'
import './ButtonStyle.css'

const Button = ({ btnText, btnType }) => {
    return (
        <div className='btn-container'>
            <button type={btnType} className='button'><span className='btn-text'>{btnText}</span></button>
        </div>
    )
}

export default Button