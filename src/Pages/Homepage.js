import React from 'react'
import { motion } from 'framer-motion'
import '../Assets/Styles/Homepage.css'
// import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import Logo from '../Assets/Images/logo.png';
import Work from './WorkHomepage'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
// import { faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'



const Homepage = () => {

    const AnimationSettings = {
        transition: { duration: 0.5 },
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    };
    return (
        <motion.div
            className='homepageContainer'
            {...AnimationSettings}>
                {/* <NavLink className='homeNav px-3 ' to="/">
          <img src={Logo} alt='page logo' className='logo largeLogo' />
        </NavLink> */}
            <div className='topHomepage flex justify-center items-end'>
                {/* <div className='homepageContactBanner'>
                    <ContactBanner />
                </div> */}
                <div className='leftAsideText '>
                    <h1>Forward-thinking Frontend Developer</h1>
                    <h2>China Pickering</h2>
                    <h3>Making the big jump from the world of healthcare to tech</h3>
                    <h4>Currently a front-end intern at <span>Digiphragm.</span></h4>
                    <button>View all work</button>
                </div>
                <aside className='fullscreenMenuAside'>
                    
                </aside>

            </div>
            <section className='homepageWork'>
                <div className='text-black bg-white py-5 px-3'>
                    <h1>My Work.</h1>
                    <h2>These are a selection of my work.</h2>
                </div>
                <Work />
            </section>



        </motion.div >
    )
}

export default Homepage