import React from 'react'
import "./button.css"

const Buttons = (props) => {
    const {btntype,btntext,btnonclick,customclass} = props;

  return (
    <div className={`${ 
    btntype==="PRIMARY"
    ? `button primary-btn ${customclass}`
    : `button secondary-btn ${customclass}` }`}>
    {btntext}
    </div>
  )
}

export default Buttons