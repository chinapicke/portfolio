import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa6";


function OneProjectCardMobile({ project }) {

  return (
    <div>
      <div className="cardImage" >
        <Link to={project.deployedURL}>
          <img className='appImage' src={project.image} alt='App preview' />
        </Link>
      </div>
      <div className="cardText">
        <h1 className="projectName">{project.projectname}</h1>
        <h2 className="projectShortDescription">{project.quickDescription}</h2>
        <p className="mb-2 text-center">{project.description}</p>
          <div
            className="linksGrid" >
            <div>
            <div className='flex flex-row justify-center items-center'>
            {/* <Link to={project.deployedURL}>
                            <button className="workLinks">view project</button>
                        </Link>
                        <span className='circleShadow' /> */}
            {
              project.components.map((item) => {
                return (
                  <p className='mx-2'>{item}</p>
                )
              })
            }
          </div>
              <Link to={project.githubUrl} className="flex justify-center">
                <FaGithub className="workLinks" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      )
}

      export default OneProjectCardMobile