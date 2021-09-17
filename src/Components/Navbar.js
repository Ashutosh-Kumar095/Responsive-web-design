import React, { useState, useEffect } from 'react';
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

  window.addEventListener('resize' , disableResponsive)
  return (
    <div className="nav-container">
      <div className="menu-logo-alignment">
      <Link to='/'  className="menu-logo-styles">
            TRVL
            <i class='fab fa-typo3' />
      </Link>
      </div>
      <div className={click && "menu-items-container-small-screen" ||"menu-items-container"}>
      <Link to='/home'  className={click && "menu-items-small-screen" ||"menu-items"}>
            Home
      </Link>
      <Link to='/services'  className={click && "menu-items-small-screen" ||"menu-items"}>
            Services
      </Link>
      <Link to='/products'  className={click && "menu-items-small-screen" ||"menu-items"}>
            Products
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
