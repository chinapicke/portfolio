// import Contacts from '../../Assets/JSON/contacts.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'




const ContactBanner = () => {

    // state changes to open and close number and email address when clicked on 
    // below state is if the text is shown or not
    const [showAddress, setShowAddress] = useState(false)
    // this is where the state is shown if it is true 
    const [contactShown, setContactShown] = useState()

    // pass in id so that the item with the specific id can be added to the contactShown state/array
    const contactShow = (id) => {
        setShowAddress(!showAddress)
        setContactShown(id)
    }

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
        <div className='contactBanner'>
                {
                    Contacts.map(contact => {
                        return (
                            <div className='contactInnerLinks' key={contact.id}>
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
                            <div className='contactInnerLinks' key={contact.id} onClick={() => contactShow(contact.id)}>
                                <FontAwesomeIcon icon={contact.icon} />
                                {
                                    // if showAddress equals true and contact.id is stored in contactShown then show the h1
                                    showAddress && contact.id === contactShown ?
                                        <h1 className='contactAddress'>{contact.show}</h1> :
                                        null
                                }
                            </div>

                        )
                    })
                }

        </div>

    )
}

export default ContactBanner