import { useLocation } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import Homepage from '../../Pages/Homepage';
import About from '../../Pages/About';
import Layout from '../Layout';
import Work from '../../Pages/Work'
import Contact from '../../Pages/Contact';
import { useEffect } from 'react';
// import BrokeButCultured from '../ProjectsPages/BrokeButCultured';
// import WeatherApp from '../ProjectsPages/WeatherApp'
// import CodeQuiz from '../ProjectsPages/CodeQuiz';




const RoutesWithAnimation = () => {

  const {pathname} = useLocation();
  const location = useLocation();
 
  useEffect(()=>{
window.scrollTo({top:0,behaviour:"smooth"})
  },[pathname])

  return (
    <Routes location={location} key={location.pathname}>
      <Route element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/brokeButcultured" element={<BrokeButCultured />} />
        <Route path="/weatherApp" element={<WeatherApp />} />
        <Route path="/codeQuiz" element={<CodeQuiz />} /> */}
      </Route>
    </Routes>
  )
}

export default RoutesWithAnimation
