import React from 'react'
import './Sidebar.css'
function Sidebar({click}) {
    return (
        <div className="sidebar">
            <div className="sidebar__btn">
                <button type="button" onClick={click}>Click me!</button>
            </div>
        </div>
    )
}

export default Sidebar
