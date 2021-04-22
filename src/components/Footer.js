import React from 'react'
import './Footer.css';
function Footer({count}) {
    return (
        <div className="footer">
            <p>You clicked {count} times</p>
        </div>
    )
}

export default Footer
