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
import baliMountain from '../Assets/Images/baliMountain.png'
import Bali from '../Assets/Images/bali.JPG'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'


const About = () => {


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
      <div className='flex flex-col-reverse mb-5 topAbout'>
        <div className='profilePhotoDiv flex justify-center'>
          <img src={baliMountain} alt='ProfilePicture' className='profilePicture' />
        </div>
        <div className='personalInfo'>
        <h1 className='aboutH3 text-center mb-5'>Hi, I'm China Pickering. A dedicated front-end developer with a background in healthcare and a passion for travelling.</h1>
        </div>
      </div>

      <div className='middleSectionAboutPg'>
        <div className='middleSectionItem' id='aboutText'>
          <p>Transitioning from mending the body to crafting digital landscapes, I bring a unique perspective to front-end development, where my background as a physiotherapist fuels my passion for 
            designing user interfaces which are captivating and the user' friendly.</p>
          <p >Working in healthcare during a pandemic increased my curiosity for technology and the capabilities of coding. It wasn't until I took a year travelling the world that I fully dived in coding and instantly fell in love with it.</p>
          <p> Despite travelling in Asia and the time difference, I completed a 16-week Bootcamp in the UK and refined my skills to help further my understanding of HTML, CSS, Javascript, React and Node.js.
          </p>
      </div>
      <div className='banner bg-black h-24'>

      </div>
      <div className='middleSectionItem pt-5'>
          <p>After my bootcamp, I continued to travelled until I returned back to the UK, where I completed a 12-week internship at a healthtech company.
            I was able to leverage my healthcare background to collaborate and develop a worldwide used contracting website that monitored the effectiveness of health technologies and services.
            </p>
          <p>I'm truly excited to see what the future holds and eager to find my place in a collaborative team where I can continue to do what I love!</p>
        </div>
      </div>

      <div className='aboutMiddleBanner'>
      </div>

      <div id='waterfallImgDiv' className='middleSectionItem'>
        <img src={Bali} alt='Waterfall' className='waterfallAbout'></img>
      </div>
      <div id='softSkillsSection' className='middleSectionItem'>
        <h2>How I work</h2>
        <p> Through my experience I'm able to work under high levels of pressure and take initative with my work. I bring strong communication and collaboration abilities, honed through working closely with cross-functional teams in healthcare settings
          Futhermore, I am confident in working indepednently and collaboratively, whilst being able to problem-solve through any challenges I face.</p>
      </div>

      <div className='buttonCvDiv'>
        <button id={!downloadCV ? 'static-CVBtn' : 'clicked-CVBtn'} className='CVBtn' onClick={clickedCV}>
          CV
        </button>
      </div>

      <h4>Listed below are the technologies I know.</h4>
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