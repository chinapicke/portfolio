import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { NavLink } from "react-router-dom";
import Logo from '../Assets/Images/logo.png';
import '../Assets/Styles/Navbar.css';
import { useState } from 'react';
import Footer from './Footer';

const Layout = () => {
  // ... perhaps some authentication logic to protect routes?

  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className='fullscreenTopBar hidden lg:flex justify-between'>
        <NavLink className='homeNav' to="/">
          <img src={Logo} alt='page logo' className='logo' />
        </NavLink>
      </div>
      <div className='navbarLayout'>
        <Outlet />
        <Navbar />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout