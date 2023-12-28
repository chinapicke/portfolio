import '../Assets/Styles/Work.css'
import ReactCards from "../Components/ReactCards";
import VanillaCards from '../Components/VanillaCards'
import { useNavigate } from 'react-router-dom';
import { HiArrowNarrowRight } from "react-icons/hi";


const WorkHomepage = () => {  
  // const AnimationSettings = {
  //   transition: { duration: 0.5 },
  //   initial: { opacity: 0, y: -20 },
  //   animate: { opacity: 1, y: 0 },
  //   exit: { opacity: 0, y: -20 }
  // };
const navigate = useNavigate()




  return (
    <div>
      <ReactCards />
      <VanillaCards />
      <div className='py-5 px-3 ml-10 flex flex-row items-center'> 
        <button onClick={()=>navigate('/work')}>view all projects</button>
        <HiArrowNarrowRight className='text-black rightArrow'/>
      </div>
    </div>
    // <motion.div
    //   {...AnimationSettings}
    //   className="WorkHomepagePage">
    //   <div className="projectCards">
    //     <ReactCards />
    //     <VanillaCards />
    //   </div>
    // </motion.div>
  )
}

export default WorkHomepage