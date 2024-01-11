import React from 'react'
import '../Assets/Styles/Work.css'
import OneProjectCardMobile from './OneProjectCardMobile.js'
import OneProjectCardFullscreen from './OneProjectCardFullscreen'
import HomePageCards from '../Assets/JSON/homepageProjects.json'


const HomepageCards = () => {
  return (
    <>

      <div className='reactCards md:hidden'>
        {HomePageCards.map(project => {
          return <OneProjectCardMobile
            key={project.id}
            project={project} />
        })}
      </div>
        <div className='reactCardsFullscreen hidden md:grid'>
          {HomePageCards.map(project => {
            return <OneProjectCardFullscreen
              key={project.id}

              project={project} />
          })}
        </div>

    </>
  )
}

export default HomepageCards