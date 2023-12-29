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
import Node2 from '../Assets/Images/node.png'
import baliMountain from '../Assets/Images/baliMountain.png'
import Bali from '../Assets/Images/bali.JPG'
import CV from '../Assets/CV.pdf'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
// import { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faRotateRight } from '@fortawesome/free-solid-svg-icons'


const About = () => {


  const AnimationSettings = {
    transition: { duration: 0.5 },
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };



  return (
    <motion.div
      className='aboutContainer'
      // variants={routeVariants}
      //   initial="initial"
      //   animate="final"
      {...AnimationSettings}
    >
      {/* <div className="sideTitleLabelAbout">
      <h1>ABOUT</h1>
      </div> */}
      <div className='flex flex-col-reverse mb-5 topAbout'>
        <div className='profilePhotoDiv flex justify-center'>
          <img src={baliMountain} alt='ProfilePicture' className='profilePicture' />
        </div>
        <div className='personalInfo'>
          <h1 className='aboutH3 text-center mb-5'>Hi, I'm China Pickering. A dedicated front-end developer with a background in healthcare and a passion for travelling.</h1>
        </div>
      </div>
      <Fade top distance='%' duration={1500}>

        <div className='middleSectionAboutPg'>
          <div  className='middleSectionItem sectionGrid'>
            <div>
              <h2 className='aboutSubheadings'>/STORY</h2>
              <h3 className='aboutSubheadingsH3'>A little about me.</h3>
            </div>
            <div>
              <p className='mt-3 textAbout'>Transitioning from mending the body to crafting digital landscapes, I bring a unique perspective to front-end development, where my background as a physiotherapist fuels my passion for
                designing user interfaces which are captivating and the user' friendly.</p>
              <p >Working in healthcare during a pandemic increased my curiosity for technology and the capabilities of coding. It wasn't until I took a year travelling the world that I fully dived in coding and instantly fell in love with it.</p>
              <p> Despite travelling in Asia and the time difference, I completed a 16-week Bootcamp in the UK and refined my skills to help further my understanding of HTML, CSS, Javascript, React and Node.js.
              </p>
              <p>After my bootcamp, I continued to travelled until I returned back to the UK, where I completed a 12-week internship at a healthtech company.
                I was able to leverage my healthcare background to collaborate and develop a worldwide used contracting website that monitored the effectiveness of health technologies and services.
              </p>
              <p>I'm truly excited to see what the future holds and eager to find my place in a collaborative team where I can continue to do what I love!</p>

            </div>
          </div>
          <div className='banner'>
            <div className='rightToLeftText'>
              <p>FrontEnd Developer</p>
              <p>.</p>
              <p>User Experience</p>
              <p>.</p>
              <p>FrontEnd Developer</p>
              <p>.</p>
            </div>
            <div className='leftToRightText '>
              <p>Responsive Design </p>
              <p>.</p>
              <p>Test-Driven Development</p>
              <p>.</p>
              <p>User Research</p>
              <p>.</p>
            </div>
          </div>
        </div>

        <div id='waterfallImgDiv' className='middleSectionItem'>
          <img src={Bali} alt='Waterfall' className='waterfallAbout'></img>
        </div>
        <div className='middleSectionItem sectionGrid'>
          <div>
            <h2 className='aboutSubheadings'>/THE PROCESS</h2>
            <h3 className='aboutSubheadingsH3'>How I work.</h3>
          </div>
          <div>
            <p className='mt-3 textAbout'> Through my experience I'm able to work under high levels of pressure and take initative with my work. I bring strong communication and collaboration abilities, honed through working closely with cross-functional teams in healthcare settings
              Futhermore, I am confident in working indepednently and collaboratively, whilst being able to problem-solve through any challenges I face.</p>
          </div>
        </div>


        <div className='lg:grid grid-cols-2'>
          <div className='middleSectionItem mb-3 lg:ml-14 lg:mb-0'>
            <div>
              <h2 className='aboutSubheadings'>/SKILLS</h2>
              <h3 className='aboutSubheadingsH3 mb-5 lg:mb-5'>What I use.</h3>
            </div>
            <div className='skillsDiv textAbout'>
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
          </div>

          <div id='softSkillsSection' className='middleSectionItem '>
            <div>
              <h2 className='aboutSubheadings'>/MORE INFO</h2>
              <h3 className='aboutSubheadingsH3'>More about me.</h3>
            </div>
            <div className='mt-8 textAbout'>
              <h3 className='softSkillH3'>Past Experience.</h3>
              <div className='contactLinks'>
                <Link to={CV}
                  download="China_Pickering_CV"
                  target="_blank"
                  rel="noreferrer"
                // className='cvLink'
                >CV</Link>
              </div>
              <h3 className='softSkillH3'>Social.</h3>
              <div className='contactLinks'>
                <Link>LinkedIn</Link>
                <span className='px-2'>/</span>
                <Link>Github</Link>
              </div>
              <h3 className='softSkillH3'>Email.</h3>
              <div className='contactLinks'>
                <Link>chinapickering97@gmail.com</Link>
              </div>

            </div>
          </div>
        </div>

      </Fade>
    </motion.div>
  )
}

export default About