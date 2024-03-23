import React, { useState } from 'react'
import DropDown from './DropDown';
import './dropDown.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const DropDownData = () => {
    const dropdownData1 = [
        { value:'1', label: 'All' },
        { value:'2', label: 'Sindh' },
        { value:'3', label: 'Punjab' },
        { value:'4', label: 'Balochistan' },
        { value:'5', label: 'KPK' },
      ];
    
      const dropdownData2 = [
        { value:'1', label: 'Karachi' },
        { value:'2', label: 'Hydrabad' },
        { value:'3', label: 'Lahore' },
        { value:'4', label: 'Islamabad' },
      ];
      const dropdownData3 = [
        { value:'1', label: 'location-1'},
        { value:'2', label: 'location-2'},
        { value:'3', label: 'location-3'},
      ];
      const dropdownData4 = [
        { value:'1', label: 'Saddar'},
        { value:'2', label: 'Soharab Goth'},
        { value:'4', label: 'Nazimabad'},
      ];
      const dropdownData5 = [
        { value:'5', label: 'Dell'},
        { value:'6', label: 'Gucci'},
        { value:'7', label: 'any' },
      ];
   
      const [selectedValue1, setSelectedValue1] = useState('');
      const [selectedValue2, setSelectedValue2] = useState('');
      const [selectedValue3, setSelectedValue3] = useState('');
      const [selectedValue4, setSelectedValue4] = useState('');
      const [selectedValue5, setSelectedValue5] = useState('');

      const handleDropdownChange1 = (e) => {
        setSelectedValue1(e.target.value);
      };
    
      const handleDropdownChange2 = (e) => {
        setSelectedValue2(e.target.value);
      };
      const handleDropdownChange3 = (e) => {
        setSelectedValue3(e.target.value);
      };
      const handleDropdownChange4 = (e) => {
        setSelectedValue4(e.target.value);
      };
      const handleDropdownChange5 = (e) => {
        setSelectedValue5(e.target.value);
      };
     

  return (
    <div  className='selectDropDown'>
    <DropDown
        options={dropdownData1}
        handleChange={handleDropdownChange1}
      />
    <DropDown
    options={dropdownData2}
    handleChange={handleDropdownChange2}
  />
    <DropDown
    options={dropdownData3}
    handleChange={handleDropdownChange3}
  />
    <DropDown
        options={dropdownData4}
        handleChange={handleDropdownChange4}
      />
    <DropDown
        options={dropdownData5}
        handleChange={handleDropdownChange5}
      />
  
  
     
      
      
    
    </div>
  )
}

export default DropDownData