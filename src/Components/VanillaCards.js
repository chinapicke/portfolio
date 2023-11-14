import React from 'react'
import VanillaProjects from '../Assets/JSON/projects.json'
import '../Assets/Styles/Work.css'
import OneProjectCardMobile from './OneProjectCardMobile.js'
import OneProjectCardFullScreenJS from './OneProjectCardFullScreenJS'

function ReactCards() {
  return (
    <>
    <div className='vanillaCards md:hidden'>
      {VanillaProjects.map(project => {
        return <OneProjectCardMobile 
        key={project.id} 
        // using below for shorter writing of destructuring vs
        // image={project.image}
        // projectname={project.projectname}
        // deployedURL={project.deployedURL}
        // description={project.description}
        // githubUrl={project.githubUrl}/>
        project={project} />
      })}
      </div>
      <div className='vanillaCardsFullScreen hidden md:grid'>
      {VanillaProjects.map(project => {
        return <OneProjectCardFullScreenJS
        key={project.id} 
        // using below for shorter writing of destructuring vs
        // image={project.image}
        // projectname={project.projectname}
        // deployedURL={project.deployedURL}
        // description={project.description}
        // githubUrl={project.githubUrl}/>
        project={project} />
      })}
    </div>
    </>
  )
}

export default ReactCards