import React from 'react'
import { motion } from 'framer-motion'
import '../Assets/Styles/Homepage.css'
// import WorkHomepage from './WorkHomepage'
import HomepageCards from '../Components/HomepageCards';
import { useNavigate} from 'react-router-dom';



const Homepage = () => {

    const AnimationSettings = {
        transition: { duration: 0.5 },
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    };

    const navigate = useNavigate()





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
                    <div className='headerBox'></div>
                    <h1>Hi, my name is <span>China Pickering</span></h1>
                    <h2>Frontend Developer.</h2>
                    <h3>Making the jump from the world of healthcare to tech.</h3>

                    {/* <button onClick={allProjects}>View all work</button> */}
                </div>
                <aside className='fullscreenMenuAside'>

                </aside>

            </div>
            <section className='homepageWork'>
                <div className='py-5 px-3 ml-5'>
                    <h1>My Work.</h1>
                    <h2>These are a selection of my work.</h2>
                </div>
                {/* <WorkHomepage /> */}
                <HomepageCards />
            </section>



        </motion.div >
    )
}

export default Homepage