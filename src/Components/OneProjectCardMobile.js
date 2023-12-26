import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa6";
import { faGithub } from "@fortawesome/free-brands-svg-icons"


function OneProjectCardMobile({ project }) {

  // const [flip, setFlip] = useState(false)


  return (
    <div>
      {/* className={`card ${flip ? 'flip' : ''}`}>
      onMouseEnter={() => setFlip(!flip)}>  
      className='card'> */}

      {/* <div className="front" > */}
      <div className="cardImage" >
        <img className='appImage' src={project.image} alt='App preview' />
        {/* <h1 className="text-red-500">{project.projectname}</h1> */}
      </div>
      {/* <div className="back"> */}
      <div className="cardText">
        <h1 className="projectName">{project.projectname}</h1>
        <h2>{project.quickDescription}</h2>
        {/* <h2>{project.deployedURL}</h2>
        <p>{project.githubUrl}</p> */}
        {/* <div className='flex flex-row'> */}
          <div
          className="grid grid-cols-2 items-center justify-center"
          //  className='pl-1 flex flex-row items-center justify-evenly'
           >
            <Link to={project.deployedURL}>
              <button className="workLinks">view project</button>
            </Link>
            <Link to={project.githubUrl}>
              <FaGithub className="workLinks" />
            </Link>

            <span className='circleShadow'></span>
          </div>

        {/* </div> */}
      </div>
    </div>

  )
}

export default OneProjectCardMobile