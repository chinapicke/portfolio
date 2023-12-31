import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa6";


function OneProjectCardMobile({ project }) {

  return (
    <div>
      <div className="cardImage" >
        <img className='appImage' src={project.image} alt='App preview' />
      </div>
      <div className="cardText">
        <h1 className="projectName">{project.projectname}</h1>
        <h2 className="projectShortDescription">{project.quickDescription}</h2>

        <div
          className="linksGrid grid grid-cols-2 "           >
          <div>
            <Link to={project.deployedURL}>
              <button className="workLinks">view project</button>
            </Link>
            <span className='circleShadow' />
          </div>
          <div>
            <Link to={project.githubUrl}>
              <FaGithub className="workLinks" />
            </Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default OneProjectCardMobile