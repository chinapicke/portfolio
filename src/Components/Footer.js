import ContactBanner from "./Banners/ContactBanner"
import '../Assets/Styles/Footer.css'

const Footer = () => {
  return (
    <div className='linkBar'>
    <div>
        <hr className='contactLineStart'></hr>
    </div>
    <div>
        <ContactBanner />
    </div>
    <div>
        <hr className='contactLineEnd'></hr>
    </div>

</div>
  )
}

export default Footer