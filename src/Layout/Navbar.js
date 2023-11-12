import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
            <div className='navbarContainer'>
                <Link to='/'>
                    Homepage
                </Link>
                <Link to='/about'>
                    About
                </Link>
            </div>
    )
}

export default Navbar