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

           
            <div className="icons"> 
              <Link to="/" >
              <BiHomeAlt /> 
              <span>Home</span>
              </Link>
            </div>
           
            <div className="icons">
              <Link to="/playnodia"> <AiOutlinePlayCircle />
              <span>Play no dia</span>
              </Link>
            </div>

            <div className="icons">
              <Link to="/univp" > <IoSchoolOutline/>
              <span>UniVP</span>
              </Link>
            </div>

            <div className="icons">
              <Link to="/espacovp" ><AiOutlineUsergroupDelete />
              <span>Espaço Vplayer</span>
              </Link>
            </div>

            <div className="icons">
              <Link to="/shopping" ><AiOutlineShoppingCart />
              <span>Shopping VP</span>
              </Link>
            </div>

            <div className="icons">
              <Link to="/chamados" ><MdCallMissedOutgoing />
              <span>Chamados</span>
              </Link>
            </div>

            <div className="icons">
              <Link to="/dashboards" >
                <RxDashboard /><span>Dashboards</span>
                </Link>
            </div>

            <div className="icons">
              <Link to="/assinatura"><FaSignature />
              <span>Assinatura de E-mail</span>
              </Link>
            </div>
   
        </nav>
  
        

    </div>
   
  )
}

export default Header