import { Outlet } from 'react-router-dom';
import { NavLink } from "react-router-dom";
// import Logo from '../Assets/Images/logo.png';
import Logo from '../Assets/Images/logomaybe.png'
import '../Assets/Styles/Navbar.css';
import { useState, useEffect } from 'react';
import Footer from './Footer';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FaRegCopyright } from 'react-icons/fa6';


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


const Layout = () => {
  // ... perhaps some authentication logic to protect routes?

  const [showNav, setShowNav] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
      setShow(true); 
    } else { // if scroll up show the navbar
      setShow(false);  
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY); 
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    // cleanup function
    return () => {
       window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY, controlNavbar]);


  const location = useLocation()

  return (
    <>
      <NavLink to='/' onClick={() => setShowNav(!showNav)} className={`active ${show && 'hidden '}`}>
        <div className='fullscreenTopBar hidden lg:flex justify-between px-3'>
          <img src={Logo} alt='page logo' className='logo largeLogo mt-2' />
        </div>
      </NavLink>

      <div className='navbarLayoutFull'>
        <div className='navbarFull'>
          {showNav ?
            <div className='navbarOptionsFull largeNavIconsFull flex flex-col animatable justify-center items-center'>
              <NavLink to='/' onClick={() => setShowNav(!showNav)}>
                <div className=''>
                  <img src={Logo} alt='page logo' className='logo navCurtainLogo' />
                </div>
              </NavLink>
              <div className='flex flex-row closeNavCurtain'>
                <p className='mb-0'>CLOSE</p>
                <FontAwesomeIcon icon={faX} className='x'
                  onClick={() => setShowNav(!showNav)} />
              </div>
              <div className='navCurtainGrid'>
                <div className='navCoverFooter'>
                  {
                    Contacts.map(contact => {
                      return (
                        <div className='contactInnerLinksRowNav' key={contact.id}>
                          <NavLink to={contact.link} >
                            <FontAwesomeIcon icon={contact.icon} className='navSVG' />
                          </NavLink>
                        </div>
                      )


                    })
                  }
                  {
                    contacts2.map(contact => {
                      return (
                        // onClick passes in id so it shows the specific address clicked
                        <div className='contactInnerLinksRowNav' key={contact.id} >
                          <FontAwesomeIcon icon={contact.icon} className='navSVG' />
                        </div>

                      )
                    })
                  }

                </div>

                <div className='flex flex-col items-center justify-center'>
                  <NavLink to='/about' className='navbarFullScreenOptions animatableWord'>
                    About
                  </NavLink>
                  <NavLink to='/work' className='navbarFullScreenOptions'>
                    Work
                  </NavLink>
                  <NavLink to='/contact' className='navbarFullScreenOptions'>
                    Contact
                  </NavLink>
                </div>

              </div>

              <div className='flex flex-row justify-center copyrightName mt-auto'>
                <FaRegCopyright className='copyright mt-0.5 mr-1' />
                <h1 className='myName'>China Pickering</h1>
              </div>
            </div> : null}
        </div>


        <div className='navbarFullContainer'>
          <Outlet />
          <div className={`active ${show && 'hidden '}`}>
            <nav className="header" >
              <ul className={`navbarList flex flex-row justify-between items-center px-3 ${!showNav ? '' : 'closeBackground'}`}>
                <NavLink className='homeNav lg:hidden' to="/">
                  <img src={Logo} alt='page logo' className='logo' />
                </NavLink>
                <li>
                  {/* <h1>MENU</h1> */}
                  {!showNav ?
                    <div className='flex flex-row mr-3' >
                      <p className={location.pathname === '/' ? 'navHome' : 'navbarBars'}>MENU</p>
                      <FontAwesomeIcon icon={faBars} className='navBars'
                        onClick={() => setShowNav(!showNav)} />
                    </div> :
                    <div className='flex flex-row closeFullScreen hidden'>
                      <p>CLOSE</p>
                      <FontAwesomeIcon icon={faX}
                        onClick={() => setShowNav(!showNav)} className='x' />
                    </div>
                  }

                </li>
              </ul>
            </nav>
          </div>
        </div>


      </div>


      {/* <section className='quickLinksDiv '>
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
      </section> */}
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout