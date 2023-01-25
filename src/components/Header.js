import React from 'react'
import {Link} from "react-router-dom";
import "./Header.css";
import Logo from '../assets/logo.png';
import {BiHomeAlt} from 'react-icons/bi';
import {AiOutlinePlayCircle} from 'react-icons/ai';
import {IoSchoolOutline} from 'react-icons/io5';
import {AiOutlineUsergroupDelete} from "react-icons/ai";
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {MdCallMissedOutgoing} from 'react-icons/md';
import {RxDashboard} from 'react-icons/rx';
import {FaSignature} from 'react-icons/fa';
import {AiOutlineArrowLeft} from 'react-icons/ai'


const Header = (ativaClasse) => {
  
  ativaClasse =() =>{
    const head = document.querySelector(".header");
    head.classList.toggle("active")
  }
  
    return (


    <div className='header'>
        <div className="toogle_header" onClick={ativaClasse}><AiOutlineArrowLeft/>
        
        </div>

        <div className="logo">
            <img src={Logo} alt="" />
        </div>

        
    
        <nav className='nav'>
            
            <Link to="/" ><BiHomeAlt />Home</Link>
            <Link to="/playnodia"> <AiOutlinePlayCircle />Play no dia</Link>
            <Link to="/univp" > <IoSchoolOutline/>UniVP</Link>
            <Link to="/espacovp" ><AiOutlineUsergroupDelete />Espaço Vplayer</Link>
            <Link to="/shopping" ><AiOutlineShoppingCart />Shopping VP</Link>
            <Link to="/chamados" ><MdCallMissedOutgoing />Chamados</Link>
            <Link to="/dashboards" ><RxDashboard />Dashboards</Link>
            <Link to="/assinatura"><FaSignature />Assinatura de E-mail</Link>
   
        </nav>
  
        

    </div>
   
  )
}

export default Header