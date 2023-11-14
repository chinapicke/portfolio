import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { NavLink } from "react-router-dom";
import Logo from '../Assets/Images/logo.png';
import '../Assets/Styles/Navbar.css';
import { useState } from 'react';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'

const Layout = () => {
  // ... perhaps some authentication logic to protect routes?

  const [showNav, setShowNav] = useState(false);

      // state changes to open and close number and email address when clicked on 
    // below state is if the text is shown or not
    const [showAddress, setShowAddress] = useState(false)
    // this is where the state is shown if it is true 
    const [contactShown, setContactShown] = useState()

    // pass in id so that the item with the specific id can be added to the contactShown state/array
    const contactShow = (id) => {
        setShowAddress(!showAddress)
        setContactShown(id)
    }


    const Contacts = [
      {
          name: "LinkedIn",
          id: 1,
          icon: faLinkedinIn,
          link: "https://www.linkedin.com/in/china-pickering-019153250/"
      },
      {
          name: "Github",
          id: 2,
          icon: faGithub,
          link: "https://github.com/chinapicke"
      },
  ]

  const contacts2 = [
      {
          id: 3,
          icon: faPaperPlane,
          show: "chinapickering97@gmail.com"
      },
      {
          id: 4,
          icon: faPhone,
          show: "07563920731"
      }

  ]


  return (
    <>
      <div className='fullscreenTopBar hidden lg:flex justify-between'>
        <NavLink className='homeNav px-3 pt-2' to="/">
          <img src={Logo} alt='page logo' className='logo largeLogo' />
        </NavLink>
      </div>
      <div className='navbarLayout'>
        <Outlet />
        <Navbar />
      </div>
      <div>
        <h1>quick links</h1>
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
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout