import { useLocation } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import Homepage from '../../Pages/Homepage';
import About from '../../Pages/About';
import Layout from '../Layout';
import WorkHomepage from '../../Pages/WorkHomepage';
import Contact from '../../Pages/Contact';
// import SavedHook from '../../Context/savedHooks';


const RoutesWithAnimation = () => {

  // const {setShowNav}= SavedHook()
  const location = useLocation();
  console.log(location)

  return (
    <Routes location={location} key={location.pathname}>
      <Route element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/workHomepage" element={<WorkHomepage />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default RoutesWithAnimation
