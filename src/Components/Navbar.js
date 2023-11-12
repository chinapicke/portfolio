import React from 'react';
import { NavLink } from "react-router-dom";
import Logo from '../Assets/Images/logo.png';
import '../Assets/Styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


const Navbar = () => {

  const [showNav, setShowNav] = useState(false);

  return (
    <div className='navbarContainer'>
      <header className="header">
        <ul className='navbarList flex flex-row justify-between items-center px-3'>
          <NavLink className='homeNav lg:hidden' to="/">
            <img src={Logo} alt='page logo' className='logo' />
          </NavLink>
          <li>
            {/* <h1>MENU</h1> */}
            {!showNav ?
              <FontAwesomeIcon icon={faBars} className='navbarBars'
                onClick={() => setShowNav(!showNav)} /> :
              <FontAwesomeIcon icon={faX}
                onClick={() => setShowNav(!showNav)} />
            }

          </li>
        </ul>
      </header>
      <div className='navbar'>
        {showNav ?
          <div className='navbarOptions flex flex-col animatable justify-center items-center'>
            <NavLink to='/about' className='navbarFullScreenOptions animatableWord'>
              About
            </NavLink>
            <NavLink to='/work' className='navbarFullScreenOptions'>
              Work
            </NavLink>
            <NavLink to='/contact' className='navbarFullScreenOptions'>
              Contact
            </NavLink>
          </div> : null}

      </div>
    </div>
  )
}

export default Navbar