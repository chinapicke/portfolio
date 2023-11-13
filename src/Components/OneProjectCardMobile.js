
function OneProjectCardMobile ({project}) {

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
        <h1 className="text-red-500">{project.projectname}</h1> 
        <h2>{project.quickDescription}</h2>
        {/* <h2>{project.deployedURL}</h2>
        <p>{project.githubUrl}</p> */}
        <div className='flex flex-row'>
                    <div className='pl-1'>
                    <button>view project</button>
                <span className='circleShadow'></span>
                    </div>
                    
                </div>
      </div>
    </div>

  )
}

export default OneProjectCardMobile