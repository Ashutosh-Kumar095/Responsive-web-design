import React, { useState } from 'react';
import  Button  from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click , setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const disableResponsive = () => {
    if(window.innerWidth>750)
      setClick(false)
  }

  const closeMobileMenu = () =>{
        if(window.innerWidth>750)
            setClick(false)
        else
            setClick(!click);    
  }

  window.addEventListener('resize' , disableResponsive)
  return (
    <div className="nav-container">
      <div className="menu-logo-alignment">
      <Link to='/' >
            <img className="menu-logo-styles" src="./images/brand-logo.jpg"/>
      </Link>
      </div>
      <div className={click && "menu-items-container-small-screen" ||"menu-items-container"}>
      <Link to='/' onClick={closeMobileMenu}  className={click && "menu-items-small-screen" ||"menu-items"}>
            Home
      </Link>
      <Link to='/collections' onClick={closeMobileMenu}  className={click && "menu-items-small-screen" ||"menu-items"}>
            Collections
      </Link>
      <div className="margin-top-mobile"><Button buttonStyle='btn-styles'>SIGN UP</Button></div>
      </div>
      <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      </div>
  );
}

export default Navbar;
