import React from 'react'
import './InputStyle.css'

export const InputBox = ({ inType, inPlaceHolder, inValue, inFun, label }) => {
    return (
        <div className='input-container'>
            <span className='label'>{label}</span>
            <input className='input' type={inType} placeholder={inPlaceHolder} value={inValue} onChange={inFun} />
        </div>
    )
}
