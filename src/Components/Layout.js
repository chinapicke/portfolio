import { Outlet } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import Logo from '../Assets/Images/logo.png';
import '../Assets/Styles/Navbar.css';
import { useState } from 'react';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

const Layout = () => {
  // ... perhaps some authentication logic to protect routes?

  const [showNav, setShowNav] = useState(false);

  const location = useLocation()

  return (
    <>
       <NavLink to='/'>
      <div className='fullscreenTopBar hidden lg:flex justify-between px-3'>
          <img src={Logo} alt='page logo' className='logo largeLogo mt-2' />
      </div>
      </NavLink>

      <div className='navbarLayoutFull'>
        <div className='navbarFull'>
          {showNav ?
            <div className='navbarOptionsFull largeNavIconsFull flex flex-col animatable justify-center items-center'>
              <div className='flex flex-row'>
                <p>CLOSE</p>
                <FontAwesomeIcon icon={faX} className='x'
                  onClick={() => setShowNav(!showNav)} />
              </div>
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
        <div className='navbarFullContainer'>
          <Outlet />
          <div className='navbarContainer'>
            <header className="header">
              <ul className={`navbarList flex flex-row justify-between items-center px-3 ${!showNav ? '' : 'closeBackground'}`}>
                <NavLink className='homeNav lg:hidden' to="/">
                  <img src={Logo} alt='page logo' className='logo' />
                </NavLink>
                <li>
                  {/* <h1>MENU</h1> */}
                  {!showNav ?
                    <div className='flex flex-row ' >
                      <p className={location.pathname ==='/'?'navHome':'navbarBars'}>MENU</p>
                      <FontAwesomeIcon icon={faBars} className={location.pathname ==='/'?'navHome':'navbarBars'}
                       onClick={() => setShowNav(!showNav)}/>
                    </div> :
                    <div className='flex flex-row closeFullScreen hidden'>
                      <p>CLOSE</p>
                      <FontAwesomeIcon icon={faX}
                        onClick={() => setShowNav(!showNav)} className='x' />
                    </div>
                  }

                </li>
              </ul>
            </header>

          </div>

        </div>

      </div>
      <section className='quickLinksDiv '>
        <h1>quick links</h1>
        <div className='quickLinks'>
        <NavLink to='/about' className='navbarFullScreenOptions'>
          About
        </NavLink>
        <NavLink to='/work' className='navbarFullScreenOptions'>
          Work
        </NavLink>
        <NavLink to='/contact' className='navbarFullScreenOptions'>
          Contact
        </NavLink>

        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout