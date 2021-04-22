import React, { useState } from 'react'
import './Navbar.css'
import sleek from './sleek.png'
function Navbar() {
    const [time, setTime] = useState(0);
    window.onload = showTime();
    function showTime() {
        setInterval(
  () => setTime(new Date().toLocaleTimeString()),
  1000
);
    }

    return (
        <div className="navbar">
            <div className="navbar__logo">
                <img src={sleek} alt='logo'/>
            </div>
            <div className='navbar__time'>
               Current time: {time}
            </div>
        </div>
    )
}

export default Navbar
