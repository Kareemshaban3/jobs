/** @format */

import {  useState } from "react";
import { Link, useLocation } from "react-router-dom";
export default function Header({ setShowNotifications ,setShowSidBarLogin }) {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  const setActiveClass = (path) => {
    if (location.pathname === path) {
      return "active";
    }
    return "";
  };

  
  const handleToggleMenu = () => {
    setIsVisible(!isVisible);
  };

  const handleeShowNotifications = () => {
    setShowNotifications((prev) => (prev === false ? true : false));
  };

const handleShowSideBarLogins = () => {
  setShowSidBarLogin((prev) => (prev === false? true : false));
}

  

  return (
    <header>
      <nav  className="navbar" >
        <div className='logo'>
          <Link to="/" className='navbar-brand' >
            <img src='/images/logo.svg' alt='' />
          </Link>
        </div>
        <div className={`navSidBar ${isVisible ? "active" :""}`} >
          <ul className='nav-item'>
          <div onClick={() => handleToggleMenu()} className="overLay"></div>

            <li className="closeHeader" onClick={() => handleToggleMenu()}>
              X
            </li>
            <li onClick={() => handleToggleMenu()}>
              <Link className={setActiveClass("/")} to='/'>
                Home
              </Link>
            </li>
            <li onClick={() => handleToggleMenu()}>
              <Link className={setActiveClass("/explore")} to='/explore'>
                Explore
              </Link>
            </li>
            <li onClick={() => handleToggleMenu()}>
              <Link className={setActiveClass("/about")} to='/about'>
                About Us
              </Link>
            </li>
            <li onClick={() => handleToggleMenu()}>
              <Link className={setActiveClass("/Contact")} to='/Contact'>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <ul className='icon'>
          <li onClick={() => handleToggleMenu()} className='bars'>
            <i className='fa-solid fa-bars-staggered'></i>
          </li>
          <li onClick={() => handleeShowNotifications()}>
            <i className='fa-solid fa-bell'></i>
          </li>
          <li>
            <Link onClick={()=>handleShowSideBarLogins()}>
              <i className='fa-solid fa-user'></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
