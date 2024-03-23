import React from 'react'
import './dropDown.css'
import Container from "react-bootstrap/Container";

const DropDown = ({ options, handleChange,data}) => {
   
  return (
    <div className='selectDataa'>
    <select onChange={handleChange}>
    {options.map((option, index) => (
      <option key={index} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
    </div>
  )
}

export default DropDown