import { createContext, useState } from "react";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'


export const PortfolioContext = createContext()

const PortfolioProvider = ( props ) => {

  const [showNav, setShowNav] = useState(false);

  

    const Contacts = [
      {
          name: "LinkedIn",
          id: 1,
          icon: faLinkedinIn,
          link: "https://www.linkedin.com/in/china-pickering-019153250/"
      },
      {
          name: "Github",
          id: 2,
          icon: faGithub,
          link: "https://github.com/chinapicke"
      },
  ]

  const contacts2 = [
      {
          id: 3,
          icon: faPaperPlane,
          show: "chinapickering97@gmail.com"
      },
      {
          id: 4,
          icon: faPhone,
          show: "07563920731"
      }

  ]



  return (

    <PortfolioContext.Provider value={[]}>
        {props.children}
    </PortfolioContext.Provider>
        )
}
  

export default PortfolioProvider
