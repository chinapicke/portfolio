import Navbar from './Components/Navbar';
import './App.css';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import LocationProvider from "./Components/AnimationLayout/LocationProvider";
import RoutesWithAnimation from './Components/AnimationLayout/RoutesWithAnimation';
import SavedHook from './Context/savedHooks';
import { motion} from "framer-motion";

function App() {

  const { showNav } = SavedHook()

  const AnimationSettings = {
    transition: { duration: 0.5 },
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
};

  return (
    <>
    <motion.div className="App"
    {...AnimationSettings}>
          <LocationProvider>
            <RoutesWithAnimation />
          </LocationProvider>
    </motion.div>
    </>
  );
}

export default App;
