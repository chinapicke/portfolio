import { useState } from "react"

const SavedHook = () => {

    const [showNav, setShowNav] = useState(true); 
    
  return{
    showNav,
    setShowNav
    
  }
}

export default SavedHook