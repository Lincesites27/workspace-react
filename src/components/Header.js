import React from 'react'
import {Link} from "react-router-dom";
import "./Header.css";
import Logo from '../assets/logo.png'


const Header = () => {
  return (

    
    <div className='header'>
    <div className="logo">
      <img src={Logo} alt="" />
    </div>

    <div>
    
    <nav className='nav'>
    <Link to="/" >Home2</Link>
    <Link to="/about" >About</Link>
    </nav>
  
    </div>

    </div>
   
  )
}

export default Header