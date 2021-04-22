import React from 'react'
import './Content.css'
function Content({time,count}) {
    return (
        <div className="content">
            {time.map((each)=>(
                <p>You clicked at {each}</p>
             ) )}
          
                
            
            
           
           
        </div>
    )
}

export default Content
