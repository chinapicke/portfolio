import ReactCards from "../Components/ReactCards";
import VanillaCards from '../Components/VanillaCards'


const Work = () => {
  return (
    <div className="workContainer">
      <div className="sideTitleLabel">
      <h1>WORK</h1>
      </div>
      <div>
        <div className="workTitle">
        <h1>My Work.</h1>
        </div>
        <ReactCards />
      <VanillaCards />
      </div>

    </div>
  )
}

export default Work