import React from 'react'
import './HyperStyle.css'

const Hyperlinks = ({ linkText, linkHref, style }) => {
    return (
        <a style={style} className='hyperlink' href={linkHref}>{linkText}</a>
    )
}

export default Hyperlinks