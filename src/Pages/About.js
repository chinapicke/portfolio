import React from 'react'
import { motion } from 'framer-motion'
import '../Assets/Styles/About.css'
import HTML from '../Assets/Images/html.png'
import CSS from '../Assets/Images/css.png'
import JS from '../Assets/Images/js.png'
import Bootstrap from '../Assets/Images/bootstrap.png'
import Git from '../Assets/Images/git.png'
import Atom from '../Assets/Images/atom.png'
import Tailwind from '../Assets/Images/tailwind.png'
import Figma from '../Assets/Images/figma.png'
import jquery2 from '../Assets/Images/jquery2.png'
import Node2 from '../Assets/Images/node2.webp'
import PhotoMe from '../Assets/Images/me.png'
import Bali from '../Assets/Images/bali.JPG'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'


const About = () => {
  // const routeVariants = {
  //     initial: {
  //         x: '50vh'
  //     },
  //     final: {
  //         x: '0vh'
  //     }
  // }

  const AnimationSettings = {
    transition: { duration: 0.5 },
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const [downloadCV, setDownloadCV] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const clickedCV = () => {
    setDownloadCV(true);
    setTimeout(() => {
      setIsDownloaded(true);
      setDownloadCV(false);
      setTimeout(() => setIsDownloaded(false), 5000)
    }, 2000);
  }

  return (
    <motion.div
      className='aboutContainer'
      // variants={routeVariants}
      //   initial="initial"
      //   animate="final"
      {...AnimationSettings}
    >
      <h1 className='aboutMainHeading'>About</h1>
      <div className='profilePhotoDiv'>
        <img src={PhotoMe} alt='ProfilePicture' className='profilePicture' />
      </div>
      <div className='personalInfo'>
        <h2 className='aboutH2'>I'm China Pickering.</h2>
        <h3 className='aboutH3'>Junior Front-end Developer with a background in healthcare and strong problem-solving skills.</h3>
      </div>

    <div className='middleSectionAboutPg'>
      <div className='middleSectionItem' id='aboutText'>
        <p >Working in healthcare during a pandemic increased my curiosity for coding but with time pressures, I was unable to teach myself. Finally I started my life time goal of travelling the world and found the time to fall in love with coding.</p>
        <p> Despite travelling in Asia and time difference, I completed a Front-End Development 16-week Bootcamp with Trilogy and refined my skills a Front-End Developer. Eager to find my place in a collaborative team and continue to develop my knowledge and skills.</p>
      </div>
      <div id='waterfallImgDiv' className='middleSectionItem'>
        <img src={Bali} alt='Waterfall' className='waterfallAbout'></img>
      </div>
      <div id='aboutText' className='middleSectionItem'>
        <p> Through my experience I'm able to work under high levels of pressure, take initative with my work, an ability to work indepednently but also collaboratively within a team and to problem-solve through any challenges I face on the day-to-day job.</p>
      </div>
      </div>

      <div className='buttonCvDiv'>
        <button id={!downloadCV ? 'static-CVBtn' : 'clicked-CVBtn'} className='CVBtn' onClick={clickedCV}>

          {
            !downloadCV ?
              <span className='frontButton'>
                myCV
              </span> :
              <span className='frontButton'>
                Downloading
                <span><FontAwesomeIcon className='spinningIcon' icon={faRotateRight} spin /></span>
              </span>
          }
        </button>
      </div>

      <h4>Skills</h4>
      <div className='skillsDiv'>
        <div className='skillsList'>
          <img src={HTML} alt='HTML skill' className='skillIcon' />
          <img src={CSS} alt='CSS skill' className='skillIcon' />
          <img src={JS} alt='JS skill' className='skillIcon' />
          <img src={Bootstrap} alt='Bootstrap skill' className='skillIcon' />
          <img src={Git} alt='Git skill' className='skillIcon' />
          <img src={jquery2} alt='JQuery skill' className='skillIcon' />
          <img src={Node2} alt='Node skill' className='skillIcon' />
          <img src={Atom} alt='React skill' className='skillIcon' />
          <img src={Tailwind} alt='Tailwind skill' className='skillIcon' />
          <img src={Figma} id='figmaIcon' alt='Figma skill' className='skillIcon' />
        </div>
      </div>
    </motion.div>
  )
}

export default About