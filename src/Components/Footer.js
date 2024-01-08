import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import '../Assets/Styles/Footer.css'


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


const Footer = () => {

        const scrollTop = () => {
            setTimeout(() => {
                window.scrollTo(0, 0);
            });
        }            
      

    return (
        <div className='outerFooter'>
        <div className='footerSection'>
            <div className='quickLinks'>
          <NavLink to='/about' className='navbarFullScreenOptions'>
            About
          </NavLink>
          <NavLink to='/work' className='navbarFullScreenOptions'>
            Work
          </NavLink>
          <NavLink to='/contact' className='navbarFullScreenOptions'>
            Contact
          </NavLink>

        </div>
            <div className='footerLinks'>
                <h1 className='footerName'>China Pickering</h1>
                {
                    Contacts.map(contact => {
                        return (
                            <div className='contactInnerLinksRow' key={contact.id}>
                                <NavLink to={contact.link} >
                                    <FontAwesomeIcon icon={contact.icon} />
                                </NavLink>
                            </div>
                        )


                    })
                }
                {
                    contacts2.map(contact => {
                        return (
                            // onClick passes in id so it shows the specific address clicked
                            <div className='contactInnerLinksRow' key={contact.id} >
                                <FontAwesomeIcon icon={contact.icon} />
                            </div>

                        )
                    })
                }

            </div>

        </div>
        <div className='decorTop' >
            <div className='line'></div>
            <p className='topOfPage' onClick={scrollTop}>TOP</p>
        </div>
        </div>

    )
}

export default Footer