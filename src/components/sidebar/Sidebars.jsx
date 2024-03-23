import React, { useState } from 'react'
import man from '../../assets/images/man.jpg'
import './sidebar.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Person2Icon from '@mui/icons-material/Person2';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SouthAmericaIcon from '@mui/icons-material/SouthAmerica';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';


const sidebar = ({children}) => {
  const[isOpen,setIsOpen] = useState(false)
  const toggle =()=>setIsOpen(!isOpen)
  const menuItem=[
    {
        name:"Dashboard",
        icon:<DashboardIcon/>
    },
    {
        name:"User Ratio",
        icon:<Person2Icon/>
    },
    {
        name:"User Management",
        icon:<ManageAccountsIcon/>
    },
    {
        name:"Region",
        icon:<SouthAmericaIcon/>
    },
    {
        name:"City",
        icon:<LocationCityIcon/>
    },
    {
        name:"Location",
        icon:<LocationOnIcon/>
    },
    {
        name:"Area",
        icon:<CropSquareIcon/>
    },
]

  return (
    <div className="container">
    <div className="top_section">
        <div className="bars">
            <MenuIcon className='burger' onClick={toggle}/>
        </div>
    </div>
    <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
    <div className="sidebarProfile">
    <div style={{display:isOpen ? "block" : "none"}}>
    <Row>
    <Col>
    <img src={man} alt="man" />
    </Col>
    <Col>
    <h5>Syed Amin</h5>
    </Col>
    </Row>
    </div>
    </div>
        <div className="sidebarLinks">
        <ul>
        {
          menuItem.map((item,index)=>(
            <li  key={index}>
            <h4>{item.icon}</h4>
            <a href='#' style={{display: isOpen ? "block" : "none"}} >{item.name}</a>
            </li>
            
            ))
          }
          
          </ul>
          </div>
    </div>
    <main>{children}</main>
 </div>
);
}

export default sidebar