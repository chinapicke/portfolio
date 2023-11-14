import React from 'react'
import { motion } from 'framer-motion'
import '../Assets/Styles/Homepage.css'
// import { Link } from 'react-router-dom'
import ContactBanner from '../Components/Banners/ContactBanner'
import Work from './WorkHomepage'



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
            <div className='topHomepage flex justify-center items-end'>
                <div className='homepageContactBanner'>
                    <ContactBanner />
                </div>
                <div className='leftAsideText '>
                    <h1>Forward-thinking Frontend Developer</h1>
                    <h2>China Pickering</h2>
                    <h3>Making the big jump from the world of healthcare to tech</h3>
                    <h4>Currently a front-end intern at <span>Digiphragm.</span></h4>
                    <button>View all work</button>
                </div>

            </div>
            <section className='homepageWork'>
                <div className='text-black bg-white py-5 px-3'>
                    <h1>My Work.</h1>
                    <h2>These are a selection of my work.</h2>
                </div>
                <Work />
            </section>

            {/* <div className='leftAsideHomepage'>
                    {/* <div className='linkBar'>
                        <div>
                            <hr className='contactLineStart'></hr>
                        </div>
                        <div>
                            <ContactBanner />
                        </div>
                        <div>
                            <hr className='contactLineEnd'></hr>
                        </div>

                    </div> */}
            {/* <div className='leftAsideText '>
                        <h1>CHINA PICKERING.</h1>
                        <h2>Junior Frontend Developer.</h2>
                        <h3>Making the big jump from the world of healthcare to tech./Currently a front-end intern at <span>Digiphragm.</span></h3>
                    </div> */}


            {/* <div className='linkBarSmallScreen'>
                <div>
                    <hr className='contactSmallScreenLineStart'></hr>
                </div>
                <div>
                    <ContactBanner />
                </div>
                <div>
                    <hr className='contactSmallScreenLineEnd'></hr>
                </div> */}
            {/* </div> */}


        </motion.div >
    )
}

export default Homepage