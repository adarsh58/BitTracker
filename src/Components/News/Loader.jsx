import React from 'react'
import './Loader.css'
const Loader = (props) => {
    const margin=props.caller==="m"?85:50;
  return (
    <div className="loader" style={{top: `calc(${margin}% - 1.25em)`}}>
      
    </div>
  )
}

export default Loader
